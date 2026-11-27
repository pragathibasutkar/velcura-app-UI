import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => { await page.addInitScript(() => { localStorage.clear(); }); });

test("browse to PDP, cart and checkout", async ({ page }) => {
  await page.goto("/women");
  await expect(page.getByRole("heading", { name: "Women's Scrubs" })).toBeVisible();
  await page.locator('a[href^="/products/"]').first().click();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.getByRole("button", { name: /Add to Cart/ }).click();
  await page.goto("/cart");
  await expect(page.getByRole("heading", { name: /Clinical Cart|Your Clinical Cart/i })).toBeVisible();
  await page.getByRole("link", { name: /Checkout/i }).click();
  await expect(page.getByRole("heading", { name: "Order Summary" })).toBeVisible();
});

test("clinician sign in and 2FA", async ({ page }) => {
  await page.goto("/sign-in");
  await page.getByLabel("Email or Mobile Number").fill("doctor@example.com");
  await page.locator('input[name="password"]').fill("clinical123");
  await page.getByRole("button", { name: /Sign in to Ward Portal/i }).click();
  await expect(page).toHaveURL(/\/verify$/);
  const digits = ["2", "4", "6", "8", "1", "0"];
  for (let index = 0; index < digits.length; index += 1) await page.getByLabel(`Verification digit ${index + 1}`).fill(digits[index]);
  await page.getByRole("button", { name: /Verify/i }).click();
  await expect(page).toHaveURL(/\/account$/);
});

test("institutional quote request flow", async ({ page }) => {
  await page.goto("/hospital/quotes-orders");
  await page.getByRole("button", { name: /Create new RFQ/i }).click();
  await page.getByPlaceholder("e.g. 2027 nursing refresh").fill("2027 nursing refresh");
  await page.getByLabel("Estimated quantity").fill("100");
  await page.getByRole("button", { name: /Create RFQ draft/i }).click();
  await expect(page.getByRole("status")).toContainText("RFQ draft created");
});

test("return request flow", async ({ page }) => {
  await page.goto("/account/orders/VLC-8841");
  await page.getByRole("button", { name: /Return or exchange item/i }).first().click();
  await page.getByRole("dialog").getByRole("button", { name: /Confirm Doorstep Pickup Request/i }).click();
  await expect(page.getByText(/Return request RTN-/)).toBeVisible();
});

test("admin order status change", async ({ page }) => {
  await page.goto("/admin/orders");
  const status = page.getByLabel("Update VLC-9204");
  await status.selectOption({ label: "Delivered" });
  await expect(page.getByRole("status")).toContainText("VLC-9204 updated");
});

test("key routes have no critical axe violations", async ({ page }) => {
  const { AxeBuilder } = await import("@axe-core/playwright");
  for (const route of ["/", "/women", "/products/classic-v-neck", "/cart", "/sign-in", "/hospital", "/admin", "/admin/products"]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    const critical = results.violations.filter((v) => v.impact === "critical");
    expect(critical, `${route} has critical axe violations`).toEqual([]);
  }
});

test("mobile storefront remains usable", async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 375, height: 812 }, isMobile: true });
  const page = await context.newPage();
  await page.goto("/women");
  await expect(page.getByRole("heading", { name: "Women's Scrubs" })).toBeVisible();
  await expect(page.locator("body")).toHaveCSS("overflow-x", "visible");
  await context.close();
});

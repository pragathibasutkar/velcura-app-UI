# Velcura interactive feature checklist

This is the implementation checklist extracted from every coded reference screen. Every item is intended to have a working local/mock behavior, including loading, success, error, empty, disabled, and validation states where applicable.

## Global storefront

- Responsive header/navigation with mobile menu, active links, search overlay, account link, wishlist link, cart count, WhatsApp support, and footer navigation.
- Search query input with live suggestions, submit/reset, no-results recovery, product result filters, sort, pagination, and keyboard/Esc behavior.
- Product cards with image/link, wishlist toggle, color/size selection, add-to-cart feedback, disabled out-of-stock state, and hover/focus states.
- Cart drawer with open/close, outside click/Esc close, quantity stepper, remove, subtotal/GST/shipping calculations, empty state, and checkout link.
- Collection filters for category, size, color, price, availability, and sort; filters are URL/state synchronized.
- Product detail gallery, thumbnail selection, color/size/quantity controls, stock messaging, add-to-cart, related products, and clinician notes.
- Editorial links for fabric, about, help, contact, size guide, hospital portal, and journal placeholders.

## Auth and role access

- Clinician sign-in, create account, password visibility, validation errors, forgot-password simulation, mobile OTP path, institutional-account path, terms links.
- Six-digit OTP entry, per-digit keyboard flow, paste support, resend cooldown, alternate WhatsApp/call channels, invalid/expired/error/success states.
- Admin sign-in, institutional SSO simulation, backup key path, two-factor verification, and protected-route redirect.
- Guest, clinician, hospital procurement, and admin route guards with unauthorized/404 states and persisted mock session.

## Clinician account

- Overview cards for active shipments, saved garments, points, and recent orders.
- Orders search/filter/status tabs, sort, pagination, order detail timeline, itemized consignment summary, and return/exchange modal with reason/size validation.
- Wishlist remove and move-to-cart actions, empty state, and persisted wishlist.
- Address list with add/edit/delete/default actions, residential/work labels, PIN and phone validation, and confirmation modal.
- Profile/credentials form, fit measurements matrix, password update, notification preference toggles, and save success/error states.

## Checkout

- Stepper with contact, address, delivery, payment, and institutional/GST invoicing sections.
- Address selection/change, delivery method selection, UPI VPA verification, card/COD selection, GSTIN validation, order summary/cart editing.
- Place-order loading, payment success/error, disabled submission, confirmation receipt, and order tracking CTA.

## Hospital portal

- Portal shell with responsive sidebar/off-canvas navigation, hospital identity, account manager, support panel, sign out, and active nav state.
- Procurement KPIs, production batch progress, spend chart, requisition table, department requisition modal, annual audit CSV export.
- Quotes/orders ledger tabs, search/status filters, table sorting/pagination, export audit CSV, and new RFQ navigation.
- Staff roster CSV upload/import validation, editable roster rows, sizing matrix, distribution visualization, export roster, and reorder from roster.
- Bulk quote customisation stepper, artwork upload/remove, garment placement/hotspot controls, thread palette selection, departmental sub-text allocation, and next/back actions.

## Admin and production

- Admin shell with sidebar, responsive collapse, date-range selector, notifications drawer, mark-all-read, profile/account menu, and sign out.
- Executive KPIs, revenue/channel charts, top products, stock deficit alerts, fulfilment/QC exception list, and drill-in actions.
- Orders/products/customers tables with search, filters, sort, pagination, row selection, detail drawers, edit forms, status changes, and optimistic/mock API feedback.
- Empty-state archetypes for orders/products/quotes with recovery actions.
- Notifications drawer with All/Mentions tabs, unread counts, read state, and close behavior.
- Quotes Kanban board with status columns, quote cards, filters, detail modal, and status transition simulation.
- Production capacity/throughput charts, bottleneck/intervention actions, batch detail, station history, and status updates.
- Reports date/channel filters, revenue/funnel/category/cohort charts, tabular analytics, and export action.
- Marketing campaign tabs, campaign status toggles, schedule/editor modal, validation, and seeded campaigns.
- Settings team members, invite modal, role selector, permission matrix toggles, revoke/disable confirmation, and danger-zone safeguards.

## Accessibility and system feedback

- WCAG AA contrast-aware semantic HTML, visible saffron focus rings, minimum 44px targets, labelled icon buttons, keyboard navigation, and reduced-motion-safe transitions.
- Focus-trapped modal/drawer primitives, Esc and backdrop close where appropriate, aria-live toast region, inline form errors, loading skeletons, disabled controls, success/error toasts, and empty states.
- Responsive layouts verified at 1440px desktop, 768px tablet, and 375px mobile breakpoints.

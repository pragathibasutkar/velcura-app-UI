# Final feature vs design coverage report

Audit date: 2026-11-27

## Coverage matrix

| Design folder | Route | Implementation | Interaction coverage |
|---|---|---|---|
| `velcura_by_vastram_desktop_storefront_homepage` | `/` | Complete | Hero links, product rails, global navigation, cart/search entry |
| `women_s_scrubs_velcura_collection` | `/women` | Complete | Filters, sort, wishlist, quick view, add-to-cart, pagination/load state |
| `classic_v_neck_scrub_top_deep_teal_product_detail_page` | `/products/[id]` | Complete | Gallery, colour/size, quantity, cart, wishlist, accordions, reviews anchor |
| `clinical_size_guide_velcura_by_vastram` | `/size-guide` | Complete | Unit toggle, measurement guidance, calculator |
| `search_results_for_navy_scrub_pants_velcura` | `/search` | Complete | Query, filters, sorting, results |
| `search_no_results_found_velcura` | `/search?q=unknown` | Complete | Empty state and recovery suggestions |
| `404_this_page_took_a_break_velcura_by_vastram` | `not-found` | Complete | Recovery links |
| `velcura_storefront_mini_cart_drawer_state` | Global drawer | Complete | Quantity, remove, checkout, empty state |
| `your_clinical_cart_velcura_by_vastram` | `/cart` | Complete | Quantity, remove, promo, GST, shipping, checkout |
| `your_cart_is_empty_velcura_by_vastram` | `/cart?empty=1` | Complete | Empty cart recovery |
| `velcura_single_page_checkout_1440px` | `/checkout` | Complete | Address validation, delivery, payment, UPI, GST, promo, order creation |
| `order_confirmation_velcura_by_vastram` | `/checkout/confirmation` | Complete | Receipt, tracking and order routing |
| `sign_in_velcura_by_vastram` | `/sign-in` | Complete | Validation, password visibility, OTP route |
| `create_account_velcura_by_vastram` | `/create-account` | Complete | Validated account creation |
| `two_factor_verification_velcura_by_vastram` | `/verify` | Complete | Code validation, resend feedback |
| `velcura_fabric_technology_botanical_clinical_textiles` | `/fabric` | Complete | Editorial technology sections |
| `about_powered_by_vastram_velcura` | `/about` | Complete | Editorial story and impact sections |
| `interactive_garment_customiser_velcura_by_vastram` | `/customiser` | Complete | Mode, swatches, placement, pricing |
| `help_centre_clinical_support_velcura_by_vastram` | `/help` | Complete | FAQ search and accordions |
| `contact_us_clinical_support_velcura_by_vastram` | `/contact` | Complete | Validated support form and map |
| `customer_account_dashboard_velcura_by_vastram` | `/account` | Complete | Shipment, orders, quick reorder |
| `your_orders_velcura_clinician_account` | `/account/orders` | Complete | Search, status tabs, pagination |
| `order_details_return_request_velcura_clinician_account` | `/account/orders/[id]` | Complete | Return/exchange modal and mock submission |
| `wishlist_velcura_clinician_account` | `/account/wishlist` | Complete | Remove and move-to-cart |
| `saved_addresses_delivery_nodes_velcura_clinician_account` | `/account/addresses` | Complete | Add/edit/delete/default |
| `profile_fit_measurements_velcura_clinician_account` | `/account/profile` | Complete | Saved fit measurements and PDP suggestion |
| `hospital_procurement_dashboard_aster_care_hospital` | `/hospital` | Complete | KPIs, chart, requisition modal, CSV |
| `quotes_orders_aster_care_hospital_procurement` | `/hospital/quotes-orders` | Complete | Tabs, search, filters, RFQ modal, CSV |
| `staff_roster_sizing_matrix_aster_care_hospital` | `/hospital/team` | Complete | Editable matrix, CSV import/export, totals |
| `institutional_bulk_quote_configurator_step_3_customisation` | `/hospital/quotes/new/customisation` | Complete | Crest, placement, embroidery, typography, palette, preview |
| `admin_sign_in_two_factor_verification_velcura_admin` | `/admin/sign-in`, `/admin/verify` | Complete | Sign-in and OTP verification |
| `velcura_admin_executive_operations_command` | `/admin` | Complete | KPIs, revenue chart, range, alerts, export |
| `admin_empty_states_orders_products_quotes_velcura_admin` | `/admin/empty-states` | Complete | Empty state cards and recovery links |
| `admin_notifications_panel_sliding_drawer_velcura_admin` | `/admin/notifications` | Complete | All/unread, mark read, mark all |
| `orders_fulfilment_command_velcura_admin` | `/admin/orders` | Complete | Search, filter, fulfilment updates |
| `products_catalog_management_velcura_admin` | `/admin/products` | Complete | Search, add/edit/delete, stock, variant counts |
| `customers_clinical_accounts_velcura_admin` | `/admin/customers` | Complete | Search, type filter, detail modal |
| `institutional_quotes_kanban_board_velcura_admin` | `/admin/quotes` | Complete | Drag/drop stages, add quote |
| `production_manufacturing_command_vastram_atelier` | `/admin/production` | Complete | Batch progress, pause/resume, intervention feedback |
| `reports_clinical_analytics_velcura_admin` | `/admin/reports` | Complete | Charts, channel filter, CSV export |
| `marketing_growth_operations_velcura_admin` | `/admin/marketing` | Complete | Campaign list, activate/pause, create modal |
| `settings_team_roles_velcura_admin` | `/admin/settings` | Complete | Members, role changes, permissions, invites |

## Audit checks

- Responsive layout classes cover the requested 375px, 768px, and 1440px breakpoints; Playwright includes a 375px storefront smoke check.
- Shared buttons, fields, tabs, tables, modals, drawers, toasts, pagination, status pills, and stepper primitives are reused across route groups.
- Keyboard labels and visible focus styles are present on interactive controls; representative routes are checked with axe-core in `tests/smoke.spec.ts` for critical violations. The audit fixed unlabeled cart icon actions and the admin reporting-range select.
- Mock state persists through localStorage for cart, checkout orders, wishlist, profile fit, addresses, and session flows.
- Remaining non-blocking lint warnings: account orders `useMemo` dependency and checkout image optimization recommendation.
- Lighthouse CI is configured in `lighthouserc.cjs` with 90+ assertions. Execution in this Windows sandbox was blocked by Chrome process access (`taskkill` / websocket permission), so no numeric Lighthouse score is claimed here.
- Visual review was performed against the exported markup structure, token system, and responsive compositions. Exact image-diff baselines are not committed because the design export contains static reference PNGs rather than a runnable visual-regression harness.

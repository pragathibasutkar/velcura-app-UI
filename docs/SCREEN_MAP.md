# Velcura screen map

Phase 1 source-of-truth inventory. Routes are intentionally stable so the mock API can later be swapped for a real backend without changing UI contracts.

## Storefront and marketing

| Design folder | Route | Components | Features / mock data |
|---|---|---|---|
| `velcura_by_vastram_desktop_storefront_homepage` | `/` | StorefrontHeader, Hero, ProductRail, EditorialSection, Footer | hero CTA, category links, featured products, product catalog, home editorial assets |
| `women_s_scrubs_velcura_collection` | `/women` | StorefrontHeader, CollectionHero, FilterBar, ProductGrid, Pagination | filters, sort, wishlist, add-to-cart, products |
| `classic_v_neck_scrub_top_deep_teal_product_detail_page` | `/products/classic-v-neck-scrub-top` | ProductGallery, ProductInfo, VariantPicker, RelatedProducts | image gallery, size/color selection, quantity, add-to-cart, product detail |
| `interactive_garment_customiser_velcura_by_vastram` | `/customiser` | CustomiserCanvas, SwatchPicker, PlacementControls, PriceSummary | garment/institutional modes, colors, embroidery placement, quote/cart data |
| `velcura_fabric_technology_botanical_clinical_textiles` | `/fabric` | EditorialHero, TechnologyCards, MaterialTimeline, Footer | technology sections, fabric assets |
| `about_powered_by_vastram_velcura` | `/about` | EditorialHero, Timeline, ImpactStats, Footer | company story and impact data |
| `contact_us_clinical_support_velcura_by_vastram` | `/contact` | ContactForm, LocationCard, FAQAccordion | validated message form, WhatsApp/contact actions, Bengaluru location |
| `help_centre_clinical_support_velcura_by_vastram` | `/help` | HelpSearch, CategoryCards, FAQAccordion | search, category navigation, support articles |
| `clinical_size_guide_velcura_by_vastram` | `/size-guide` | FitCalculator, MeasurementDiagram, SizeTable | unit toggle, fit calculator, size guide assets |
| `search_results_for_navy_scrub_pants_velcura` | `/search?q=navy+scrub+pants` | SearchHeader, FilterBar, ProductGrid | query, filters, sort, product results |
| `search_no_results_found_velcura` | `/search?q=unknown` | SearchHeader, EmptyState, ProductRail | query reset, suggested products, empty state |
| `404_this_page_took_a_break_velcura_by_vastram` | `not-found` | NotFound, StorefrontHeader, RecoveryLinks | recovery links to cart, wishlist, orders |

## Clinician account and checkout

| Design folder | Route | Components | Features / mock data |
|---|---|---|---|
| `sign_in_velcura_by_vastram` | `/sign-in` | AuthShell, SignInForm, RoleSelector | email/password validation, OTP path, institutional path |
| `create_account_velcura_by_vastram` | `/create-account` | AuthShell, AccountForm, PasswordMeter | account validation, terms acceptance, create account |
| `two_factor_verification_velcura_by_vastram` | `/verify` | OtpForm, AuthShell | six-digit OTP, resend cooldown, alternate channels |
| `customer_account_dashboard_velcura_by_vastram` | `/account` | AccountShell, AccountOverview, ShipmentCard, PointsCard | protected route, shipment/order/wishlist data |
| `your_orders_velcura_clinician_account` | `/account/orders` | AccountShell, OrderTable, StatusPill, Pagination | search, status filter, pagination, order data |
| `order_details_return_request_velcura_clinician_account` | `/account/orders/[id]` | OrderTimeline, LineItems, ReturnModal | protected order detail, return/exchange form |
| `wishlist_velcura_clinician_account` | `/account/wishlist` | AccountShell, WishlistGrid, ProductCard | remove, move to cart, wishlist state |
| `saved_addresses_delivery_nodes_velcura_clinician_account` | `/account/addresses` | AccountShell, AddressCard, AddressForm, Modal | add/edit/delete/default address, PIN validation |
| `profile_fit_measurements_velcura_clinician_account` | `/account/profile` | ProfileForm, FitMatrix, PreferencesPanel | profile/credentials, fit measurements, notification toggles |
| `your_clinical_cart_velcura_by_vastram` | `/cart` | CartTable, QuantityStepper, SummaryCard | quantity/remove, promo, totals/GST, cart state |
| `your_cart_is_empty_velcura_by_vastram` | `/cart?empty=1` | EmptyCart, ProductRail | recovery CTA, suggested products |
| `velcura_storefront_mini_cart_drawer_state` | global drawer | MiniCartDrawer, LineItem | open/close, quantity/remove, checkout CTA |
| `velcura_storefront_search_overlay_state` | global overlay | SearchOverlay, SearchInput, SuggestionList | keyboard/Esc close, live suggestions |
| `velcura_single_page_checkout_1440px` | `/checkout` | CheckoutStepper, AddressForm, DeliveryOptions, PaymentForm, OrderSummary | validation, GST/institution fields, UPI/card/COD, loading/success/error |
| `order_confirmation_velcura_by_vastram` | `/checkout/confirmation` | ConfirmationHero, RoutingLedger, Receipt | confirmation details, order tracking |

## Hospital procurement

| Design folder | Route | Components | Features / mock data |
|---|---|---|---|
| `hospital_procurement_dashboard_aster_care_hospital` | `/hospital` | PortalShell, ProcurementKPIs, SpendChart, RequisitionTable, SupportPanel | protected institutional dashboard, chart, CSV export, requisition |
| `quotes_orders_aster_care_hospital_procurement` | `/hospital/quotes-orders` | PortalShell, Tabs, LedgerTable, StatusPill | tab/filter/search, export, create RFQ |
| `staff_roster_sizing_matrix_aster_care_hospital` | `/hospital/team` | RosterTable, UploadDropzone, SizeMatrix | CSV import, sizing edits, export, reorder |
| `institutional_bulk_quote_configurator_step_3_customisation` | `/hospital/quotes/new/customisation` | QuoteStepper, UploadField, PlacementEditor, SwatchPicker | upload/remove artwork, placement, color selection, next/back |

## Admin and production console

| Design folder | Route | Components | Features / mock data |
|---|---|---|---|
| `admin_sign_in_two_factor_verification_velcura_admin` | `/admin/sign-in` | AuthShell, AdminSignInForm, OtpForm | admin auth, 2FA, SSO/backup key paths |
| `velcura_admin_executive_operations_command` | `/admin` | AdminShell, KPICards, RevenueChart, AlertList | protected overview, charts, date range, alerts |
| `admin_empty_states_orders_products_quotes_velcura_admin` | `/admin/empty-states` | AdminShell, EmptyStateGrid | empty order/product/quote states |
| `admin_notifications_panel_sliding_drawer_velcura_admin` | `/admin/notifications` | AdminShell, NotificationDrawer, NotificationList | drawer, tabs, mark read, notification data |
| `orders_fulfilment_command_velcura_admin` | `/admin/orders` | AdminShell, DataTable, StatusPill, DetailDrawer | search/filter/sort/pagination, order status updates |
| `products_catalog_management_velcura_admin` | `/admin/products` | AdminShell, ProductTable, ProductEditor | catalog search/filter, edit form, save/error |
| `customers_clinical_accounts_velcura_admin` | `/admin/customers` | AdminShell, CustomerTable, CustomerDetail | search/filter, account detail, customer data |
| `institutional_quotes_kanban_board_velcura_admin` | `/admin/quotes` | AdminShell, KanbanBoard, QuoteCard, DetailModal | drag/status simulation, filters, quote data |
| `production_manufacturing_command_vastram_atelier` | `/admin/production` | AdminShell, CapacityChart, BatchTable, InterventionPanel | charts, batch detail, intervention actions |
| `reports_clinical_analytics_velcura_admin` | `/admin/reports` | AdminShell, ReportFilters, ChartGrid, CohortTable | date/channel filters, charts, export |
| `marketing_growth_operations_velcura_admin` | `/admin/marketing` | AdminShell, CampaignTable, CampaignEditor | campaign tabs, schedule/toggle, editor |
| `settings_team_roles_velcura_admin` | `/admin/settings` | AdminShell, MemberTable, PermissionsMatrix, InviteModal | role permissions, invite validation, danger zone |

## Image-only asset folders

Copied to `public/images` with kebab-case names and consumed by the relevant pages: hero/editorial photography, product photography, fabric technology macro images, founder/team/about, Bengaluru map, size-guide diagrams, embroidery, swatches, empty search illustration, and production/quality-control imagery. Asset manifest is `src/lib/mock-data/assets.ts`.

## Shared contracts

All route groups use the shared primitives in `src/components/ui`, role-aware shells in `src/components/shells`, mock API functions in `src/lib/api`, and seeded entities in `src/lib/mock-data`. Theme colors, typography, radii, spacing, focus rings, and elevations are CSS variables mirrored into Tailwind tokens; components never use raw hex values.

## Phase status

- Phase 1: storefront, search, size guide, cart/checkout foundations, and shared component library implemented.
- Phase 2: mini cart, cart, checkout, confirmation, persisted cart, and mock order creation implemented.
- Phase 3: auth, editorial, customiser, help, and support pages implemented.
- Phase 4: clinician account dashboard, orders, returns, wishlist, addresses, profile, and fit suggestions implemented.
- Phase 5: institutional dashboard `/hospital`, quotes/orders ledger `/hospital/quotes-orders`, roster sizing matrix `/hospital/team`, and quote customisation studio `/hospital/quotes/new/customisation` implemented. CSV import/export, editable sizing totals, RFQ/requisition modals, ledger filters, live garment preview, placement, artwork filename upload, typography, thread palette, and save/share feedback are wired.
- Phase 6: admin sign-in `/admin/sign-in`, 2FA `/admin/verify`, executive overview `/admin`, empty states `/admin/empty-states`, notifications `/admin/notifications`, fulfilment `/admin/orders`, catalog `/admin/products`, customers `/admin/customers`, quotes Kanban `/admin/quotes`, production `/admin/production`, analytics `/admin/reports`, marketing `/admin/marketing`, and roles/settings `/admin/settings` implemented.

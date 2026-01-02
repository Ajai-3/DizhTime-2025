# DizhTime - Interface Feature Specifications

This document details the specific features and user stories for the four distinct interfaces of the platform.

## 1. 🏠 Customer Application (Web & Mobile)
*The primary revenue generator. Focused on Conversion, Speed, and Delight.*

### A. Onboarding & Profile
*   **Phone Login**: OTP-based login for friction-free entry.
*   **Social Login**: Google/Facebook integration.
*   **Address Book**: Save "Home", "Work", "Partner's Place" with precise GPS pins.
*   **Wallet**: View balance, Add Money, transaction history.

### B. Discovery & Search
*   **Global Search**: Elastic-powered search for dishes ("Butter Chicken") or restaurants.
*   **Filters**: Veg/Non-Veg, Rating 4.0+, Delivery Time < 30mins, Cost for Two.
*   **Collections**: Curated lists like "Best Pizza", "Healthy Eats", "Trending now".
*   **Restaurant Page**:
    *   Sticky Menu Categories (Starters, Mains).
    *   Veg/Non-Veg toggle.
    *   "Bestseller" tags.
    *   Customizable Items (Add cheese, remove onions).

### C. Ordering & Checkout
*   **Cart**: Persistent cart (items remain if app is closed).
*   **Coupons**: Apply promo codes (e.g., `WELCOME50`).
*   **Tip Driver**: Option to add a tip.
*   **Instruction to Kitchen**: "Make it spicy".
*   **Instruction to Driver**: "Don't ring bell".
*   **Payment**: Credit Card, UPI, Wallet, COD.

### D. Post-Order Experience
*   **Live Tracking**: Real-time map showing Driver moving.
*   **Status Timeline**: Placed -> Confirmed -> Preparing -> On the Way -> Delivered.
*   **Chat/Call**: Chat with Support or Call Driver (Masked numbers).
*   **Rating**: Rate Food (1-5) and Delivery (1-5) separately.

---

## 2. 🍳 Restaurant Partner Portal (Web Dashboard)
*The Command Center for Restaurant Owners.*

### A. Order Management
*   **Live Order Stream**: Sound notification when a new order arrives.
*   **Acceptance Workflow**: Review items -> Accept/Reject (with reason).
*   **Kitchen Process**: Mark as "Food Ready" to trigger Driver pickup.
*   **Prep Time Adjustment**: Increase prep time during busy hours.

### B. Menu Management
*   **Item Editor**: Name, Photo, Price, Description.
*   **Toggle Availability**: One-click "Out of Stock" switch for items.
*   **Variant Groups**: Setup "Size" (Small/Med/Large) or "Crust" options.
*   **Scheduling**: Set breakfast/lunch/dinner menus to auto-appear.

### C. Outlet Settings
*   **Busy Mode**: Temporarily stop accepting orders.
*   **Operating Hours**: Set opening/closing times per day.
*   **Zones**: Define delivery radius (if managing own delivery).

### D. Business Analytics
*   **Sales Heatmap**: Which hours are busiest?
*   **Top Items**: What dishes are selling the most?
*   **Customer Feedback**: Read and reply to specific reviews.
*   **Payouts**: View weekly settlements and platform commission deductions.

---

## 3. 🛵 Delivery Partner App (Mobile)
*Focused on utility, battery saving, and clear navigation.*

### A. Shift Management
*   **Go Online/Offline**: Toggle duty status.
*   **floating Cash**: View cash collected from COD orders.

### B. Delivery Workflow
*   **Job Offer**: Loud ringtone. Shows Distance to Restaurant + Distance to User + Expected Earning.
*   **Navigation**: Deep link to Google Maps for navigation.
*   **Pickup**: "Projected Arrival Time" at restaurant. Verify order ID.
*   **Drop-off**: OTP verification (Customer gives OTP to Driver to complete delivery).

### C. Earnings & Incentives
*   **Shift Earnings**: Real-time ticker of money made today.
*   **Incentives**: "Complete 5 more orders to get $10 bonus".
*   **Wallet**: Withdraw earnings to Bank Account.

---

## 4. 👮 Admin Dashboard (Start View)
*The God Mode for Operations Teams.*

### A. Live Operations
*   **Bird's Eye View**: Map showing all Active Orders and Active Drivers in a city.
*   **Intervention**: Ability to manually re-assign a driver or cancel an order.

### B. User Management
*   **Onboarding Queue**: Review submitted documents (License, Registration) for new Restaurants/Drivers.
*   **Ban Hammer**: Suspend users for violating TOS.

### C. Content Management (CMS)
*   **Cuisines**: Add/Edit global cuisines.
*   **City/Zone Config**: Draw Geofences for delivery zones on a map.
*   **Banners**: Upload marketing content for the Customer App home screen.

### D. Finance & Support
*   **Refund Manager**: Approve/Reject refund requests.
*   **Commissions**: Set global or restaurant-specific commission rates.
*   **Dispute Chat**: See chat logs between Customer/Driver/Support.

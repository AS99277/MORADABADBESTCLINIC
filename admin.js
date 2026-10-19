This file should act as an Express router or separate serverless function handling secure administrative routes and the Admin Panel UI.

Admin Features:
- Secure Login Interface (validate against `ADMIN_EMAIL` and `ADMIN_PASSWORD_HASH` set in Environment Variables).
- JWT-based authentication middleware.
- Dashboard UI (Claymorphism style, distinct professional admin theme).
- Table view of all appointments sorted by date.
- For "Online Payment" appointments: Admin can see the submitted UTR number and verify the payment manually, changing status from "Pending Verification" to "Confirmed".
- Ability to update statuses (e.g., mark as Completed, Rejected, Confirmed).

==================================================
8. SECURITY & ENVIRONMENT VARIABLES
==================================================
The code must read the following from process.env:
- MONGODB_URI (Will be pasted into Vercel by the user)
- JWT_SECRET
- ADMIN_EMAIL
- ADMIN_PASSWORD_HASH

Do not hardcode secrets. Ensure the MongoDB connection handles serverless cold starts properly. Provide clear error handling and avoid exposing stack traces to the frontend.

Generate the exact, complete, and fully functional source code for these 4 files now.

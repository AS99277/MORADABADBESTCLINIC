This file must contain the Express server, MongoDB connection logic, the Mongoose Schema, and the complete Client-Facing UI.

Features to implement in the UI:
A. Hero Section: Catchy tagline, clinic name, animated 3D elements, and a prominent "Book Appointment" button.
B. About Us / Doctors Section: Display the details of Dr. ShivAditya Sharma and Dr. Parul Sharma prominently using 3D Claymorphism cards. Incorporate placeholder clinical/doctor avatars.
C. Appointment Booking Flow (Crucial & Animated):
   - Form fields: Patient Name, Phone, Age, Date, Time Slot, Reason.
   - Payment Selection Step: User MUST choose between:
     * Option A: Online Payment 
     * Option B: Cash Payment (Pay at Clinic)
   - If Option A (Online) is selected: 
     1. Display the UPI ID: 6397319508@fam.
     2. Generate and display a dynamic UPI QR Code using the backend `qrcode` library.
     3. Show an input field for the user to submit the 12-digit UTR/Transaction Reference number.
   - Save the appointment in MongoDB with status "Pending Verification" (for Option A) or "Confirmed - Cash" (for Option B).
   - Show a beautiful success animation modal upon successful booking.
D. Footer: Address, contact details, and timings with click-to-call and click-to-WhatsApp links.

Database Schema (Mongoose):
Create an `Appointment` schema containing: patientName, phone, age, date, time, reason, paymentMethod (Online/Cash), utrNumber (if online), and status (Pending/Confirmed/Rejected/Completed).

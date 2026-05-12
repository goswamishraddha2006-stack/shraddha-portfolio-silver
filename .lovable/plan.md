## Goal
Switch the existing contact form (currently scaffolded for Web3Forms) to **EmailJS** so submissions are sent directly through your own Gmail account.

## Why EmailJS
- **200 free emails/month**
- Sends from your real Gmail (via OAuth) — recipients see your address
- Full HTML template control on EmailJS dashboard
- All keys are public/client-safe (designed for browser use)

## Changes required

### Code (I'll do this)
1. **Install** the EmailJS browser SDK: `@emailjs/browser`
2. **Update** `src/components/ContactForm.tsx`:
   - Remove the Web3Forms `fetch` call
   - Replace with `emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY })`
   - Keep the same Zod validation, honeypot, toast feedback, and cyberpunk styling
   - Keep the same form fields: name, email, subject, message
3. Add 3 placeholder constants at the top of the file: `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY` — you'll paste yours in
4. Show a friendly "not configured yet" toast until the keys are added

### Setup (you'll do this once — takes ~3 minutes)
1. Go to **https://www.emailjs.com** → sign up (free)
2. **Add Email Service** → choose **Gmail** → connect your Gmail via OAuth → copy the **Service ID**
3. **Create Email Template**:
   - To: your Gmail
   - From name: `{{name}}`
   - Reply-to: `{{email}}`
   - Subject: `[Portfolio] {{subject}}`
   - Body: include `{{name}}`, `{{email}}`, `{{message}}`
   - Copy the **Template ID**
4. **Account → General** → copy the **Public Key**
5. Paste all three values to me — I'll plug them into the component

## What stays the same
- The dialog UI, validation, honeypot, cyberpunk styling, success/error toasts — no visual change
- The "Email Me" button in the contact section

## Notes
- EmailJS public keys are safe in client code (the dashboard restricts allowed domains)
- Optionally we can lock the key to your published Lovable domain in the EmailJS dashboard for extra spam protection

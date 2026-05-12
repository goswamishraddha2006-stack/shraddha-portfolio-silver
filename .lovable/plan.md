## Goal
Switch the contact form back from EmailJS to **Web3Forms**.

## Why Web3Forms
- **250 free submissions/month**, no signup beyond email verification
- Single access key, no template setup
- Submissions delivered straight to your Gmail inbox
- Sender's email arrives as Reply-To, so you can reply directly

## Changes

### Code (I'll do)
1. **Uninstall** `@emailjs/browser` (no longer needed)
2. **Update** `src/components/ContactForm.tsx`:
   - Remove `emailjs` import and the three `EMAILJS_*` constants
   - Add a single `WEB3FORMS_ACCESS_KEY` constant (placeholder `"YOUR_ACCESS_KEY"`)
   - Replace `emailjs.send(...)` with a `fetch("https://api.web3forms.com/submit", ...)` POST using `FormData` with: `access_key`, `name`, `email`, `subject`, `message`, `replyto` (= sender email), and the honeypot `botcheck`
   - Keep Zod validation, honeypot, dialog UI, cyberpunk styling, and toast feedback unchanged
   - Show "not configured yet" toast until the key is added

### Setup (you do once — ~1 minute)
1. Visit **https://web3forms.com**
2. Enter your Gmail → click **Create Access Key** → check inbox to verify
3. Copy the access key
4. Paste it into `src/components/ContactForm.tsx` (the `WEB3FORMS_ACCESS_KEY` constant)

## What stays the same
Form fields, validation, honeypot, dialog UI, cyberpunk styling, success/error toasts, "Email Me" button.

## Notes
- The Web3Forms access key is safe in client code (it can only submit to your verified email)
- After the first real submission you'll get a confirmation email from Web3Forms

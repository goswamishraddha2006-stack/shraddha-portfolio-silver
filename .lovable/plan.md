## Goal
Wire the "Email Me" button in the Contact section to a contact form that delivers submissions straight to your Gmail inbox — for free, with no backend setup.

## Chosen tool: Web3Forms
- **Free tier:** 250 submissions/month, unlimited forms
- **No account dashboard required** — just verify your Gmail once and you get an access key
- **No branding** in emails, no backend code needed
- Spam protection via honeypot + optional hCaptcha

## What I'll build

1. **Replace the simple "Email Me" button** with a clean modal/dialog (matching the cyberpunk theme) that opens a contact form with:
   - Name
   - Email
   - Subject
   - Message
   - Submit button (with loading state)

2. **Form submission** posts directly to `https://api.web3forms.com/submit` with your access key. Web3Forms forwards the email to your Gmail.

3. **Validation** with Zod (name, valid email, message length limits) + toast notifications for success/error states.

4. **Honeypot field** to block spam bots automatically.

5. **Styling** matches the existing cyberpunk aesthetic (neon purple/blue accents, glass-morphism, glowing focus states).

## What you need to provide
After I build it, you'll need to:
1. Go to **https://web3forms.com**
2. Enter your Gmail address → click "Create Access Key"
3. Check your Gmail and verify the email
4. Copy the access key and paste it to me — I'll add it to the form

That's it. No signup, no password, no dashboard.

## Technical details
- New component: `src/components/ContactForm.tsx` (Dialog + form)
- Edit `src/routes/index.tsx` to swap the button for a `<Dialog>` trigger
- Uses existing shadcn `Dialog`, `Input`, `Textarea`, `Button`, `Label`, and `sonner` toast
- Zod + react-hook-form (already installed) for validation
- Access key stored as a constant in the component (Web3Forms keys are designed to be public — they're scoped to your email only and rate-limited server-side)

## Alternative (if you prefer)
If 250/mo isn't enough later, we can swap to **Lovable Cloud + Gmail connector** with no UI changes — same form, different submit handler.



# EmailJS Contact Form Integration

## Summary
Integrate EmailJS into the contact form using the provided credentials so form submissions are sent directly to your Gmail.

## What I'll Do

1. **Install `@emailjs/browser`** package
2. **Update `ContactSection.tsx`**:
   - Replace the `mailto:` redirect with `emailjs.sendForm()` / `emailjs.send()`
   - Use your credentials: Service ID `service_lh3xzgn`, Template ID `template_8iccp4m`, Public Key `FmJzYsbGAJ1jWvEIq`
   - Add loading state on the submit button
   - Show success/error toast notifications
   - Reset form after successful send

## Technical Details
- EmailJS public keys are safe to store in frontend code
- Free tier: 200 emails/month
- No backend needed


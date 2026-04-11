

# Integrate EmailJS into Contact Form

## What changes

Update `ContactSection.tsx` to send emails via EmailJS instead of the current `mailto:` redirect.

## Steps

1. **Install `@emailjs/browser`** package
2. **Update `ContactSection.tsx`**:
   - Import `emailjs` and `toast` from sonner
   - Replace `mailto:` handler with `emailjs.send()` using:
     - Service ID: `service_lh3xzgn`
     - Template ID: `template_8iccp4m`
     - Public Key: `FmJzYsbGAJ1jWvEIq`
   - Add loading state to disable button while sending
   - Show success/error toasts
   - Reset form after successful send

## Your action needed

Make sure your EmailJS template at [emailjs.com](https://dashboard.emailjs.com/admin/templates) uses these variable names: `{{from_name}}`, `{{from_email}}`, `{{message}}`.


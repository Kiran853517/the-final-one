// =============================================================================
// emailConfig.js — EmailJS credentials for the consultation request form
// -----------------------------------------------------------------------------
// The Contact form sends consultation requests straight from the browser
// using EmailJS (no backend server needed). To make it live:
//
//   1. Go to https://www.emailjs.com and create a free account.
//   2. Add an Email Service (e.g. connect your Gmail) → copy the SERVICE ID.
//   3. Create an Email Template → copy the TEMPLATE ID.
//      In the template body, use these variable names so the form data
//      lands in the right place (EmailJS lets you insert them as {{name}}):
//        {{full_name}}      {{phone}}          {{email}}
//        {{dob}}            {{time_of_birth}}  {{place_of_birth}}
//        {{service}}        {{message}}
//      Set the template's "To Email" field to the address you want the
//      consultation requests delivered to (e.g. info@sriddhivinayaka.com).
//   4. Go to Account → General → copy your PUBLIC KEY.
//   5. Paste all three values below.
//
// Until real values are filled in, the form will show a friendly error
// instead of silently failing.
// =============================================================================

export const emailConfig = {
  serviceId: 'service_429z9uq',
  templateId: 'template_q2mxhal',
  publicKey: 'vTQbndkD6K5tofWzE',
}

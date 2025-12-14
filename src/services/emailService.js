import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_la71jkw";
const TEMPLATE_ID = "template_jr53k4o";
const PUBLIC_KEY = "ZqCx8Okn_iGW0YkYG";

export const sendEmail = (formRef) => {
  return emailjs.sendForm(
    SERVICE_ID,
    TEMPLATE_ID,
    formRef.current,
    PUBLIC_KEY
  );
};
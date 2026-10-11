export const site = {
  name: "Unique Visa Business Solutions",
  shortName: "Unique Visa",
  domain: "uniquevisabusinesssolutions.com",
  email: "contact@uniquevisabusinesssolutions.com",
  phone: "9810101010",
  phoneDisplay: "98101 01010",
  hours: "Available 24/7",
  address: ["Unique Visa Business Solutions", "New Delhi, India"],
  whatsapp: "919810101010",
};
export const emailHref = () => `mailto:${site.email}?subject=${encodeURIComponent("Visa Services Inquiry")}&body=${encodeURIComponent(`Hello ${site.name},\n\nI would like help with my visa / passport.\n\nName:\nService needed:\nTravel date:\n\nThank you!`)}`;
export const telHref = () => `tel:${site.phone}`;
export const waHref = () => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Unique Visa, I need help with my visa.")}`;

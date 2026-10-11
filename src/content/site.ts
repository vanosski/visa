export const site = {
  name: "VisaEase Solutions",
  email: "namitathappar76@gmail.com",
  phone: "9810101010",
  phoneDisplay: "98101 01010",
  hours: "Mon–Fri, 9 AM – 6 PM",
  address: ["VisaEase Solutions","123 Travel Lane, Suite 456","New York, NY 10001"],
  whatsapp: "919810101010",
};
export const emailHref = () => `mailto:${site.email}?subject=${encodeURIComponent("Visa Services Inquiry")}&body=${encodeURIComponent("Hello VisaEase Solutions,\n\nI would like help with my visa / passport.\n\nName:\nService needed:\nTravel date:\n\nThank you!")}`;
export const telHref = () => `tel:${site.phone}`;
export const waHref = () => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello VisaEase, I need help with my visa.")}`;

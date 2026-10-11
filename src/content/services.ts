import { Stamp, CalendarCheck, Landmark, BookCheck } from "lucide-react";
export const services = [
  { slug:"us-visa", title:"US Visa Booking", desc:"Forms, fees, interview prep — done right the first time.", icon: Stamp, points:["DS-160 help","Fee + appointment","Mock interview","Document checklist"] },
  { slug:"slot-booking", title:"Slot Booking", desc:"Preferred consulate dates with minimal wait.", icon: CalendarCheck, points:["Slot tracking","Rescheduling","Family / group slots","Alerts"] },
  { slug:"consulate-services", title:"Consulate Services", desc:"Verification, submission and follow-ups handled.", icon: Landmark, points:["Document verification","Submission help","Follow-ups","Translations guidance"] },
  { slug:"passport-renewal", title:"Passport Renewal", desc:"Quick renewal so you stay travel-ready.", icon: BookCheck, points:["Form + appointment","Tatkaal guidance","Tracking","Delivery support"] },
];

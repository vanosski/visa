import { Mail, MapPin, Clock } from "lucide-react";
import { site, emailHref } from "../content/site";
export default function Contact(){
  return (<div className="section max-w-2xl">
    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">Contact us</h1>
    <p className="text-center text-slate-500 mt-2">Email us anytime — we're available 24/7 and reply within one business day.</p>
    <div className="mt-8">
      <a href={emailHref()} className="frost-card p-8 text-center hover:shadow-lg transition block"><Mail className="mx-auto text-sky-600" size={32}/><p className="mt-3 font-bold text-slate-900 text-lg">Email</p><p className="text-sm text-slate-500 break-all mt-1">{site.email}</p><span className="btn-primary !py-3 mt-4 w-full sm:w-auto">Email us</span></a>
    </div>
    <div className="frost-card p-6 mt-4 flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
      <p className="flex gap-2"><MapPin size={16} className="text-sky-600 shrink-0 mt-0.5"/>{site.address.join(", ")}</p>
      <p className="flex gap-2"><Clock size={16} className="text-sky-600 shrink-0 mt-0.5"/>{site.hours}</p>
    </div>
  </div>);
}

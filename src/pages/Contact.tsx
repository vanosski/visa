import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { site, emailHref, telHref, waHref } from "../content/site";
export default function Contact(){
  return (<div className="section max-w-4xl">
    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">Contact us</h1>
    <p className="text-center text-slate-500 mt-2">Fastest reply: call or WhatsApp during {site.hours}.</p>
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      <a href={telHref()} className="frost-card p-6 text-center hover:shadow-lg transition"><Phone className="mx-auto text-sky-600"/><p className="mt-2 font-bold text-slate-900">Call us</p><p className="text-sm text-slate-500">{site.phoneDisplay}<br/>{site.hours}</p><span className="btn-primary !py-2 !text-sm mt-3 w-full">Call now</span></a>
      <a href={emailHref()} className="frost-card p-6 text-center hover:shadow-lg transition"><Mail className="mx-auto text-sky-600"/><p className="mt-2 font-bold text-slate-900">Email</p><p className="text-sm text-slate-500 break-all">{site.email}</p><span className="btn-secondary !py-2 !text-sm mt-3 w-full">Email us</span></a>
      <a href={waHref()} className="frost-card p-6 text-center hover:shadow-lg transition"><MessageCircle className="mx-auto text-teal-600"/><p className="mt-2 font-bold text-slate-900">WhatsApp</p><p className="text-sm text-slate-500">Chat with our team</p><span className="btn-secondary !py-2 !text-sm mt-3 w-full">Chat</span></a>
    </div>
    <div className="frost-card p-6 mt-4 flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
      <p className="flex gap-2"><MapPin size={16} className="text-sky-600 shrink-0 mt-0.5"/>{site.address.join(", ")}</p>
      <p className="flex gap-2"><Clock size={16} className="text-sky-600 shrink-0 mt-0.5"/>{site.hours}</p>
    </div>
  </div>);
}

import { Mail, MapPin, Clock } from "lucide-react";
import { site, emailHref } from "../content/site";
export default function Contact(){
  return (<>
    <div className="bg-[#054A51]">
      <div className="section !py-12 sm:!py-16 text-center">
        <p className="inline-block text-xs font-bold uppercase tracking-widest text-[#054A51] bg-[#F9D779] rounded-full px-4 py-1.5">Contact</p>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Let's get you<br/>flying.</h1>
        <p className="mt-3 text-[#BFE6EA] max-w-xl mx-auto">Email us anytime — we're available 24/7 and reply within one business day.</p>
      </div>
    </div>
    <div className="section max-w-2xl !pt-10">
      <a href={emailHref()} className="frost-card p-8 text-center hover:shadow-xl hover:-translate-y-0.5 transition block border-t-4 !border-t-[#FCA47C]">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-[#097C87] text-white"><Mail size={30}/></span>
        <p className="mt-4 font-bold text-slate-900 text-xl">Email us</p>
        <p className="text-slate-600 break-all mt-1 font-medium">{site.email}</p>
        <span className="btn-primary !py-3 mt-5 w-full sm:w-auto">Write to us</span>
      </a>
      <div className="grid gap-3 sm:grid-cols-2 mt-4">
        <div className="frost-card p-5 flex gap-3"><MapPin size={20} className="text-[#FCA47C] shrink-0 mt-0.5"/><p className="text-sm text-slate-600">{site.address.join(", ")}</p></div>
        <div className="frost-card p-5 flex gap-3"><Clock size={20} className="text-[#097C87] shrink-0 mt-0.5"/><p className="text-sm text-slate-600">{site.hours} — replies within one business day.</p></div>
      </div>
    </div>
  </>);
}

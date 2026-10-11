import { ShieldCheck, Clock, HeartHandshake, Mail } from "lucide-react";
import { emailHref, site } from "../content/site";

const values = [
  { icon: ShieldCheck, color: "bg-[#097C87]", title: "Honest timelines", desc: "No false promises on slots or approvals — just straight answers." },
  { icon: Clock, color: "bg-[#FCA47C]", title: "Available 24/7", desc: "Visa panic at midnight? Email us. We reply within one business day." },
  { icon: HeartHandshake, color: "bg-[#5DAE64]", title: "Human support", desc: "A real person reads every email and walks with you till you fly." },
];

const leaders = [
  { name: "Manish Kapoor", role: "Head — strategy, growth & client success.", init: "M", bg: "bg-[#097C87]" },
  { name: "Namita Thappar", role: "PR Head — brand & stakeholder engagement.", init: "N", bg: "bg-[#FCA47C]" },
];

export default function About(){
  return (<>
    <div className="bg-[#054A51]">
      <div className="section !py-12 sm:!py-16 text-center">
        <p className="inline-block text-xs font-bold uppercase tracking-widest text-[#054A51] bg-[#F9D779] rounded-full px-4 py-1.5">About us</p>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Visas, minus<br/>the headache.</h1>
        <p className="mt-3 text-[#BFE6EA] max-w-xl mx-auto">{site.name} makes visas and passports simple — clear checklists, honest timelines, and a human on email when you need one.</p>
      </div>
    </div>
    <div className="section">
      <div className="grid gap-4 sm:grid-cols-3">
        {values.map(v=>(<div key={v.title} className="frost-card p-6 text-center">
          <span className={`mx-auto grid h-12 w-12 place-items-center rounded-2xl text-white ${v.color}`}><v.icon size={24}/></span>
          <p className="mt-3 font-bold text-slate-900">{v.title}</p>
          <p className="text-sm text-slate-500 mt-1">{v.desc}</p>
        </div>))}
      </div>
      <h2 className="mt-12 font-extrabold text-slate-900 text-2xl text-center">Leadership</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
        {leaders.map(l=>(<div key={l.name} className="frost-card p-5 flex items-center gap-4">
          <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white text-2xl font-black ${l.bg}`}>{l.init}</span>
          <div><p className="font-bold text-slate-900">{l.name}</p><p className="text-sm text-slate-500">{l.role}</p></div>
        </div>))}
      </div>
      <div className="mt-8 text-center">
        <a href={emailHref()} className="btn-primary"><Mail size={17}/> Say hello</a>
      </div>
    </div>
  </>);
}

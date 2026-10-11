import { Link } from "react-router-dom";
import { Check, Mail } from "lucide-react";
import { services } from "../content/services";
import { emailHref } from "../content/site";
import { useReveal } from "../hooks/useReveal";
export default function Services(){
  useReveal();
  return (<>
    <div className="bg-[#054A51]">
      <div className="section !py-12 sm:!py-16 text-center">
        <p className="inline-block text-xs font-bold uppercase tracking-widest text-[#054A51] bg-[#F9D779] rounded-full px-4 py-1.5">Our services</p>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Everything handled,<br/>end to end.</h1>
        <p className="mt-3 text-[#BFE6EA] max-w-xl mx-auto">Pick what you need — every service starts with a free email consultation, available 24/7.</p>
      </div>
    </div>
    <div className="section">
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((s,i)=>(<article key={s.slug} id={s.slug} className="frost-card p-6 reveal scroll-mt-24 hover:shadow-xl hover:-translate-y-0.5 transition">
          <div className="flex items-center gap-3">
            <span className={`p-2.5 rounded-xl text-white ${i%2===0?"bg-[#097C87]":"bg-[#FCA47C]"}`}><s.icon size={22}/></span>
            <h2 className="font-bold text-lg text-slate-900">{s.title}</h2>
          </div>
          <p className="mt-2 text-slate-500 text-sm">{s.desc}</p>
          <ul className="mt-3 space-y-1.5">{s.points.map(p=><li key={p} className="flex items-center gap-2 text-sm text-slate-700"><Check size={16} className="text-[#5DAE64] shrink-0"/>{p}</li>)}</ul>
          <div className="mt-4 flex gap-2">
            <a href={emailHref()} className="btn-primary !py-2.5 !text-sm"><Mail size={15}/> Email to book</a>
            <Link to="/contact" className="btn-secondary !py-2.5 !text-sm">Ask a question</Link>
          </div>
        </article>))}
      </div>
      <div className="mt-8 rounded-3xl bg-[#E2F1E5] border border-[#A1CCA6]/60 p-6 text-center reveal">
        <p className="font-bold text-slate-900 text-lg">Not sure which one you need?</p>
        <p className="text-sm text-slate-600 mt-1">Email your destination + travel date — we'll point you right.</p>
        <a href={emailHref()} className="btn-primary mt-4"><Mail size={17}/> Ask us anything</a>
      </div>
    </div>
  </>);
}

import { Link } from "react-router-dom";
import { Check, Phone } from "lucide-react";
import { services } from "../content/services";
import { telHref } from "../content/site";
import { useReveal } from "../hooks/useReveal";
export default function Services(){
  useReveal();
  return (<div className="section">
    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Our services</h1>
    <p className="mt-2 text-slate-500">Pick what you need — every service starts with a free quick call.</p>
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {services.map(s=>(<article key={s.slug} id={s.slug} className="frost-card p-6 reveal scroll-mt-24">
        <div className="flex items-center gap-3"><span className="p-2.5 rounded-xl bg-sky-50 text-sky-700"><s.icon size={22}/></span><h2 className="font-bold text-lg text-slate-900">{s.title}</h2></div>
        <p className="mt-2 text-slate-500 text-sm">{s.desc}</p>
        <ul className="mt-3 space-y-1.5">{s.points.map(p=><li key={p} className="flex items-center gap-2 text-sm text-slate-700"><Check size={16} className="text-teal-600"/>{p}</li>)}</ul>
        <div className="mt-4 flex gap-2"><a href={telHref()} className="btn-primary !py-2.5 !text-sm"><Phone size={15}/> Book</a><Link to="/contact" className="btn-secondary !py-2.5 !text-sm">Ask a question</Link></div>
      </article>))}
    </div>
  </div>);
}

import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { services } from "../content/services";
import { reviews } from "../content/reviews";
import { site, telHref, waHref } from "../content/site";
import { useReveal } from "../hooks/useReveal";
export default function Home(){
  useReveal();
  return (<>
    <section className="section text-center reveal visible">
      <p className="inline-block text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 border border-sky-100 rounded-full px-4 py-1.5">Visa & passport help</p>
      <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Seamless visas,<br/>zero stress.</h1>
      <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">Forms, slots, interview prep and renewals — one friendly team walks you through it.</p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <a href={telHref()} className="btn-primary"><Phone size={18}/> Call {site.phoneDisplay}</a>
        <Link to="/services" className="btn-secondary">Explore services <ArrowRight size={18}/></Link>
      </div>
      <p className="mt-3 text-sm text-slate-400">{site.hours} · <a className="underline" href={waHref()}>WhatsApp us anytime</a></p>
    </section>
    <section className="section !pt-0">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(s=>(<Link key={s.slug} to={`/services#${s.slug}`} className="frost-card p-6 reveal hover:shadow-lg hover:-translate-y-0.5 transition">
          <s.icon className="text-sky-600" size={28}/>
          <h3 className="mt-3 font-bold text-slate-900">{s.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{s.desc}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sky-700">Learn more <ArrowRight size={15}/></span>
        </Link>))}
      </div>
    </section>
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="section grid gap-6 md:grid-cols-3 text-center">
        {[["1. Tell us your plan","Call or WhatsApp — we list exact documents."],["2. We file & book","Forms, fees and best-available slot handled."],["3. You fly","Interview tips + tracking till delivery."]].map(([t,d])=>(
          <div key={t} className="frost-card p-6 reveal"><CheckCircle2 className="mx-auto text-teal-600" size={26}/><p className="mt-2 font-bold text-slate-900">{t}</p><p className="text-sm text-slate-500 mt-1">{d}</p></div>))}
      </div>
    </section>
    <section className="section">
      <h2 className="text-2xl font-extrabold text-slate-900 text-center">Loved by travellers</h2>
      <div className="mt-6 flex gap-4 overflow-x-auto snap-x pb-2">
        {reviews.map(r=>(<figure key={r.name} className="frost-card p-5 min-w-[260px] snap-start reveal">
          <div className="flex gap-0.5 text-amber-400">{[0,1,2,3,4].map(i=><Star key={i} size={14} fill="currentColor"/>)}</div>
          <blockquote className="mt-2 text-sm text-slate-600">“{r.text}”</blockquote>
          <figcaption className="mt-2 text-sm font-bold text-slate-900">— {r.name}</figcaption>
        </figure>))}
      </div>
    </section>
  </>);
}

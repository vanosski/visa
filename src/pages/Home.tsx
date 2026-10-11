import { Link } from "react-router-dom";
import { Mail, ArrowRight, CheckCircle2, Plane, Globe2, Stamp, BadgeCheck, FileCheck } from "lucide-react";
import { services } from "../content/services";
import { emailHref } from "../content/site";
import { useReveal } from "../hooks/useReveal";
import { TestimonialsSection } from "@/components/ui/testimonial-v2";

const countries = [
  { code: "us", name: "USA" },
  { code: "gb", name: "UK" },
  { code: "ca", name: "Canada" },
  { code: "eu", name: "Schengen" },
  { code: "ae", name: "UAE" },
  { code: "au", name: "Australia" },
];

export default function Home(){
  useReveal();
  return (<>
    {/* HERO — visa approval visual, no globe */}
    <section className="relative overflow-hidden bg-[#054A51]">
      <img
        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=70&auto=format&fit=crop"
        alt="Airplane wing above clouds"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="eager" fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#054A51]/60 via-[#054A51]/70 to-[#FBF3E4]" />
      <div className="section relative !pb-20 !pt-10 sm:!pt-14">
        <div className="grid items-center gap-8 md:grid-cols-2 md:text-left text-center">
        {/* Visa-approval card visual */}
        <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] order-first md:order-last">
          <div className="relative rounded-3xl border border-white/30 bg-white p-6 text-left shadow-2xl shadow-sky-950/40">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#054A51] to-[#23CED9] text-white">
                <Stamp size={24} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Visa status</p>
                <p className="text-xl font-extrabold text-slate-900">Approved ✓</p>
              </div>
              <BadgeCheck size={28} className="ml-auto text-emerald-500" />
            </div>
            <div className="mt-4 space-y-2 border-t border-dashed border-slate-200 pt-4 text-sm">
              <p className="flex items-center gap-2 text-slate-600"><FileCheck size={16} className="text-sky-600"/> Documents verified</p>
              <p className="flex items-center gap-2 text-slate-600"><Plane size={16} className="text-sky-600"/> Slot booked · USA Consulate</p>
              <p className="flex items-center gap-2 text-slate-600"><CheckCircle2 size={16} className="text-emerald-500"/> Ready to fly</p>
            </div>
            {/* stamp */}
            <div className="pointer-events-none absolute -right-3 -top-3 rotate-12 rounded-lg border-[3px] border-emerald-500/80 px-3 py-1 text-sm font-black uppercase tracking-widest text-emerald-600 bg-white/70">
              Granted
            </div>
          </div>
        </div>
        {/* Short, light headline block */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">Seamless visas,<br/>zero stress.</h1>
          <p className="mt-3 flex items-center justify-center md:justify-start gap-1.5 text-sm font-semibold text-sky-200"><Globe2 size={16}/> 40+ countries · Available 24/7</p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center md:justify-start max-w-md mx-auto md:mx-0">
            <a href={emailHref()} className="btn-primary !text-lg !px-8 !py-4 shadow-xl shadow-sky-950/40"><Mail size={19}/> Email us</a>
          </div>
        </div>
        </div>
      </div>
      <svg className="absolute bottom-[-1px] left-0 w-full text-[#FBF3E4]" viewBox="0 0 1440 70" preserveAspectRatio="none" height="48"><path fill="currentColor" d="M0,40 C360,90 1080,-10 1440,40 L1440,70 L0,70 Z"/></svg>
    </section>

    {/* Country showcase */}
    <section className="section !py-10 text-center">
      <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Where are you headed?</p>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {countries.map(c=>(
          <Link key={c.code} to="/services" className="frost-card group flex flex-col items-center gap-2 px-4 py-5 hover:-translate-y-1 hover:shadow-xl hover:border-sky-300 transition">
            <img src={`https://flagcdn.com/w160/${c.code}.png`} width={64} height={48} alt={`${c.name} flag`} loading="lazy" className="h-12 w-16 rounded-md shadow-md object-cover group-hover:scale-105 transition" />
            <span className="font-bold text-slate-800">{c.name}</span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700">Apply <ArrowRight size={12}/></span>
          </Link>
        ))}
      </div>
    </section>

    {/* Services */}
    <section className="section !pt-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center">What we do for you</h2>
      <p className="text-center text-slate-500 mt-2">Simple words, no confusing forms.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(s=>(<Link key={s.slug} to={`/services#${s.slug}`} className="frost-card p-6 reveal hover:shadow-lg hover:-translate-y-0.5 transition">
          <s.icon className="text-sky-600" size={28}/>
          <h3 className="mt-3 font-bold text-slate-900">{s.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{s.desc}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sky-700">Learn more <ArrowRight size={15}/></span>
        </Link>))}
      </div>
    </section>

    {/* Photo strip */}
    <section className="section !py-6">
      <div className="grid grid-cols-3 gap-3">
        {[
          ["photo-1488646953014-85cb44e25828","Traveller with map"],
          ["photo-1530521954074-e64f6810b32d","Passport and tickets"],
          ["photo-1526772662000-3f88f10405ff","Mountain travel"],
        ].map(([id,alt])=>(
          <img key={id} src={`https://images.unsplash.com/${id}?w=600&q=60&auto=format&fit=crop`} alt={alt} loading="lazy"
            className="h-32 sm:h-52 w-full object-cover rounded-2xl shadow-md" />
        ))}
      </div>
    </section>

    {/* 3 steps — email only */}
    <section className="bg-[#E2F1E5] border-y border-[#A1CCA6]/50">
      <div className="section">
        <h2 className="text-2xl font-extrabold text-slate-900 text-center flex items-center justify-center gap-2"><Plane size={22} className="text-sky-600"/> 3 easy steps</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3 text-center">
          {[["1. Tell us your plan","Email us your destination — we reply with the exact document list."],["2. We file & book","Forms, fees and best-available appointment handled."],["3. You fly","Interview tips + tracking till delivery."]].map(([t,d])=>(
            <div key={t} className="frost-card p-6 reveal"><CheckCircle2 className="mx-auto text-teal-600" size={26}/><p className="mt-2 font-bold text-slate-900">{t}</p><p className="text-sm text-slate-500 mt-1">{d}</p></div>))}
        </div>
        <div className="mt-6 text-center">
          <a href={emailHref()} className="btn-primary"><Mail size={18}/> Start by email</a>
        </div>
      </div>
    </section>

    {/* Reviews — animated scrolling columns */}
    <TestimonialsSection />
  </>);
}

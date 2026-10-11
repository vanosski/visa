import { Link, NavLink, Outlet } from "react-router-dom";
import { Mail } from "lucide-react";
import { site, emailHref } from "../content/site";
export function Header(){
  const cls = ({isActive}:{isActive:boolean}) => `px-3 py-2 rounded-lg text-sm font-medium ${isActive?"text-sky-700 bg-sky-50":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`;
  return (<header className="sticky top-0 z-50 bg-[#FBF3E4]/85 backdrop-blur-xl border-b border-[#F0DFC0]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
      <Link to="/" className="flex items-center gap-2.5 font-extrabold tracking-tight text-slate-900" aria-label="Unique Visa Business Solutions — home">
        {/* Premium mark: visa-stamp double ring + UV monogram + departing plane trail */}
        <span className="relative grid h-11 w-11 shrink-0 place-items-center">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
            <circle cx="22" cy="22" r="20.5" fill="#054A51" />
            <circle cx="22" cy="22" r="20.5" stroke="#FCA47C" strokeWidth="1.4" />
            <circle cx="22" cy="22" r="16.5" stroke="#FCA47C" strokeWidth="0.8" opacity="0.7" />
            <text x="22" y="27.5" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="700" fontSize="14" fill="#FFFFFF" letterSpacing="0.5">UV</text>
            <path d="M28 12.5c3.5 1 6 3 7.5 6" stroke="#FCA47C" strokeWidth="1.2" strokeDasharray="2 2" strokeLinecap="round" />
            <path d="M35.5 18.5l2.8-1-.4 2.9-2.6.6.2-2.5z" fill="#FCA47C" />
          </svg>
        </span>
        <span className="leading-tight text-[17px]">Unique Visa<span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#097C87]">Business Solutions</span></span>
      </Link>
      <nav className="hidden md:flex items-center gap-1">
        <NavLink to="/" className={cls} end>Home</NavLink>
        <NavLink to="/services" className={cls}>Services</NavLink>
        <NavLink to="/about" className={cls}>About</NavLink>
        <NavLink to="/contact" className={cls}>Contact</NavLink>
      </nav>
      <div className="flex items-center gap-2">
        <a href={emailHref()} className="btn-primary !px-4 !py-2 !min-h-[40px] !text-sm"><Mail size={16}/> Email us</a>
      </div>
    </div>
    <nav className="md:hidden flex gap-1 px-4 pb-3 overflow-x-auto">
      <NavLink to="/" className={cls} end>Home</NavLink>
      <NavLink to="/services" className={cls}>Services</NavLink>
      <NavLink to="/about" className={cls}>About</NavLink>
      <NavLink to="/contact" className={cls}>Contact</NavLink>
      <NavLink to="/terms" className={cls}>Terms</NavLink>
    </nav>
  </header>);
}
export function Footer(){
  return (<footer className="border-t border-[#04363D] bg-[#054A51]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-3 text-sm">
      <div><p className="font-bold text-white mb-2">{site.name}</p><p className="text-[#BFE6EA]">Hassle-free visa & passport help. {site.hours}.</p></div>
      <div><p className="font-bold text-white mb-2">Services</p><div className="flex flex-col gap-1"><Link className="text-[#BFE6EA] hover:text-[#F9D779]" to="/services">All services</Link><Link className="text-[#BFE6EA] hover:text-[#F9D779]" to="/about">About</Link><Link className="text-[#BFE6EA] hover:text-[#F9D779]" to="/terms">Terms</Link></div></div>
      <div><p className="font-bold text-white mb-2">Contact</p><a className="flex items-center gap-2 text-[#BFE6EA] hover:text-[#F9D779] break-all" href={emailHref()}><Mail size={15}/>{site.email}</a></div>
    </div>
  </footer>);
}
export function MobileCTA(){
  return (<div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-t border-slate-200 p-3 grid grid-cols-2 gap-2">
    <a href={emailHref()} className="btn-primary !px-2"><Mail size={16}/>Email us</a>
    <Link to="/contact" className="btn-secondary !px-2">Enquire</Link>
  </div>);
}
export default function Layout(){ return (<div className="min-h-screen flex flex-col bg-[#FBF3E4]"><Header/><main className="flex-1"><Outlet/></main><Footer/></div>); }

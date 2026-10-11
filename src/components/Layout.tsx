import { Link, NavLink, Outlet } from "react-router-dom";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { site, telHref, emailHref, waHref } from "../content/site";
export function Header(){
  const cls = ({isActive}:{isActive:boolean}) => `px-3 py-2 rounded-lg text-sm font-medium ${isActive?"text-sky-700 bg-sky-50":"text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`;
  return (<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/80">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
      <Link to="/" className="font-extrabold tracking-tight text-slate-900 text-lg">❄️ {site.name}</Link>
      <nav className="hidden md:flex items-center gap-1">
        <NavLink to="/" className={cls} end>Home</NavLink>
        <NavLink to="/services" className={cls}>Services</NavLink>
        <NavLink to="/about" className={cls}>About</NavLink>
        <NavLink to="/contact" className={cls}>Contact</NavLink>
      </nav>
      <div className="flex items-center gap-2">
        <a href={telHref()} className="btn-primary !px-4 !py-2 !min-h-[40px] !text-sm"><Phone size={16}/> {site.phoneDisplay}</a>
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
  return (<footer className="border-t border-slate-200 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-3 text-sm">
      <div><p className="font-bold text-slate-900 mb-2">{site.name}</p><p className="text-slate-500">Hassle-free visa & passport help. {site.hours}.</p></div>
      <div><p className="font-bold text-slate-900 mb-2">Services</p><div className="flex flex-col gap-1"><Link className="text-slate-600 hover:text-sky-700" to="/services">All services</Link><Link className="text-slate-600 hover:text-sky-700" to="/about">About</Link><Link className="text-slate-600 hover:text-sky-700" to="/terms">Terms</Link></div></div>
      <div><p className="font-bold text-slate-900 mb-2">Contact</p><a className="flex items-center gap-2 text-slate-600" href={emailHref()}><Mail size={15}/>{site.email}</a><a className="flex items-center gap-2 text-slate-600 mt-1" href={telHref()}><Phone size={15}/>{site.phoneDisplay}</a></div>
    </div>
  </footer>);
}
export function MobileCTA(){
  return (<div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-t border-slate-200 p-3 grid grid-cols-3 gap-2">
    <a href={telHref()} className="btn-primary !px-2"><Phone size={16}/>Call</a>
    <a href={waHref()} className="btn-secondary !px-2"><MessageCircle size={16}/>WhatsApp</a>
    <Link to="/contact" className="btn-secondary !px-2">Enquire</Link>
  </div>);
}
export default function Layout(){ return (<div className="min-h-screen flex flex-col bg-white"><Header/><main className="flex-1 pb-20 md:pb-0"><Outlet/></main><Footer/><MobileCTA/></div>); }

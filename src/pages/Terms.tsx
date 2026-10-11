import { FileText, CreditCard, ShieldAlert, CheckCircle2 } from "lucide-react";

const items = [
  { icon: FileText, color: "bg-[#097C87]", title: "What we do", desc: "Unique Visa Business Solutions assists with visa and passport paperwork. Final decisions rest with the issuing authority — we don't guarantee approvals or slot availability." },
  { icon: CreditCard, color: "bg-[#FCA47C]", title: "Fees", desc: "Fees cover our service only and exclude government / consulate charges. Nothing hidden, everything on email before you pay." },
  { icon: ShieldAlert, color: "bg-[#C96A3B]", title: "Your documents", desc: "Please share true, complete documents — errors or omissions may delay your case. Never share OTPs with anyone claiming to be us." },
  { icon: CheckCircle2, color: "bg-[#5DAE64]", title: "Agreement", desc: "Contact us before paying anyone. By using this site you agree to these terms." },
];

export default function Terms(){
  return (<>
    <div className="bg-[#054A51]">
      <div className="section !py-12 sm:!py-14 text-center">
        <p className="inline-block text-xs font-bold uppercase tracking-widest text-[#054A51] bg-[#F9D779] rounded-full px-4 py-1.5">Legal</p>
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Terms of service</h1>
        <p className="mt-3 text-[#BFE6EA] max-w-xl mx-auto">Short, plain words. No fine-print games.</p>
      </div>
    </div>
    <div className="section max-w-3xl !pt-10">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map(t=>(<div key={t.title} className="frost-card p-6">
          <span className={`grid h-11 w-11 place-items-center rounded-xl text-white ${t.color}`}><t.icon size={22}/></span>
          <p className="mt-3 font-bold text-slate-900">{t.title}</p>
          <p className="mt-1 text-sm text-slate-600 leading-relaxed">{t.desc}</p>
        </div>))}
      </div>
    </div>
  </>);
}

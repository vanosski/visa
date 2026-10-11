export default function About(){
  return (<div className="section max-w-3xl">
    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">About us</h1>
    <p className="mt-3 text-slate-600">Unique Visa Business Solutions makes visas and passports simple — clear checklists, honest timelines, and a human on email when you need one.</p>
    <h2 className="mt-8 font-bold text-slate-900 text-xl">Leadership</h2>
    <div className="mt-3 grid gap-4 sm:grid-cols-2">
      <div className="frost-card p-5"><p className="font-bold text-slate-900">Manish Kapoor</p><p className="text-sm text-slate-500">Head — strategy, growth & client success.</p></div>
      <div className="frost-card p-5"><p className="font-bold text-slate-900">Namita Thappar</p><p className="text-sm text-slate-500">PR Head — brand & stakeholder engagement.</p></div>
    </div>
  </div>);
}

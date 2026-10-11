import { useEffect } from "react";
export function useReveal(dep?: unknown){
  useEffect(()=>{
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(es=>es.forEach((e,i)=>{ if(e.isIntersecting) setTimeout(()=>e.target.classList.add("visible"), (i%4)*80); }),{threshold:.1,rootMargin:"0px 0px -60px 0px"});
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  },[dep]);
}

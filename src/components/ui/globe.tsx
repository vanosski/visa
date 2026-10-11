import createGlobe, { type COBEOptions } from "cobe";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.9,
  mapSamples: 24000,
  mapBrightness: 5,
  baseColor: [0.08, 0.19, 0.42],
  markerColor: [2 / 255, 132 / 255, 199 / 255],
  glowColor: [0.35, 0.6, 1],
  markers: [],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const rRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => {
      // cobe v2 sizes from canvas element; keep CSS-driven size
    };
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvas, {
      ...config,
      width: canvas.offsetWidth * 2,
      height: canvas.offsetWidth * 2,
    });

    let raf = 0;
    const tick = () => {
      if (pointerInteracting.current === null) phiRef.current += 0.005;
      globe.update({ phi: phiRef.current + rRef.current });
      raf = requestAnimationFrame(tick);
    };
    tick();

    const t = setTimeout(() => {
      canvas.style.opacity = "1";
    }, 0);

    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      rRef.current = delta / 200;
    }
  };

  return (
    <div className={cn("mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(e.clientX - pointerInteractionMovement.current)
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
}

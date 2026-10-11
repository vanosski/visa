import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// Visa-focused testimonials, avatars = Unsplash stock portraits
const testimonials: Testimonial[] = [
  {
    text: "My US visa was processed quickly and smoothly. The checklist was so clear I never felt lost. Highly recommend!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=70&auto=format&fit=crop",
    name: "Priya Sharma",
    role: "US Tourist Visa",
  },
  {
    text: "Slot booking was effortless and the team kept me updated on email at every step. Zero stress, truly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=70&auto=format&fit=crop",
    name: "Amit Patel",
    role: "Slot Booking",
  },
  {
    text: "Excellent guidance — my passport renewal was a breeze. They caught a form error I'd have missed.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=70&auto=format&fit=crop",
    name: "Neha Gupta",
    role: "Passport Renewal",
  },
  {
    text: "Professional and efficient. Great care with my UK application, interview prep was spot on.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=70&auto=format&fit=crop",
    name: "Rohit Singh",
    role: "UK Visa",
  },
  {
    text: "Smooth Schengen filing for our whole family. One email thread, everything handled. Incredibly helpful team.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=70&auto=format&fit=crop",
    name: "Vikram Joshi",
    role: "Schengen Visa",
  },
  {
    text: "As a first-time traveller I had a hundred questions. They answered all of them patiently over email.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=70&auto=format&fit=crop",
    name: "Aliza Khan",
    role: "First-time Flyer",
  },
  {
    text: "Dubai visa in days, not weeks. Clear pricing, no surprises. Will use them again for my parents' visas.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=70&auto=format&fit=crop",
    name: "Farhan Siddiqui",
    role: "UAE Visa",
  },
  {
    text: "They rebooked my cancelled slot within 48 hours. Lifesavers before my semester started in Toronto.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=70&auto=format&fit=crop",
    name: "Sana Sheikh",
    role: "Canada Student Visa",
  },
  {
    text: "From documents to mock interview, everything was handled. Landed in Sydney with zero hiccups.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=70&auto=format&fit=crop",
    name: "Hassan Ali",
    role: "Australia Visa",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <motion.li
                key={`${index}-${i}`}
                aria-hidden={index === 1 ? "true" : "false"}
                className="p-6 rounded-3xl border border-slate-200 shadow-lg shadow-slate-900/5 max-w-xs w-full bg-white"
              >
                <blockquote className="m-0 p-0">
                  <p className="text-slate-600 leading-relaxed font-normal m-0 text-[15px]">
                    “{text}”
                  </p>
                  <footer className="flex items-center gap-3 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={`Photo of ${name}`}
                      loading="lazy"
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-sky-100"
                    />
                    <div className="flex flex-col">
                      <cite className="font-semibold not-italic tracking-tight leading-5 text-slate-900">
                        {name}
                      </cite>
                      <span className="text-sm leading-5 tracking-tight text-sky-700 mt-0.5">
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
};

export function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-transparent py-16 sm:py-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="px-4 z-10 mx-auto max-w-6xl"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12">
          <div className="border border-sky-200 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-sky-700 bg-sky-50">
            Testimonials
          </div>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight mt-5 text-center text-slate-900">
            Loved by travellers
          </h2>
          <p className="text-center mt-3 text-slate-500 text-lg leading-relaxed max-w-sm">
            Real visas, real passports, real happy inboxes.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={22} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={27} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={25} />
        </div>
      </motion.div>
    </section>
  );
}

export default function TestimonialV2() {
  return <TestimonialsSection />;
}

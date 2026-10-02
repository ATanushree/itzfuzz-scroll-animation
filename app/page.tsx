'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const titleChars = titleRef.current?.querySelectorAll('.title-char');
      const stats = statsRef.current?.querySelectorAll('.stat-card');

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro.fromTo(titleChars, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.035 })
        .fromTo(stats, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.11 }, '-=0.35');

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.15,
          invalidateOnRefresh: true
        }
      });

      scrollTl
        .to(carRef.current, { yPercent: 44, xPercent: -5, rotation: -5, scale: 0.82, ease: 'none' }, 0)
        .to(orbRef.current, { yPercent: -32, scale: 1.18, opacity: 0.72, ease: 'none' }, 0)
        .to(titleRef.current, { yPercent: -80, opacity: 0.16, letterSpacing: '0.30em', ease: 'none' }, 0)
        .to(statsRef.current, { yPercent: -24, opacity: 0.2, ease: 'none' }, 0);

      return () => {};
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const title = 'WELCOME ITZFUZZ';
  const stats = [
    ['96%', 'Scroll-linked motion'],
    ['88%', 'Smooth reveal timing'],
    ['100%', 'Responsive hero layout'],
    ['60%', 'Visual depth & parallax']
  ];

  return (
    <main>
      <section ref={heroRef} className="hero-shell" aria-label="Animated hero section">
        <div className="hero-pin">
          <div className="hero-noise" />
          <div className="hero-grid" />
          <div ref={orbRef} className="orb" />

          <div className="hero-content mx-auto max-w-[1600px] px-6 py-7 md:px-10 md:py-9">
            <header className="flex items-center justify-between">
              <span className="eyebrow">ItzFuzz / Experience 01</span>
              <span className="eyebrow">Digital experience</span>
            </header>

            <div className="absolute left-1/2 top-[15%] w-[96%] -translate-x-1/2 md:top-[12%]">
              <h1 ref={titleRef} className="hero-title overflow-hidden text-center" aria-label={title}>
                {title.split('').map((char, i) => (
                  <span key={`${char}-${i}`} className="title-char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </h1>
            </div>

            <div ref={statsRef} className="absolute bottom-[10%] left-1/2 grid w-[calc(100%-3rem)] max-w-6xl -translate-x-1/2 grid-cols-2 gap-x-8 gap-y-7 md:grid-cols-4 md:gap-x-10">
              {stats.map(([number, label]) => (
                <article className="stat-card" key={number}>
                  <div className="stat-number">{number}</div>
                  <p className="mt-2 max-w-[170px] text-[11px] uppercase leading-[1.45] tracking-[0.12em] text-black/55">{label}</p>
                </article>
              ))}
            </div>

            <div ref={carRef} className="car-wrap" aria-hidden="true">
              <div className="car-shadow" />
              <svg className="car-svg" viewBox="0 0 1100 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="body" x1="150" y1="170" x2="900" y2="470" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f7ffda"/><stop offset=".42" stopColor="#c7f34b"/><stop offset="1" stopColor="#82b51d"/>
                  </linearGradient>
                  <linearGradient id="glass" x1="430" y1="130" x2="690" y2="300" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2b3036"/><stop offset="1" stopColor="#111317"/>
                  </linearGradient>
                  <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#f7f7f4"/><stop offset="1" stopColor="#96999f"/>
                  </linearGradient>
                </defs>
                <path d="M165 355C197 309 247 287 326 275L414 163C431 141 454 128 485 124L655 124C693 124 726 138 751 163L837 253C865 282 905 298 940 310L982 324C1008 333 1025 353 1025 379V416C1025 436 1009 452 989 452H126C105 452 88 435 88 414V393C88 376 100 361 118 356L165 355Z" fill="url(#body)" stroke="#16181c" strokeWidth="8"/>
                <path d="M425 172C440 151 457 142 484 141H648C678 141 702 152 723 174L790 249H365L425 172Z" fill="url(#glass)" stroke="#16181c" strokeWidth="8"/>
                <path d="M489 145V249M651 145L688 249" stroke="#b7bdc5" strokeWidth="5" opacity=".45"/>
                <path d="M179 329C244 305 315 297 376 294H788C830 294 877 304 923 326" stroke="#ffffff" strokeWidth="8" opacity=".55"/>
                <path d="M91 375H206M897 375H1017" stroke="#16181c" strokeWidth="12" strokeLinecap="round"/>
                <path d="M110 345C133 337 157 331 180 328" stroke="#f7f7f4" strokeWidth="12" strokeLinecap="round"/>
                <path d="M917 334C946 339 973 347 994 356" stroke="#ffefe4" strokeWidth="12" strokeLinecap="round"/>
                <path d="M274 270L309 270M797 269L828 276" stroke="#16181c" strokeWidth="10" strokeLinecap="round"/>
                <circle cx="258" cy="427" r="91" fill="#15171b" stroke="#0c0d0f" strokeWidth="8"/>
                <circle cx="258" cy="427" r="54" fill="url(#rim)" stroke="#23262a" strokeWidth="9"/>
                <circle cx="258" cy="427" r="18" fill="#30343a"/>
                <circle cx="839" cy="427" r="91" fill="#15171b" stroke="#0c0d0f" strokeWidth="8"/>
                <circle cx="839" cy="427" r="54" fill="url(#rim)" stroke="#23262a" strokeWidth="9"/>
                <circle cx="839" cy="427" r="18" fill="#30343a"/>
                <path d="M310 363C353 349 392 344 432 344" stroke="#5f7d19" strokeWidth="7" strokeLinecap="round"/>
                <path d="M574 343H690" stroke="#5f7d19" strokeWidth="7" strokeLinecap="round"/>
                <path d="M112 391C145 391 172 389 195 384" stroke="#15171b" strokeWidth="8" strokeLinecap="round"/>
                <path d="M905 389C935 392 961 394 989 392" stroke="#15171b" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </div>

            <div className="scroll-cue"><span className="scroll-line" /> Scroll to explore <span className="scroll-line" /></div>
          </div>
        </div>
      </section>

      <section className="reveal-section">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-white/45">02 / Continue the story</p>
          <h2 className="mt-8 max-w-4xl text-5xl font-bold leading-[.95] tracking-[-.04em] md:text-8xl">Motion that responds to the user, not a timer.</h2>
          <p className="mt-10 max-w-xl text-base leading-7 text-white/55">This second section proves the hero is part of a real scrolling page rather than an isolated animation. The visual movement above is scrubbed to the page scroll position with GSAP ScrollTrigger.</p>
        </div>
      </section>
    </main>
  );
}

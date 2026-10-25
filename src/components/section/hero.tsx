import { m } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { socialItems } from "#/lib/constant";
import { useMouseInside } from "#/lib/hooks/use-mouse-inside";
import { fadeUp, REVEAL_EASE } from "#/lib/motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function HeroSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const mouse = useMouseInside(rootRef);

  const [size, setSize] = useState({ w: 800, h: 600 });
  useEffect(() => {
    if (!rootRef.current) return;
    const ro = new ResizeObserver(() => {
      if (rootRef.current) {
        setSize({
          w: rootRef.current.clientWidth,
          h: rootRef.current.clientHeight,
        });
      }
    });
    ro.observe(rootRef.current);
    return () => ro.disconnect();
  }, []);

  const mx = mouse.inside ? mouse.x / size.w - 0.5 : 0;
  const my = mouse.inside ? mouse.y / size.h - 0.5 : 0;

  return (
    <section
      ref={rootRef}
      className="relative -mt-14 flex min-h-dvh flex-col justify-center px-6"
    >
      <m.div
        {...fadeUp}
        className="mb-9 flex items-center gap-4 font-mono text-xs tracking-[0.08em] text-foreground/70 uppercase"
      >
        <span className="rounded-full border border-chart-1 bg-[color-mix(in_oklab,var(--color-chart-1)_8%,transparent)] px-2.5 py-1 whitespace-nowrap text-chart-1">
          Available
        </span>
        <Tooltip>
          <TooltipTrigger>Indonesia · UTC+7</TooltipTrigger>
          <TooltipContent side="right" align="center" sideOffset={10}>
            <p className="font-mono">Tangerang Regency</p>
          </TooltipContent>
        </Tooltip>
      </m.div>

      <GlitchHero mx={mx} my={my} />

      <m.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.15 }}
        className="mt-10 max-w-3xl leading-[1.6] text-foreground/80 sm:text-lg"
      >
        I enjoy building fast, reliable web applications with TypeScript and
        modern web technologies.
      </m.p>

      <m.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.3 }}
        className="mt-6 flex flex-wrap items-center gap-4 font-mono text-xs tracking-[0.06em] text-foreground/60 lowercase"
      >
        {socialItems.map((social, index) => {
          const Icon = social.icon;

          return (
            <span
              key={social.href}
              className="inline-flex items-center md:gap-4"
            >
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                title={social.label}
                aria-label={social.label}
                className="max-md:bg-surface inline-flex items-center gap-2 rounded-md p-2 text-foreground/70 no-underline transition-colors hover:bg-[color-mix(in_oklab,var(--color-chart)_10%,transparent)] hover:text-chart-1 md:rounded-none md:p-0 md:hover:bg-transparent"
              >
                <Icon className="inline-flex size-4.5 md:size-3.5" />
                <span className="hidden font-light md:inline">
                  {social.text}
                </span>
              </a>
              {index < socialItems.length - 1 && (
                <span aria-hidden className="hidden md:inline">
                  ·
                </span>
              )}
            </span>
          );
        })}
      </m.div>
    </section>
  );
}

function GlitchHero({ mx, my }: { mx: number; my: number }) {
  return (
    <m.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: REVEAL_EASE, delay: 0.05 }}
      className="ease-out-soft relative m-0 text-[clamp(64px,9vw,140px)] leading-[0.94] font-medium tracking-[-0.04em] text-foreground transition-transform duration-400"
      style={{ transform: `translate(${mx * -12}px, ${my * -6}px)` }}
    >
      <span className="relative inline-block font-mono">
        <span
          aria-hidden
          className="absolute top-0 -left-0.5 text-chart-1 opacity-60 mix-blend-screen"
        >
          yogyy
        </span>
        <span className="relative">yogyy</span>
      </span>
      <span className="mt-5 block text-[0.4em] leading-[1.4] font-normal tracking-[-0.008em] text-foreground/70">
        ↳ Full-stack <span className="text-chart-1">TypeScript</span> engineer
        <span className="caret" />
      </span>
    </m.h1>
  );
}

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, BookOpen, Trophy, Users, Globe } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import MagneticButton from "./MagneticButton";
import landingTheme from "@/lib/landing-theme";

const marqueeFeatures = [
  { icon: "⚡", label: "XP & Levels", color: "#eab308", start: "rgba(234, 179, 8, 0.26)", end: "rgba(251, 191, 36, 0.08)" },
  { icon: "🔥", label: "Daily Streaks", color: "#f97316", start: "rgba(249, 115, 22, 0.24)", end: "rgba(251, 146, 60, 0.08)" },
  { icon: "🏆", label: "Badges", color: "#f59e0b", start: "rgba(245, 158, 11, 0.24)", end: "rgba(252, 211, 77, 0.08)" },
  { icon: "🥇", label: "Leaderboard", color: "#10b981", start: "rgba(16, 185, 129, 0.24)", end: "rgba(45, 212, 191, 0.08)" },
  { icon: "🎯", label: "Smart Goals", color: "#ec4899", start: "rgba(236, 72, 153, 0.24)", end: "rgba(217, 70, 239, 0.08)" },
  { icon: "📈", label: "Progress Tracking", color: "#3b82f6", start: "rgba(59, 130, 246, 0.24)", end: "rgba(34, 211, 238, 0.08)" },
];

const Hero = () => {
  const { colors, animations, effects, typography, components, stats, trustBadges } = landingTheme;

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden px-4">
      {/* Gradient orbs */}
      <div
        className={`absolute ${effects.gradient.orb1.position} ${effects.gradient.orb1.size} ${effects.gradient.orb1.color} rounded-full ${effects.blur["3xl"]} animate-pulse`}
        style={{ animationDuration: effects.gradient.orb1.duration }}
      />
      <div
        className={`absolute ${effects.gradient.orb2.position} ${effects.gradient.orb2.size} ${effects.gradient.orb2.color} rounded-full ${effects.blur["3xl"]} animate-pulse`}
        style={{ animationDuration: effects.gradient.orb2.duration, animationDelay: effects.gradient.orb2.delay }}
      />

      <div className="container relative z-10 mx-auto px-2 sm:px-4 md:px-6 py-8 sm:py-12 md:pb-24 pt-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className={`${components.badge.base} ${components.badge.hover} mb-6 sm:mb-8 animate-fade-in`}
            style={{ animationDelay: animations.delay.badge }}
          >
            <Sparkles
              aria-hidden="true"
              className="h-3 w-3 sm:h-4 sm:w-4"
              style={{ color: colors.primary.blue }}
            />
            <span>AI-Powered Learning Platform</span>
            <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] sm:text-xs">New</span>
          </div>

          {/* Logo with glow */}
          <div
            className="mb-4 sm:mb-6 animate-fade-in relative group"
            style={{ animationDelay: animations.delay.logo }}
          >
            <div className={`absolute inset-0 bg-blue-500/20 rounded-full ${effects.blur["2xl"]} group-hover:bg-blue-500/30 transition-all duration-500`} />
            <Image
              src="/InnoVision_LOGO-removebg-preview.png"
              alt="InnoVision Logo"
              width={80}
              height={80}
              priority
              className="w-14 h-14 sm:w-20 sm:h-20 relative z-10 group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Main heading with gradient */}
          <h1 className={`${typography.hero.title} mb-4 sm:mb-6`}>
            <span
              className="block text-foreground animate-fade-in"
              style={{ animationDelay: animations.delay.heading }}
            >
              Learn Any Topic
            </span>
            <span
              className={`block bg-linear-to-r ${colors.primary.gradient} bg-clip-text text-transparent animate-fade-in animate-gradient`}
              style={{ animationDelay: animations.delay.subheading }}
            >
              with AI-Generated Courses
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`${typography.hero.subtitle} text-muted-foreground max-w-2xl mb-4 sm:mb-6 leading-relaxed animate-fade-in px-2`}
            style={{ animationDelay: animations.delay.subtitle }}
          >
            Generate personalized courses on any topic in seconds. From programming to philosophy,
            our AI creates structured, chapter-wise content tailored to your learning style.
          </p>

          {/* Feature marquee */}
          <div
            className="feature-marquee group mb-6 sm:mb-10 w-full max-w-5xl animate-fade-in"
            style={{ animationDelay: animations.delay.features }}
          >
            <div className="feature-marquee-viewport relative overflow-hidden rounded-[2rem] border border-border/50 bg-card/20 px-2 sm:px-4 py-3 sm:py-4 backdrop-blur-xl shadow-lg shadow-black/5">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-20 bg-gradient-to-r from-background via-background/85 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-20 bg-gradient-to-l from-background via-background/85 to-transparent" />

              <div className="feature-marquee-track flex w-max items-center gap-3 sm:gap-4">
                {[...marqueeFeatures, ...marqueeFeatures].map((item, index) => (
                  <div
                    key={`${item.label}-${index}`}
                    className={`feature-marquee-card flex shrink-0 items-center gap-3 rounded-full border border-border/60 px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base font-light text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]`}
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${item.start}, ${item.end})`,
                      backgroundColor: `${item.color}10`,
                      boxShadow: `0 10px 30px ${item.color}12`,
                    }}
                  >
                    <span
                      className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 bg-white/60 text-base sm:text-lg backdrop-blur-sm"
                      aria-hidden="true"
                      style={{ color: item.color }}
                    >
                      {item.icon}
                    </span>
                    <span className="whitespace-nowrap">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in w-full sm:w-auto"
            style={{ animationDelay: animations.delay.buttons }}
          >
            <MagneticButton strength={0.2}>
              <Link href="/login" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  aria-label="Get started with InnoVision for free"
                  className={`h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-light gap-2 ${components.button.primary} w-full sm:w-auto`}
                >
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link href="/demo" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  aria-label="Watch product demo"
                  className={`h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-light gap-2 ${components.button.secondary} w-full sm:w-auto group`}
                >
                  <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  See Demo
                </Button>
              </Link>
            </MagneticButton>
          </div>

          {/* Stats with Animated Counters */}
          <div
            className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-12 pt-6 sm:pt-8 border-t border-border w-full max-w-3xl animate-fade-in"
            style={{ animationDelay: animations.delay.stats }}
          >
            {stats.map((stat, i) => {
              const icons = [BookOpen, Users, Globe, Trophy];
              const Icon = icons[i];
              return (
                <div key={i} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1">
                    <Icon
                      aria-hidden="true"
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${stat.color} group-hover:scale-110 transition-transform`}
                    />
                    <span
                      className="text-xl sm:text-2xl md:text-3xl font-light text-foreground"
                      aria-label={`${stat.end}${stat.suffix} ${stat.label}`}
                    >
                      <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Trust badges */}
          <div
            className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground animate-fade-in font-light"
            style={{ animationDelay: animations.delay.trust }}
          >
            {trustBadges.map((text, i) => (
              <div key={i} className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 ${landingTheme.radius.full} border border-border bg-card/30 backdrop-blur-sm hover:bg-card/50 ${landingTheme.hover.scale.sm} transition-all duration-300`}>
                <svg className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .feature-marquee-track {
          animation: marquee 28s linear infinite;
          will-change: transform;
        }
        .feature-marquee:hover .feature-marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .feature-marquee-track {
            animation: none;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

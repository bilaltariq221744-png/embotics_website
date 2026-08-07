import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  animate,
} from 'framer-motion';
import { useRef, useState, type MouseEvent } from 'react';
import {
  Leaf,
  Target,
  Eye,
  ShieldCheck,
  Users,
  Mail,
  Sparkles,
  ArrowRight,
  Zap,
  Code,
  Lightbulb,
  Rocket,
  CheckCircle2,
} from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import abdullahImage from '../assets/abdullah.png';
import bilalImage from '../assets/bilal.png';
import faizanImage from '../assets/faizan.png';
import emboticsImage from '../assets/embotics.jpg';

// Site-wide accent, matching the original forest/gold theme.
const GOLD = '#C08A3E';
const EASE = [0.22, 1, 0.36, 1] as const;

const SocialIcon = ({ type, className = 'w-5 h-5' }: { type: 'facebook' | 'linkedin' | 'instagram'; className?: string }) => {
  const commonProps = { className, fill: 'currentColor', viewBox: '0 0 24 24' };

  switch (type) {
    case 'facebook':
      return (
        <svg {...commonProps} aria-hidden="true">
          <path d="M14 8h-3V6a1 1 0 0 1 1-1h2V2h-2.5A3.5 3.5 0 0 0 8 5.5V8H6v3h2v10h3V11h2.2l.3-3H11z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...commonProps} aria-hidden="true">
          <path d="M6.94 8.5a1.56 1.56 0 1 0 0-3.12 1.56 1.56 0 0 0 0 3.12ZM5.5 9.5h2.88V18H5.5zM10.5 9.5h2.76v1.16h.04c.38-.72 1.32-1.48 2.72-1.48 2.91 0 3.45 1.91 3.45 4.4V18h-2.88v-7.55c0-1.8-.03-4.11-2.5-4.11-2.51 0-2.89 1.96-2.89 3.98V18H10.5z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...commonProps} aria-hidden="true">
          <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 2A2.5 2.5 0 0 0 5 7.5v9A2.5 2.5 0 0 0 7.5 19h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 16.5 5h-9Zm4.5 2.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.25-1.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
        </svg>
      );
  }
};

// Animated count-up, ported from the original hero stats strip. Supports
// decimals so it also works for things like "99.8%".
const Counter = ({
  to,
  suffix = '',
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) => {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  return (
    <motion.span
      onViewportEnter={() => {
        if (started.current) return;
        started.current = true;
        const controls = animate(0, to, {
          duration: 1.4,
          ease: EASE,
          onUpdate: (v) => setValue(Number(v.toFixed(decimals))),
        });
        return () => controls.stop();
      }}
      viewport={{ once: true, amount: 1 }}
    >
      {value.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
};

// Small ambient particles drifting behind the hero — a nod to sorted
// recyclables settling into place.
const heroParticles = [
  { top: '20%', left: '6%', size: 10, delay: 0 },
  { top: '72%', left: '10%', size: 14, delay: 0.6 },
  { top: '15%', left: '92%', size: 12, delay: 0.3 },
  { top: '78%', left: '88%', size: 8, delay: 0.9 },
  { top: '45%', left: '50%', size: 7, delay: 1.2 },
];

const headlineWords = ['Engineering', 'the', 'circular', 'economy'];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const MISSION_VISION_DATA = [
  {
    icon: Target,
    title: 'Our Mission',
    subtitle: 'High-Throughput Vending Infrastructure',
    copy: 'To deploy intelligent reverse vending infrastructure that transforms public spaces into high-throughput recycling hubs, rewarding every citizen instantly for participating in the circular economy.',
    gradient: 'from-green-primary/10 via-emerald-500/5 to-transparent',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    subtitle: 'Zero Landfill & Ocean Waste',
    copy: 'A world where zero recyclable containers end up in landfills or oceans — smart urban ecosystems where waste becomes a fully tracked, transparent resource stream, monetised in real time.',
    gradient: 'from-[#C08A3E]/10 via-green-primary/5 to-transparent',
  },
];

const CORE_VALUES = [
  {
    icon: Leaf,
    title: 'Sustainability First',
    desc: 'Every decision we make is rigorously measured against its ecological and societal impact. We build long-lasting technology that actively heals our environment.',
    highlight: 'Ecological rigor',
  },
  {
    icon: ShieldCheck,
    title: 'Engineering Integrity',
    desc: 'We ship industrial-grade, failure-resistant systems. No gimmicks or shortcuts — just rock-solid physical hardware and hyper-optimized software performance.',
    highlight: 'Industrial reliability',
  },
  {
    icon: Users,
    title: 'People & Communities',
    desc: 'We craft human-centric products for everyday users. Rewards are instant, deployment access is universal, and operational transparency is absolute.',
    highlight: 'Universal access',
  },
];

const FOUNDERS = [
  {
    name: 'Abdullah Zia Abbassi',
    role: 'CEO & Co-Founder',
    image: abdullahImage,
    facebook: 'https://www.facebook.com/share/1AERQnd9hr/?mibextid=wwXIfr',
    linkedin: 'https://www.linkedin.com/in/abdullah-zia-abbasi-820500286?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    instagram: 'https://www.instagram.com/mr._.abdullah_00?igsh=cWxjY2dxZDI2NDI5',
  },
  {
    name: 'Bilal Tariq',
    role: 'CTO & Co-Founder',
    image: bilalImage,
    facebook: 'https://www.facebook.com/share/1BWuxy1TAL/?mibextid=wwXIfr',
    linkedin: 'https://www.linkedin.com/in/bilal-tariq-34215b318?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    instagram: 'https://www.instagram.com/bilal__957?igsh=aXlmdm84ZmhkanQ2&utm_source=qr',
  },
  {
    name: 'Faizan Tahir',
    role: 'COO & Co-Founder',
    image: faizanImage,
    facebook: 'https://www.instagram.com/oyeee_faizi?igsh=MXRsYjJhYmVsMGYx',
    linkedin: 'https://www.linkedin.com/in/mfaizantahir?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    instagram: 'https://www.instagram.com/oyeee_faizi?igsh=MXRsYjJhYmVsMGYx',
  },
];

const TIMELINE_STEPS = [
  {
    icon: Code,
    phase: 'Phase 1',
    title: 'Freelance Roots & Hardware Labs',
    desc: 'Embotics began with three friends engineering custom hardware and software automation systems. We built high-performance solutions for diverse clients, honing our rapid prototyping and embedded architecture workflows.',
  },
  {
    icon: Lightbulb,
    phase: 'Phase 2',
    title: 'The Pivotal Realization',
    desc: 'We paused to re-evaluate our long-term trajectory and asked: "Why are we building systems for others, but never for a mission we own?" That spark directed our focus toward circular green-tech engineering.',
  },
  {
    icon: Rocket,
    phase: 'Phase 3',
    title: 'R&D & Prototyping',
    desc: 'Late-night prototyping, CAD schematics, and neural vision algorithms materialized into our first-generation autonomous Reverse Vending Machine (RVM) designed for real-time item identification and rewards.',
  },
  {
    icon: CheckCircle2,
    phase: 'Phase 4',
    title: 'Live Campus & Urban Deployment',
    desc: 'Today, we are deploying industrial RVM units directly into high-density public spaces — starting within our home university campus to establish verified proof of ecological impact.',
  },
];

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Transforms
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroFade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Scroll-driven progress fill for the timeline — the story unspooling
  // as you read, same technique as the original narrative section.
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.75', 'end 0.4'],
  });

  // 3D Tilt Effect Setup for Hero Graphic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="bg-white text-text-base selection:bg-green-primary/20 selection:text-forest overflow-hidden font-sans antialiased">

      {/* 1. Interactive 3D Hero Section */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[92vh] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white"
      >
        {/* Background Ambient Orbs */}
        <motion.div
          style={{ y: blobY1 }}
          className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-green-primary/20 blur-[130px] rounded-full pointer-events-none"
        />
        <motion.div
          style={{ y: blobY2 }}
          className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-[#C08A3E]/20 blur-[140px] rounded-full pointer-events-none"
        />

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_50%,transparent_100%)] pointer-events-none" />

        {/* Ambient drifting particles — sorted recyclables settling into place */}
        <div className="absolute inset-0 pointer-events-none">
          {heroParticles.map((p, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-green-primary/25"
              style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
              animate={{ y: [0, -18, 0] }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: p.delay,
              }}
            />
          ))}
        </div>

        <motion.div
          style={{ opacity: heroFade }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-12 items-center">

            {/* Left Column: Copy & Actions */}
            <motion.div
              style={{ y: heroContentY }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Top Pill Badge with Live Pulse */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-green-primary/10 border border-green-primary/20 text-forest text-xs font-semibold tracking-[0.18em] uppercase mb-8 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-primary"></span>
                </span>
                <Sparkles className="w-3.5 h-3.5 text-green-primary" />
                <span>About Embotics Corporation</span>
              </div>

              {/* Main Headline — staggers in word by word */}
              <motion.h1
                className="text-[2.5rem] sm:text-5xl lg:text-[4.25rem] font-heading font-bold tracking-tight text-forest leading-[1.08] flex flex-wrap gap-x-3"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
                }}
              >
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    className={
                      word === 'circular' || word === 'economy'
                        ? 'inline-block text-green-primary'
                        : 'inline-block'
                    }
                    variants={{
                      hidden: { opacity: 0, y: 22 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                    }}
                  >
                    {word}
                    {word === 'the' ? <br /> : ''}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Sub-Headline / Body */}
              <p className="mt-6 text-text-base/90 text-base sm:text-xl font-normal leading-relaxed max-w-xl">
                We're an advanced green-tech enterprise on a mission to make recycling intelligent, rewarding, and universally accessible — powered by custom robotics and neural computer vision.
              </p>

              {/* Call to Action Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <Link to="/contact">
                  <Button
                    variant="primary"
                    className="group h-13 sm:h-14 px-8 rounded-full bg-forest hover:bg-green-primary text-white font-bold text-[15px] shadow-[0_10px_30px_rgba(15,46,18,0.25)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(15,46,18,0.35)] hover:-translate-y-0.5 inline-flex items-center gap-2.5"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a
                  href="#story"
                  className="h-13 sm:h-14 px-7 rounded-full border border-forest/20 bg-white/80 text-forest font-medium text-[15px] transition-all duration-300 hover:bg-white hover:border-green-primary/40 shadow-sm inline-flex items-center"
                >
                  Our Story
                </a>
              </div>

              {/* Micro Trust Stats — animated count-up */}
              <div className="mt-12 pt-8 border-t border-forest/10 grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-forest tracking-tight">
                    <Counter to={99.8} decimals={1} suffix="%" />
                  </p>
                  <p className="text-xs text-text-base/70 font-medium mt-0.5">Sorting Accuracy</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-forest tracking-tight">24/7</p>
                  <p className="text-xs text-text-base/70 font-medium mt-0.5">Autonomous Uptime</p>
                </div>
                <div className="col-span-2 sm:col-span-1 border-t sm:border-t-0 pt-4 sm:pt-0 border-forest/10">
                  <span className="inline-block text-[11px] font-bold text-green-primary bg-green-primary/10 border border-green-primary/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Live Deployment
                  </span>
                  <p className="text-xs font-semibold text-text-base/80 mt-1">Campus Hub 01</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive 3D Card Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="relative flex items-center justify-center h-[420px] sm:h-[480px] perspective-1000"
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative w-full max-w-[340px] sm:max-w-[370px] h-[390px] sm:h-[440px] rounded-[2.5rem] bg-white border border-forest/20 shadow-[0_30px_80px_rgba(15,46,18,0.15)] flex flex-col items-center justify-center overflow-hidden backdrop-blur-xl p-3"
              >
                {/* Background Glow Inside Card */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(15,46,18,0.12),transparent_70%)] pointer-events-none" />

                {/* Main Image Container */}
                <div className="w-full h-full rounded-[2rem] overflow-hidden border border-forest/20 relative shadow-inner group">
                  <img
                    src={emboticsImage}
                    alt="Embotics Autonomous Hardware System"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Animated AI Scanning Line Effect */}
                  <motion.div
                    animate={{ y: ['0%', '300%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-green-primary to-transparent shadow-[0_0_15px_#3f8f4f] opacity-75 pointer-events-none"
                  />

                  {/* Target Reticle Overlay */}
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#C08A3E]/80 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#C08A3E]/80 pointer-events-none" />

                  {/* Bottom Overlay Label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent flex items-end p-5">
                    <div className="flex items-center gap-2 bg-forest/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-green-primary/30">
                      <span className="w-2 h-2 rounded-full bg-green-primary animate-pulse" />
                      <span className="text-white text-[11px] font-semibold tracking-[0.18em] uppercase">
                        Neural Vision Active
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 1: Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute top-4 sm:top-6 -left-2 sm:-left-6 bg-white/95 backdrop-blur-xl rounded-2xl px-4 py-3.5 shadow-xl border border-forest/10 flex items-center gap-3 z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-green-primary/10 border border-green-primary/20 flex items-center justify-center text-green-primary shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-forest font-bold text-sm leading-none">Instant Cash</p>
                  <p className="text-text-base/60 text-[11px] mt-1">User payout engine</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute bottom-4 sm:bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-xl rounded-2xl px-4 py-3.5 shadow-xl border border-forest/10 flex items-center gap-3 z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-[#C08A3E]/10 border border-[#C08A3E]/30 flex items-center justify-center text-[#C08A3E] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-forest font-bold text-sm leading-none">100% Tracked</p>
                  <p className="text-text-base/60 text-[11px] mt-1">Verified recycling</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-28 lg:py-36 bg-[#F8FAFC] relative overflow-hidden border-t border-b border-forest/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,46,18,0.04),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/*
            Connecting "rope" between Mission and Vision — the path's `d`
            morphs through drop / overshoot / settle keyframes as it draws
            in, same as the original connector.
          */}
          <div className="hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <svg viewBox="0 0 100 32" className="w-32 h-8 mx-auto" fill="none">
              <motion.path
                stroke={GOLD}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="1 7"
                initial={{ pathLength: 0, opacity: 0, d: 'M4 4 Q50 4 96 4' }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                  d: [
                    'M4 4 Q50 4 96 4',
                    'M4 4 Q50 60 96 14',
                    'M4 4 Q50 20 96 0',
                    'M4 4 Q50 32 96 4',
                  ],
                }}
                viewport={{ once: true }}
                transition={{
                  pathLength: { duration: 0.9, ease: EASE },
                  opacity: { duration: 0.3 },
                  d: {
                    duration: 1.15,
                    times: [0, 0.45, 0.75, 1],
                    ease: ['easeIn', 'easeOut', 'easeOut'],
                  },
                }}
              />
            </svg>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {MISSION_VISION_DATA.map((card, idx) => (
              <motion.div key={card.title} variants={fadeUp} transition={{ duration: 0.6, ease: EASE }}>
                <motion.div
                  animate={{ rotate: idx === 0 ? [-2, 2, -2] : [2, -2, 2] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.3 }}
                  style={{ transformOrigin: idx === 0 ? 'top left' : 'top right' }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-white/95 backdrop-blur-md rounded-[2.5rem] p-10 sm:p-12 border border-forest/10 shadow-xl shadow-forest/5 transition-shadow duration-300 hover:border-green-primary/50 hover:shadow-2xl overflow-hidden flex flex-col justify-between h-full"
                >
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${card.gradient} rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110`} />
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ background: idx === 0 ? '#3f8f4f' : GOLD }}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className="w-16 h-16 rounded-2xl bg-white border flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:scale-110"
                        style={{
                          borderColor: idx === 0 ? 'rgba(63,143,79,0.3)' : 'rgba(192,138,62,0.3)',
                          color: idx === 0 ? '#3f8f4f' : GOLD,
                        }}
                      >
                        <card.icon className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-text-base/60 bg-forest/5 px-3 py-1 rounded-full border border-forest/10">
                        {card.subtitle}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-forest mb-4 tracking-tight">
                      {card.title}
                    </h2>
                    <p className="text-text-base/90 text-base sm:text-lg leading-relaxed font-normal">
                      {card.copy}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-forest/10 flex items-center gap-2 text-sm font-semibold text-green-primary">
                    <span>Explore Impact Goals</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-28 lg:py-36 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <span className="text-green-primary font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full bg-green-primary/10 border border-green-primary/20">
              What We Stand For
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-heading font-bold tracking-tight text-forest leading-tight">
              Core principles &amp; values
            </h2>
            <p className="mt-5 text-text-base/90 text-lg leading-relaxed">
              The fundamental standards guiding every hardware build and code deployment we ship.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {CORE_VALUES.map((value, idx) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: EASE }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-[2.25rem] p-9 sm:p-10 border border-forest/10 transition-all duration-300 hover:border-green-primary/40 hover:shadow-2xl text-left shadow-sm relative overflow-hidden flex flex-col justify-between"
              >
                <span
                  className="absolute top-6 right-7 font-mono text-md tracking-widest"
                  style={{ color: GOLD }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div>
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 rounded-2xl bg-green-primary/10 border border-green-primary/20 flex items-center justify-center mb-8 text-green-primary shadow-inner transition-all duration-300 group-hover:bg-green-primary group-hover:text-white"
                  >
                    <value.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-forest text-xl tracking-tight mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-base/90 text-[15px] sm:text-base leading-relaxed">
                    {value.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-forest/10 flex items-center justify-between text-xs font-semibold text-text-base/50">
                  <span>Pillar</span>
                  <span className="text-green-primary bg-green-primary/10 px-2.5 py-1 rounded-md">
                    {value.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Founders Grid */}
      <section className="py-28 lg:py-36 bg-[#F8FAFC] relative border-t border-forest/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <span className="text-green-primary font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full bg-green-primary/10 border border-green-primary/20">
              Leadership
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-heading font-bold tracking-tight text-forest leading-tight">
              Meet the founders
            </h2>
            <p className="mt-5 text-text-base/90 text-lg leading-relaxed">
              Our co-founders bring cross-disciplinary expertise in embedded systems, AI, mechanical engineering, and scalable web architecture.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {FOUNDERS.map((founder, idx) => (
              <motion.div
                key={founder.name}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: EASE, delay: idx * 0.06 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-[2.5rem] p-7 sm:p-8 border border-forest/10 text-center transition-all duration-300 hover:border-green-primary/40 hover:shadow-2xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.35 }}
                    className="relative w-full aspect-[4/5] max-w-[220px] rounded-[1.75rem] overflow-hidden mx-auto mb-6 border border-forest/10 shadow-md bg-gradient-to-b from-[#F8FAFC] to-forest/5"
                  >
                    {founder.image ? (
                      <img
                        src={founder.image}
                        alt={`${founder.name} headshot`}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center">
                        <Users className="w-12 h-12 text-green-primary" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>

                  <h3 className="font-heading font-bold text-forest text-xl tracking-tight">
                    {founder.name}
                  </h3>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold text-green-primary bg-green-primary/10 border border-green-primary/20">
                    {founder.role}
                  </span>
                </div>

                <div className="flex justify-center gap-3 mt-8 pt-6 border-t border-forest/10">
                  <a
                    href={founder.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-forest/5 border border-forest/10 flex items-center justify-center text-forest/60 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] hover:-translate-y-0.5 transition-all duration-200"
                    aria-label={`${founder.name} Facebook`}
                  >
                    <SocialIcon type="facebook" className="w-4 h-4" />
                  </a>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-forest/5 border border-forest/10 flex items-center justify-center text-forest/60 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:-translate-y-0.5 transition-all duration-200"
                    aria-label={`${founder.name} LinkedIn`}
                  >
                    <SocialIcon type="linkedin" className="w-4 h-4" />
                  </a>
                  <a
                    href={founder.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-forest/5 border border-forest/10 flex items-center justify-center text-forest/60 hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F] hover:-translate-y-0.5 transition-all duration-200"
                    aria-label={`${founder.name} Instagram`}
                  >
                    <SocialIcon type="instagram" className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Company Story Timeline — vertical line now fills in sync with
          scroll progress, same technique as the original narrative track. */}
      <section id="story" className="py-28 lg:py-36 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-green-primary font-semibold uppercase tracking-[0.2em] text-xs px-4 py-1.5 rounded-full bg-green-primary/10 border border-green-primary/20">
              Our Journey
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-heading font-bold tracking-tight text-forest leading-tight">
              From engineering lab to impact at scale
            </h2>
            <p className="mt-4 text-text-base/90 text-lg max-w-2xl mx-auto">
              How a collective passion for hardware automation evolved into a mission-driven green-tech enterprise.
            </p>
          </motion.div>

          <div ref={timelineRef} className="relative">
            {/* Vertical Connecting Line — base track */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-forest/10" />
            {/* Scroll-progress fill */}
            <motion.div
              className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 origin-top"
              style={{
                background: `linear-gradient(to bottom, ${GOLD}, #1f4d2c)`,
                scaleY: timelineProgress,
              }}
            />

            <div className="space-y-12 relative">
              {TIMELINE_STEPS.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="w-full md:w-1/2 p-2">
                      <div className="bg-white rounded-[2rem] p-8 border border-forest/10 shadow-lg shadow-forest/5 relative hover:border-green-primary/30 transition-all duration-300">
                        <span
                          className="text-xs font-bold uppercase tracking-wider bg-green-primary/10 px-3 py-1 rounded-full border border-green-primary/20 inline-block mb-4"
                          style={{ color: '#3f8f4f' }}
                        >
                          {step.phase}
                        </span>
                        <h3 className="text-xl font-heading font-bold text-forest mb-3">
                          {step.title}
                        </h3>
                        <p className="text-text-base/90 text-sm sm:text-base leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    <div className="my-4 md:my-0 flex items-center justify-center z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        viewport={{ once: true }}
                        className="w-12 h-12 rounded-full bg-forest text-white border-4 border-white shadow-xl flex items-center justify-center shrink-0"
                      >
                        <step.icon className="w-5 h-5" />
                      </motion.div>
                    </div>

                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA — pill-shaped closing card, matching the original mobile-safe
          shape fix (rounded-[32px] -> full pill only from sm: up), with
          decorative leaf/sparkle icons repositioned to real scale values. */}
      <section className="py-10 sm:py-16 bg-white relative z-10">
        <div className="max-w-4xl mx-4 sm:mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[32px] sm:rounded-[999px] border border-green-primary/30 bg-emerald-50/60 px-6 py-14 sm:py-19 text-center"
          >
            {/* decorative leaf — top right */}
            <Leaf
              className="absolute top-6 right-6 sm:top-20 sm:right-16 w-6 h-6 sm:w-7 sm:h-7 text-green-primary/50 rotate-[10deg]"
              strokeWidth={1.75}
              aria-hidden
            />
            {/* decorative sparkle — bottom left */}
            <Sparkles
              className="absolute bottom-6 left-6 sm:bottom-20 sm:left-16 w-5 h-5 sm:w-6 sm:h-6 text-green-primary/50"
              strokeWidth={1.75}
              aria-hidden
            />

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-forest">
              Want to build the future with us?
            </h2>
            <p className="mt-4 text-text-base/70 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              We're always open to partnerships, pilot projects, and
              conversations about how our technology can create impact.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="gap-2 rounded-full border border-forest/60 bg-white text-forest font-semibold px-6 py-3 hover:bg-forest hover:text-white transition-colors"
                >
                  Get in Touch <Mail className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
export default About;
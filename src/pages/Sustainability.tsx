import { useEffect, useRef, useState } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import {
  Leaf,
  Recycle,
  Play,
  ArrowRight,
  Check,
  X,
  DollarSign,
  PackageX,
  Sprout,
  Camera,
  Coins,
  RefreshCw,
  Sparkles,
  Mail,
  Wrench,
} from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import recycleImage from '../assets/recycle.jpg';
import bottleImage from '../assets/CrushedImage.png';
import recycleImageGraphic from '../assets/RecycleImage.png';
import airUniLogo from '../assets/air-university-logo.png';
import numlUniLogo from '../assets/numl-logo.png';
import auBIC from '../assets/AUBIC.png';


const COPPER = '#C08A3E';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 16 } },
};

const SideGlow = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
    <motion.div
      className="absolute -left-20 top-[8%] w-72 h-72 rounded-full blur-[90px]"
      style={{ background: COPPER, opacity: 0.35 }}
      animate={{ y: [0, 70, 0], opacity: [0.22, 0.4, 0.22] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute -left-16 bottom-[18%] w-64 h-64 rounded-full blur-[90px] bg-green-primary"
      style={{ opacity: 0.3 }}
      animate={{ y: [0, -55, 0], opacity: [0.2, 0.36, 0.2] }}
      transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
    />
    <motion.div
      className="absolute -right-20 top-[28%] w-72 h-72 rounded-full blur-[90px] bg-green-primary"
      style={{ opacity: 0.3 }}
      animate={{ y: [0, -65, 0], opacity: [0.2, 0.36, 0.2] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
    />
    <motion.div
      className="absolute -right-16 bottom-[8%] w-64 h-64 rounded-full blur-[90px]"
      style={{ background: COPPER, opacity: 0.3 }}
      animate={{ y: [0, 50, 0], opacity: [0.2, 0.36, 0.2] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
    />
  </div>
);

const Counter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: '-60px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      setValue(0);
      return;
    }
    let raf: number;
    let start: number | null = null;
    const DURATION = 1200;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
};

const Sustainability = () => {
  return (
    <div className="relative bg-white text-forest selection:bg-emerald-500/20 selection:text-emerald-900 overflow-hidden font-sans antialiased min-h-screen">
      <SideGlow />
      <div className="relative z-10">

        {/* 1. HERO SECTION */}
        <section className="relative pt-15 pb-16 lg:pt-15 lg:pb-24 overflow-hidden">
          <div className="max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">

              {/* Left Column Text */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                variants={fadeLeft}
                className="lg:col-span-6 text-left"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: COPPER }} />
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  <span>Pioneers of Sustainability</span>
                </motion.div>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tight text-forest leading-[1.12]">
                  Turning Plastic Waste <br />
                  Into <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700">
                    Measurable Value
                  </span>
                </h1>

                <p className="mt-6 text-text-base/90 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
                  At Embotics, we are redefining how societies handle post-consumer waste. By
                  combining smart Reverse Vending Machines (RVMs) with AI verification, we turn
                  discarded plastic into real rewards — empowering citizens and helping brands
                  reach net-zero goals.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link to="/contact">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        variant="primary"
                        className="h-[3.25rem] px-8 rounded-full bg-green-primary hover:bg-forest text-white font-bold text-base shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
                      >
                        <span>Partner With Us</span>
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </motion.div>
                  </Link>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="h-[3.25rem] px-7 rounded-full bg-white hover:bg-slate-50 text-forest font-semibold text-base border border-forest/15 shadow-sm hover:shadow transition-all inline-flex items-center gap-2.5"
                  >
                    <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <Play className="w-3.5 h-3.5 fill-emerald-600 ml-0.5" />
                    </div>
                    <span>Watch How It Works</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Column Arch Image Frame */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                variants={fadeRight}
                className="lg:col-span-6 relative flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-lg aspect-[4/5]">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                    className="absolute -top-6 -right-6 w-32 h-32 rounded-full z-0"
                    style={{ background: COPPER, opacity: 0.85 }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 w-full h-full rounded-t-[14rem] sm:rounded-t-[18rem] rounded-b-3xl overflow-hidden border-4 border-white shadow-2xl"
                  >
                    <img
                      src={recycleImage}
                      alt="Pioneers of Sustainability cleanup"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    className="absolute -bottom-4 -left-6 z-20 w-16 h-16 pointer-events-none"
                  >
                    <Leaf className="w-full h-full text-green-primary rotate-12 drop-shadow-lg fill-emerald-500/20" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Trusted Partners Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 pt-8 border-t border-forest/10 flex flex-wrap items-center justify-between gap-6 text-forest/60 text-sm font-semibold uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <span className="text-forest/40">Trusted By</span>
                <span className="font-bold text-forest uppercase">Industry Leaders</span>
              </div>

              <div className="flex flex-wrap items-center gap-10">
                <img
                  src={airUniLogo}
                  alt="AIR University"
                  className="h-20 sm:h-20 w-auto object-contain opacity-100"
                />
                <img
                  src={numlUniLogo}
                  alt="NUML University"
                  className="h-20 sm:h-20 w-auto object-contain opacity-100"
                />
                <img
                  src={auBIC}
                  alt="AIR University BIC"
                  className="h-20 sm:h-25 w-auto object-contain opacity-100"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. TOP METRICS STRIP */}
        <section className="py-6 max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            variants={staggerContainer}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow border border-forest/10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Recycle, value: 250, suffix: 'K+', label: 'Bottles Redirected' },
              { icon: Coins, value: 40, suffix: '+', label: 'Active Recyclers' },
              { icon: Leaf, value: 150, suffix: '+', label: 'Kg CO₂ Prevented' },
              { icon: Sprout, value: 1, suffix: '+', label: 'Cities & Deployments' },
            ].map((m) => (
              <motion.div
                key={m.label}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="flex items-center gap-4 p-2 rounded-2xl transition-all"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: `${COPPER}16` }}
                >
                  <m.icon className="w-7 h-7" style={{ color: COPPER }} />
                </div>
                <div>
                  <h4 className="font-heading text-3xl font-extrabold text-forest tracking-tight">
                    <Counter end={m.value} suffix={m.suffix} />
                  </h4>
                  <p className="text-sm font-semibold text-forest/70">{m.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 3. THE PROBLEM SECTION */}
        <section className="py-16 my-8 bg-[#2D5F44] relative z-10">
          <div className="max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeUp}>
              <div
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6"
                style={{ background: `${COPPER}22`, color: COPPER }}
              >
                The Plastic Crisis
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                    Single-use plastic has no perceived return value today.
                  </h2>
                  <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed">
                    Global linear consumption models have led to severe environmental degradation.
                    Millions of tons of plastic bottles end up in oceans and landfills annually
                    because consumers lack convenient, immediate incentives to recycle.
                  </p>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false }}
                  className="lg:col-span-4 space-y-4"
                >
                  {[
                    {
                      icon: RefreshCw,
                      title: 'Low Global Recycling Rates',
                      text: 'Less than 9% of plastic waste is successfully recycled back into new products.',
                    },
                    {
                      icon: X,
                      title: 'Zero Consumer Incentive',
                      text: 'Traditional disposal offers zero direct value to consumers for responsible recycling.',
                    },
                    {
                      icon: Wrench,
                      title: 'High Infrastructure Cost',
                      text: 'Legacy waste management lacks automated verification and real-time data tracking.',
                    },
                  ].map((row) => (
                    <motion.div
                      key={row.title}
                      variants={fadeUp}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 bg-white/10 p-4 rounded-2xl border border-white/10 transition-transform"
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${COPPER}44`, color: COPPER }}
                      >
                        <row.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-base">{row.title}</h4>
                        <p className="text-white/80 text-sm mt-0.5">{row.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="lg:col-span-3 flex justify-center relative">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                    className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center"
                  >
                    <img
                      src={bottleImage || recycleImage}
                      alt="Plastic bottle waste"
                      className="max-h-full object-contain filter drop-shadow-md"
                    />
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 90 }}
                      className="absolute right-2 bottom-4 w-10 h-10 rounded-full bg-white shadow-md border flex items-center justify-center cursor-pointer"
                      style={{ borderColor: `${COPPER}55`, color: COPPER }}
                    >
                      <X className="w-6 h-6 stroke-[3]" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. OUR SOLUTION */}
        <section className="py-8 max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeLeft}
              className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-forest/10 flex flex-col justify-center hover:shadow-md transition-shadow"
            >
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-green-primary/80 mb-4">
                Our Solution
              </span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-forest tracking-tight">
                Shifting from Linear Waste to Circular Value
              </h2>
              <p className="mt-4 text-text-base/90 text-base sm:text-lg leading-relaxed">
                The standard "Take → Make → Waste" economic model is unsustainable. Embotics
                bridges the gap between public participation and industrial recycling by turning
                waste collection into a rewarding, seamless automated experience.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              variants={staggerContainer}
              className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                {
                  icon: DollarSign,
                  title: 'Cost-Effective Logistics',
                  text: 'Dramatically cuts urban cleanup overhead through point-of-use compaction.',
                },
                {
                  icon: PackageX,
                  title: 'Retained Material Purity',
                  text: 'Clean, uncontaminated plastic streams ready for high-grade remanufacturing.',
                },
                {
                  icon: Leaf,
                  title: 'Maximum Carbon Offset',
                  text: 'Direct reduction of virgin plastic production and fossil fuel consumption.',
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.08)' }}
                  className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-forest/10 text-center flex flex-col items-center justify-center transition-all"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: `${COPPER}16` }}
                  >
                    <card.icon className="w-7 h-7" style={{ color: COPPER }} />
                  </div>
                  <h4 className="font-bold text-forest text-base sm:text-lg">{card.title}</h4>
                  <p className="text-forest/60 text-xs sm:text-sm mt-2">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5. OUR ECOSYSTEM */}
        <section className="py-8 max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-forest/10 hover:shadow-md transition-shadow"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wider uppercase mb-6">
              Our Ecosystem
            </span>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest tracking-tight leading-tight">
                    AI-Powered Smart Reverse Vending Technology
                  </h2>
                  <p className="mt-4 text-text-base/90 text-base sm:text-lg leading-relaxed">
                    Embotics pairs optical AI recognition with intelligent compacting technology.
                    Every bottle deposited is instantly verified, sorted, and converted into
                    redeemable digital credit.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    {[
                      { bold: 'AI Optical Vision:', rest: 'Instantly identifies bottle material, brand, and mass.' },
                      { bold: 'Instant Digital Rewards:', rest: 'Direct cashback or points to UPI, Paytm, and partner stores.' },
                      { bold: 'Plug-and-Play Design:', rest: 'Compact footprint engineered for malls, universities, & transit hubs.' },
                      { bold: 'Real-Time Impact Metrics:', rest: 'Live analytics dashboard for enterprise and ESG reporting.' },
                    ].map((item) => (
                      <motion.div
                        key={item.bold}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-start gap-3 transition-transform"
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold"
                          style={{ background: `${COPPER}22`, color: COPPER }}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <p className="text-sm sm:text-base text-text-base/90 leading-snug">
                          <strong className="text-forest font-semibold">{item.bold}</strong> {item.rest}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="relative w-48 h-48 sm:w-60 sm:h-60 flex items-center justify-center shrink-0">
                    <div
                      className="absolute inset-0 rounded-full border-4 border-dashed animate-spin"
                      style={{ borderColor: `${COPPER}55`, animationDuration: '18s' }}
                    />
                    <Recycle className="w-36 h-36 sm:w-44 sm:h-44 text-green-primary opacity-15 absolute" />
                    <motion.img
                      animate={{ y: [0, -6, 0] }}
                      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                      src={recycleImageGraphic}
                      alt="Recycle Illustration"
                      className="w-32 h-32 sm:w-40 sm:h-40 object-contain z-10 drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="lg:col-span-6 space-y-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Recycle className="w-5 h-5 text-green-primary" />
                  <h3 className="font-bold text-forest text-lg">The Complete Circular Loop</h3>
                </div>

                {[
                  { icon: Recycle, title: '1. Convenient Deposit', desc: 'Users place empty plastic bottles into the Embotics smart RVM kiosk.' },
                  { icon: Camera, title: '2. Computer Vision Scan', desc: 'AI sensors verify weight, shape, and plastic grade in under 2 seconds.' },
                  { icon: Coins, title: '3. Instant Reward Payout', desc: "Eco-coins or discount vouchers are credited directly to the user's mobile app." },
                  { icon: RefreshCw, title: '4. Direct Recycling Integration', desc: 'Baled materials are routed directly to certified recyclers for high-value reuse.' },
                ].map((step) => (
                  <motion.div
                    key={step.title}
                    variants={fadeUp}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 bg-forest/[0.03] p-5 rounded-2xl border border-forest/10 transition-all cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl text-white flex items-center justify-center shrink-0 shadow-sm bg-green-primary">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest text-base">{step.title}</h4>
                      <p className="text-forest/60 text-sm mt-0.5">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 6. MEASURABLE ENVIRONMENTAL IMPACT */}
        <section className="py-8 max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            className="bg-gradient-to-b from-white via-emerald-50 to-white rounded-3xl p-8 sm:p-12 border border-forest/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow"
          >
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wider uppercase mb-3">
                Measurable Impact
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest tracking-tight">
                Real Environmental Transformation
              </h2>
              <p className="mt-3 text-text-base/80 text-base sm:text-lg">
                Our data-driven platform measures every single bottle collected to deliver
                transparent, verifiable ESG statistics.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  icon: Leaf,
                  value: 150,
                  suffix: ' kg CO₂',
                  label: 'Diverted Per Machine Daily',
                  text: 'Equivalent to removing dozens of traditional vehicle trips from the road each month by cutting down landfill transport and virgin resin creation.',
                },
                {
                  icon: Sprout,
                  value: 40,
                  suffix: '+',
                  label: 'Green Jobs Supported',
                  text: 'Empowering waste collectors, logistics workers, and local maintainers through a fair, transparent digital circular economy.',
                },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  whileHover={{ y: -6 }}
                  className="relative bg-white p-8 sm:p-10 rounded-3xl text-center shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-forest/10 transition-all cursor-default"
                >
                  <span
                    className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
                    style={{ background: `linear-gradient(90deg, transparent, ${COPPER}, transparent)` }}
                  />
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${COPPER}16` }}
                  >
                    <stat.icon className="w-7 h-7" style={{ color: COPPER }} />
                  </div>
                  <h3 className="font-heading text-4xl font-extrabold text-forest tracking-tight">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-green-primary font-bold text-sm sm:text-base mt-2">{stat.label}</p>
                  <p className="text-forest/700 text-xs sm:text-sm mt-3 leading-relaxed">{stat.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* 7. CLOSING CTA */}
        <section className="py-10 sm:py-16 relative z-10">
          <div className="max-w-4xl mx-4 sm:mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[32px] sm:rounded-[999px] border border-green-primary/30 bg-emerald-50/60 px-6 py-14 sm:py-19 text-center"
            >
              <Leaf
                className="hidden sm:block absolute top-8 right-[5.75rem] w-8 h-8 text-emerald-300"
                strokeWidth={1.5}
                aria-hidden
              />
              <Sparkles
                className="hidden sm:block absolute bottom-[3.25rem] left-24 w-6 h-6 text-emerald-300"
                strokeWidth={1.5}
                aria-hidden
              />

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-forest">
                Want to build the future with us?
              </h2>
              <p className="mt-4 text-text-base/70 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                We're always open to partnerships, pilot projects, and conversations about how our
                technology can create impact.
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
    </div>
  );
};

export default Sustainability;
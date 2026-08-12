import { motion } from 'framer-motion';
import {
  ArrowRight,
  Gift,
  ShieldCheck,
  Leaf,
  BarChart3,
  Users,
  Send,
  BottleWineIcon,
  RecycleIcon,
  TouchpadIcon,
  BrainCircuit,
  GiftIcon,
  Box,
  Wifi,
} from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import productImage from '../assets/product.png';
import insertBottleImg from '../assets/insert-bottle.png';
import sortingRecyclingImg from '../assets/sorting-recycling.png';
import instantRewardImg from '../assets/instant-reward.png';
import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { submitForm } from '../lib/submitForm';

// ---------------- RVM PRODUCT PAGE ----------------
const FlipImageCard = ({ src, alt }: { src: string; alt: string }) => {
  const [flipped, setFlipped] = useState(false);

  // Auto-flip on devices that can't hover (touch/mobile), since a hover
  // event never fires there. Desktop keeps the hover-to-flip behavior and
  // this timer just doesn't run for it.
  useEffect(() => {
    const mq = window.matchMedia('(hover: none)');
    if (!mq.matches) return;

    const interval = setInterval(() => {
      setFlipped((v) => !v);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="relative w-full lg:max-w-[440px] lg:mx-auto rounded-2xl overflow-hidden"
      style={{ perspective: 1200 }}
    >
      {/* Invisible spacer — sets the box's height to match the image's
          own aspect ratio at 100% width. This is what removes the
          left/right (and top/bottom) letterbox gap: the box is now
          exactly the image's shape, so object-contain has no leftover
          space to center the image within. */}
      <img src={src} alt="" aria-hidden="true" className="w-full h-auto invisible" />

      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 h-full w-full"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img src={src} alt={alt} className="h-full w-full object-contain" />
        </div>

        {/* Back face — same image, pre-flipped so it reads correctly */}
        <div
          className="absolute inset-0 h-full w-full"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <img src={src} alt={alt} className="h-full w-full object-contain" />
        </div>
      </motion.div>
    </div>
  );
};

// Small pill / capsule badge — icon in a circle + uppercase label
const SectionBadge = ({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200"
  >
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-sm">
      <Icon className="w-3.5 h-3.5 text-emerald-600" />
    </span>
    <span className="uppercase tracking-[2px] text-emerald-700 font-semibold font-mono text-xs">
      {label}
    </span>
  </motion.div>
);

const RvmProduct = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Used by the "Request a Demo" form below (interest + message fields).
  const handleDemoSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);
    setSubmitted(false);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      phone: formData.get('phone') as string,
      interest: formData.get('interest') as string,
      message: formData.get('message') as string,
      type: 'contact' as const,
    };

    const result = await submitForm(data);
    if (result.success) {
      setSubmitted(true);
      setErrorMessage(null);
      form.reset();
    } else {
      setSubmitted(false);
      setErrorMessage(typeof result.error === 'string' ? result.error : String(result.error));
    }
    setSubmitting(false);
  };

  return (
    <div>
      {/* 1. Product Hero */}
      {/* CHANGED: py-20 -> py-10 sm:py-14 lg:py-20 so the section itself
          has less top/bottom padding on small screens. */}
      <section className="bg-white py-10 sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch">
          {/* Left: Image — slides in from the LEFT when this section enters view */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full lg:w-1/2"
          >
            <FlipImageCard src={productImage} alt="Embotics reverse vending machine" />
            <div className="absolute -inset-4 bg-green-primary/5 blur-9xl  -z-10" />
          </motion.div>

          {/* Right: Content — slides in from the RIGHT when this section enters view */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="w-full lg:w-1/2 "
          >
            <SectionBadge icon={RecycleIcon} label="Reverse Vending Machine" />
            <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-bold text-black/90 leading-tight">
              AI‑Powered Recycling and
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700"> Reward System </span>
            </h1>
            <p className="mt-6 text-text-base/90 text-lg leading-relaxed ">
              The Embotics Reverse Vending Machine is a smart recycling solution
              that collects PET plastic bottles and rewards users instantly
              through secure digital payments. By making recycling simple,
              automated, and rewarding, it encourages sustainable habits
              while helping organizations reduce plastic waste. Designed
              for educational institutions, shopping malls, corporate campuses
              and public spaces, Embotics supports a cleaner environment and a
              more sustainable future.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="primary" className="gap-2">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="outline" className="gap-2">
                  How it works <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-white via-emerald-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[4px] text-emerald-600 font-semibold font-mono">
              Simple Process
            </span>
            <h2 className="mt-3 font-heading text-4xl sm:text-5xl font-bold text-forest">
              How It Works
            </h2>
            <div className="mt-4 mx-auto w-24 h-px bg-green-primary/60 relative">
              <span className="absolute left-1/2 -translate-x-1/2 -top-1 w-2.5 h-2.5 rounded-full bg-green-primary" />
            </div>
          </motion.div>

          <div className="mt-14 relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-lg">
            {[
              {
                icon: BottleWineIcon,
                image: insertBottleImg,
                step: '1',
                title: 'Insert Bottle',
                description:
                  'Deposit your empty bottle into the machine. The AI camera instantly identifies and verifies the item.',
                badge: 'Day 1',
              },
              {
                icon: RecycleIcon,
                image: sortingRecyclingImg,
                step: '2',
                title: 'Sorting & Recycling',
                description:
                  'Our smart AI system sorts and separates recyclable materials with precision and efficiency.',
                badge: 'Day 2',
              },
              {
                icon: Gift,
                image: instantRewardImg,
                step: '3',
                title: 'Instant Reward',
                description:
                  'A reward is generated for your successful deposit, which you can redeem instantly in the app.',
                badge: 'Day 3',
              },
            ].map((item, idx) => (
              <div key={item.title} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border-green-primary/30 border"
                >
                  {/* Icon badge */}
                  <div className="w-16 h-16 rounded-full bg-green-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-green-primary" />
                  </div>

                  {/* Step label */}
                  <p className="text-green-primary text-xs font-bold tracking-widest uppercase mb-2">
                    • Step {item.step} •
                  </p>

                  {/* Title */}
                  <h3 className="text-forest font-extrabold text-2xl mb-6">
                    {item.title}
                  </h3>

                  {/* Illustration */}
                  <div className="relative w-full aspect-square max-w-[260px] mx-auto mb-6 rounded-full bg-green-primary/5 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-text-base/90 text-[17px] leading-6 mb-6">
                    {item.description}
                  </p>
                </motion.div>

                {/* Connector arrow (desktop only, not after last card) */}
                {idx < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-green-primary items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Feature Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="uppercase tracking-[4px] text-emerald-600 font-semibold font-mono">
              Technical Specs
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
              Built for High‑Traffic Environments
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TouchpadIcon, title: 'Touchscreen Interface', desc: '7" capacitive touchscreen with intuitive UI for easy navigation.' },
              { icon: BrainCircuit, title: 'AI-Powered Recognition', desc: 'Computer vision-based plastic bottle recognition and sorting for accurate recycling.' },
              { icon: Box, title: 'Plastic Shredder', desc: 'Industrial-grade shredder for efficient plastic shredding and converting waste into recyclable materials.' },
              { icon: TouchpadIcon, title: 'Advertising Display', desc: '42" LCD display for advertisements, promotions, and user engagement.' },
              { icon: GiftIcon, title: 'E-Banking Integration', desc: 'Instant withdrawal options for user rewards. Rewards can also be donated to NGOs and Trusts.' },
              { icon: Wifi, title: 'IoT Monitoring', desc: '24/7 cloud connectivity for real-time analytics and remote monitoring.' },
              { icon: ShieldCheck, title: 'Storage Capacity', desc: 'Stores up to 2500+ empty bottles before requiring emptying, reducing maintenance frequency.' },
              { icon: Box, title: 'Compact & Durable Design', desc: '42" × 42" × 72" compact design with industrial-grade durability for high-traffic environments.' },
            ].map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.17,
                  duration: 0.9,
                  type: 'spring',
                  stiffness: 220,
                  damping: 20,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                  y: -14,
                  boxShadow: '0 25px 50px -12px rgba(6,78,59,0.35)',
                  zIndex: 20,
                  transition: { type: 'spring', stiffness: 300, damping: 18 },
                }}
                className="group relative bg-white rounded-2xl p-6 border border-sage-light shadow-md cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-green-primary/10 flex items-center justify-center mb-5 group-hover:bg-green-primary transition-all duration-300">
                  <feat.icon className="w-7 h-7 text-green-primary group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-bold text-lg text-forest mb-3 group-hover:text-green-primary transition-colors duration-300">
                  {feat.title}
                </h3>

                <p className="text-text-base/90 text-sm leading-8">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits */}
      <section className="py-20 bg-gradient-to-b from-white via-emerald-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="uppercase tracking-[4px] text-emerald-600 font-semibold font-mono">
              Why Choose Embotics RVM
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
              Benefits for All Stakeholders
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Environmental',
                points: [
                  'Boosts recycling rates by making recycling easy',
                  'Reduces landfill & ocean plastic',
                  'Lowers carbon footprint through circular economy',
                ],
              },
              {
                icon: BarChart3,
                title: 'Economic',
                points: [
                  'New revenue from recycled materials',
                  'Sponsorship & advertising screen slots',
                  'ESG compliance & tax incentives',
                ],
              },
              {
                icon: Users,
                title: 'User Experience',
                points: [
                  'Instant rewards via e-bank',
                  'Making recycling fun and engaging',
                  'Supports social impact through donations to NGOs',
                ],
              },
            ].map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 1, y: 0 }}
                animate={{
                  y: [0, -10, 0, 8, 0],
                  x: [0, 6, 0, -6, 0],
                }}
                transition={{
                  duration: 6 + idx,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                  delay: idx * 0.5,
                }}
                className="bg-white rounded-2xl p-6 border border-green-primary/40 shadow-xl transition-shadow duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-green-primary" />
                </div>
                <h3 className="font-semibold text-forest text-xl mb-3">
                  {benefit.title}
                </h3>
                <ul className="space-y-5 text-text-base/90 text-md">
                  {benefit.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-green-primary font-bold">•</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Demo Request Form */}
      <section className="py-20 bg-gradient-to-b from-white via-emerald-50 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="uppercase tracking-[4px] text-emerald-600 font-semibold font-mono">
              Get Hands‑On
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
              Request a Demo
            </h2>
            <p className="mt-4 text-text-base/90 text-md">
              See the Embotics RVM in action. We'll tailor a live demo to your deployment scenario.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white  border border-green-primary/20 rounded-2xl p-6 sm:p-8  shadow-lg"
          >

            <form onSubmit={handleDemoSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-forest font-medium text-sm mb-1">Full name *</label>
                  <input
                    name="name"
                    type="text"
                    className="w-full border  border-green-primary/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-forest font-medium text-sm mb-1">Email *</label>
                  <input
                    name="email"
                    type="email"
                    className="w-full border  border-green-primary/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-forest font-medium text-sm mb-1">Company</label>
                  <input
                    name="company"
                    type="text"
                    className="w-full border  border-green-primary/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-forest font-medium text-sm mb-1">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full border  border-green-primary/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors"
                    placeholder="+92 308 87338 3"
                  />
                </div>
              </div>
              <div>
                <label className="block text-forest font-medium text-sm mb-1">Interest *</label>
                <select
                  name="interest"
                  className="w-full border border-green-primary/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors bg-white"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="rvm-demo">RVM Demo</option>
                  <option value="engineering-services">Engineering Services</option>
                  <option value="partnership">Partnership / Investment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-forest font-medium text-sm mb-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full border  border-green-primary/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors"
                  placeholder="Tell us about your project or enquiry..."
                />
              </div>
              <Button type="submit" variant="primary" className="w-full gap-2" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Demo Request'} <Send className="w-4 h-4" />
              </Button>
              {submitted && (
                <p className="text-green-primary text-sm text-center mt-2">
                  Thank you! We'll get back to you within one business day.
                </p>
              )}
              {errorMessage && (
                <p className="text-red-600 text-sm text-center mt-2">{errorMessage}</p>
              )}
              <p className="text-xs text-text-base/50 text-center mt-2">
                <ShieldCheck className="inline w-3 h-3 mr-1" />
                We respect your privacy and never share your data.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RvmProduct;
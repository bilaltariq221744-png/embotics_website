import { motion } from 'framer-motion';
import {
  ArrowRight,
  Gift,
  ShieldCheck,
  Leaf,
  BarChart3,
  Users,
  Mail,
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

// ---------------- RVM PRODUCT PAGE ----------------
const RvmProduct = () => {
  return (
    <div>
      {/* 1. Product Hero */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full lg:w-1/2"
          >
            <div className="h-full bg-sage-light rounded-3xl border border-green-primary/10 overflow-hidden shadow-sm">
              <img
                src={productImage}
                alt="Embotics reverse vending machine"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="absolute -inset-4 bg-green-primary/5 blur-3xl rounded-full -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-green-primary font-semibold uppercase tracking-widest text-sm">
              Reverse Vending Machine
            </span>
            <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-bold text-forest leading-tight">
              AI‑Powered Recycling and Reward System
            </h1>
            <p className="mt-6 text-text-base/80 text-lg leading-relaxed">
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
      <section id="how-it-works" className="py-20 bg-sage-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-green-primary font-semibold uppercase tracking-widest text-sm">
              Simple Process
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
              How It Works
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BottleWineIcon,
                step: '1',
                title: 'Insert Bottle',
                description:
                  'Users insert empty bottles into the machine. The AI camera instantly scans the item.',
              },
              {
                icon: RecycleIcon,
                step: '2',
                title: 'Sorting & Recycling',
                description:
                  'On‑device computer vision identifies material type, sorts and recycle accordingly.',
              },
              {
                icon: Gift,
                step: '3',
                title: 'Instant Reward',
                description:
                  'QR-code generated for each successful transaction. Users recieve instant reward by scanning the QR code with their mobile device.',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-sage-light shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-green-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-green-primary" />
                </div>
                <h3 className="text-forest font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-text-base/70 text-sm">{item.description}</p>
                <span className="inline-block mt-4 text-xs font-bold text-green-primary bg-green-primary/10 px-3 py-1 rounded-full">
                  Step {item.step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Feature Highlights */}
      <section className="py-20 bg-sage-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-primary font-semibold uppercase tracking-widest text-sm">
              Technical Specs
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
              Built for High‑Traffic Environments
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TouchpadIcon,
                title: 'Touchscreen Interface',
                desc: '7" capacitive touchscreen with intuitive UI for easy navigation.',
              },
              {
                icon: BrainCircuit,
                title: 'AI‑Powered Recognition',
                desc: 'Computer vision base plastic bottle recognition and sorting for accurate recycling.',
              },
              {
                icon: Box,
                title: 'Plastic Shredder',
                desc: 'Inndustrial-grade shredder for efficient plastic shredding for converting plastic waste into recyclable materials.',
              },
              {
                icon: TouchpadIcon,
                title: 'Advertising Display',
                desc: '42" LCD display for advertisements, promotions, and user engagement.',
              },
              {
                icon: GiftIcon,
                title: 'E-Banking Integration',
                desc: 'Instant withdrawal options for user rewards.User rewards can be donated to NGOs and Trusts for social impact.',
              },

              {
                icon: Wifi,
                title: 'IoT Monitoring',
                desc: '24/7 cloud connectivity for real-time data analytics and remote monitoring.',
              },
              {
                icon: ShieldCheck,
                title: 'Storage Capacity',
                desc: 'Stores up to 2500+ empty bottles before requiring emptying, reducing maintenance frequency.',
              },
              {
                icon: Box,
                title: 'Compact & Durable Design',
                desc: '42" x 42" x 72" compact design with industrial-grade durability for high-traffic environments.',
              },
            ].map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-sage-light shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-green-primary/10 flex items-center justify-center mb-4">
                  <feat.icon className="w-6 h-6 text-green-primary" />
                </div>
                <h3 className="font-semibold text-forest">{feat.title}</h3>
                <p className="mt-2 text-text-base/70 text-sm">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-primary font-semibold uppercase tracking-widest text-sm">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-sage-light rounded-2xl p-6 border border-green-primary/10"
              >
                <div className="w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-green-primary" />
                </div>
                <h3 className="font-semibold text-forest text-lg mb-3">{benefit.title}</h3>
                <ul className="space-y-2 text-text-base/70 text-sm">
                  {benefit.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-green-primary font-bold">•</span> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Demo Request Form */}
      <section className="py-20 bg-sage-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-green-primary font-semibold uppercase tracking-widest text-sm">
              Get Hands‑On
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
              Request a Demo
            </h2>
            <p className="mt-4 text-text-base/70">
              See the Embotics RVM in action. We’ll tailor a live demo to your deployment scenario.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-sage-light shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-forest font-medium text-sm mb-1">Full name *</label>
                <input
                  type="text"
                  className="w-full border border-sage-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-forest font-medium text-sm mb-1">Email *</label>
                <input
                  type="email"
                  className="w-full border border-sage-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors"
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div>
                <label className="block text-forest font-medium text-sm mb-1">Company</label>
                <input
                  type="text"
                  className="w-full border border-sage-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="block text-forest font-medium text-sm mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full border border-sage-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors"
                  placeholder="+91 0000000000"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-forest font-medium text-sm mb-1">Message</label>
              <textarea
                rows={3}
                className="w-full border border-sage-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors"
                placeholder="Tell us about your deployment needs..."
              />
            </div>
            <Button type="submit" variant="primary" className="w-full gap-2">
              Submit Demo Request <Mail className="w-4 h-4" />
            </Button>
            <p className="text-xs text-text-base/50 mt-3 text-center">
              We respect your privacy and will never share your data.
            </p>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default RvmProduct;
import { motion } from 'framer-motion';
import {
  Leaf,
  Recycle,
  Wind,
  RefreshCcw,
  BarChart3,
  Users2Icon,
  Mail,
} from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Sustainability = () => {
  return (
    <div className="bg-white">

      {/* 1. HERO */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-green-primary font-semibold uppercase tracking-widest text-sm">
              Embotics Sustainability
            </span>

            <h1 className="mt-5 font-heading text-4xl sm:text-5xl font-bold text-forest leading-tight">
              Turning Plastic Waste Into Measurable Value
            </h1>

            <p className="mt-6 text-text-base/80 text-lg max-w-2xl mx-auto">
              Embotics is building a smart circular recycling ecosystem powered by AI-driven Reverse
              Vending Machines that reward users instantly and reduce plastic pollution at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM */}
      <section className="py-20 bg-sage-light">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-primary font-semibold uppercase text-sm tracking-widest">
              The Problem
            </span>

            <h2 className="mt-3 font-heading text-3xl font-bold text-forest">
              Plastic waste has no return value today
            </h2>

            <p className="mt-4 text-text-base/80">
              Pakistan consume over 8 billion plastic bottles annually, with only a small fraction being recycled.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-text-base/70">
              <li>• Recycling rate of pakistan is less than 10%</li>
              <li>• 8 billion number is increasing with growth rate of 10-12% annually</li>
              <li>• Lack of real-time tracking and data analytics</li>
            </ul>
          </motion.div>

          <div className="bg-white p-8 rounded-3xl border border-sage-light shadow-sm">
            <RefreshCcw className="w-10 h-10 text-green-primary mb-4" />
            <h3 className="font-heading text-xl font-bold text-forest">
              Current Recycling system 
            </h3>
            <p className="mt-3 text-text-base/70 text-sm">
              Take → Use → Throw → Long process to recycle or Waste ends up in landfill or ocean. 
              <br /><br />
               <li> Time consuming</li>
               <li> Labour intensive</li>
               <li> Manual and unhygienic</li>
              This system is not enough to solve the plastic waste problem.
            </p>
          </div>

        </div>
      </section>

      {/* 3. SOLUTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-primary font-semibold uppercase text-sm tracking-widest">
              Our Solution
            </span>

            <h2 className="mt-3 font-heading text-3xl font-bold text-forest">
              AI-powered Reverse Vending Ecosystem
            </h2>

            <p className="mt-4 text-text-base/80">
              Embotics machines detect, validate, and recycle plastic bottles instantly and reward users digitally.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-text-base/70">
              <li>• Insert bottle → AI validation → Recycle </li>
              <li>• Instant reward via QR / wallet</li>
              <li>• Clean material sent to recyclers</li>
              <li>• Data synced to cloud dashboard</li>
            </ul>
          </motion.div>

          <div className="bg-sage-light p-8 rounded-3xl border border-green-primary/10">
            <Recycle className="w-10 h-10 text-green-primary mb-4" />
            <h3 className="font-heading text-xl font-bold text-forest">
              Circular Loop System
            </h3>

            <div className="mt-5 space-y-4 text-sm text-text-base/70">
              <p>1. Consumer returns bottle</p>
              <p>2. Machine verifies & accepts</p>
              <p>3. Reward is issued instantly</p>
              <p>4. Bottle becomes reusable resource</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. IMPACT */}
      <section className="py-20 bg-sage-light">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="font-heading text-3xl font-bold text-forest">
            Measurable Environmental Impact
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            {[
              {
                icon: Wind,
                value: '72kg',
                label: 'CO₂ Reduced',
              },
              {
                icon: Users2Icon,
                value: '1300+',
                label: 'Community Engagements',
              },
              {
                icon: Leaf,
                value: '2000+',
                label: 'Bottles Recycled',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-green-primary/10"
              >
                <item.icon className="w-10 h-10 text-green-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-primary">{item.value}</h3>
                <p className="text-text-base/70 text-sm mt-2">{item.label}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* 5. DATA + INTELLIGENCE */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-primary text-sm font-semibold uppercase tracking-widest">
              Smart Data Layer
            </span>

            <h2 className="mt-3 font-heading text-3xl font-bold text-forest">
              Every bottle becomes a data point
            </h2>

            <p className="mt-4 text-text-base/80">
              Embotics doesn’t just recycle waste. It generates intelligence for cities and organizations.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-text-base/70">
              <li>• Recycling behavior analytics</li>
              <li>• ESG reporting dashboards</li>
              <li>• Carbon tracking system</li>
              <li>• Smart city integration</li>
            </ul>
          </motion.div>

          <div className="bg-sage-light p-8 rounded-3xl border border-sage-light">
            <BarChart3 className="w-10 h-10 text-green-primary mb-4" />
            <h3 className="font-heading text-xl font-bold text-forest">
              Real-time Sustainability Dashboard
            </h3>
            <p className="mt-3 text-text-base/70 text-sm">
              Track environmental impact, user engagement, and recycling efficiency across all deployed machines.
            </p>
          </div>

        </div>
      </section>

      {/* 6. SDG */}
      <section className="py-20 bg-sage-light">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="font-heading text-3xl font-bold text-forest">
            Aligned with Global SDGs
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              { t: 'SDG 12', d: 'Responsible Consumption' },
              { t: 'SDG 13', d: 'Climate Action' },
              { t: 'SDG 11', d: 'Sustainable Cities' },
              { t: 'SDG 9', d: 'Innovation & Infrastructure' },
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-green-primary/10">
                <h3 className="text-green-primary font-bold text-lg">{s.t}</h3>
                <p className="text-sm text-text-base/70 mt-2">{s.d}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-24 bg-forest text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-green-primary/10 blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4">

          <h2 className="text-white font-heading text-3xl sm:text-4xl font-bold">
            Ready to build a circular future?
          </h2>

          <p className="mt-4 text-white/80">
            Partner with ReBottle and turn plastic waste into measurable environmental impact.
          </p>

          <div className="mt-10">
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-forest gap-2"
              >
                Get in Touch <Mail className="w-4 h-4" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Sustainability;
import { motion } from 'framer-motion';
import { ArrowRight, Recycle, Monitor, ShieldCheck, Wallet, Wifi } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import productImage from '../../assets/product.png';

const features = [
  {
    icon: Recycle,
    title: 'Multi-colour recognition',
    description: 'Accepts PET Bottles with 99.2% accuracy and recycles them into high-quality rPET for new products.',
  },
  {
    icon: Wallet,
    title: 'E-wallet integration',
    description: 'Supports instant digital rewards and loyalty programs for users.',
  },
  {
    icon: Monitor,
    title: 'Advertising Screen Integration',
    description: '42 inch high-definition screen for dynamic advertising and user engagement.',
  },
  {
    icon: Wifi,
    title: '24/7 Connectivity',
    description: '24/7 cloud connectivity for real-time data analytics and remote monitoring.',
  },
  {
    icon: ShieldCheck,
    title: 'Industrial-grade durability',
    description: 'Built for 24/7 operation in high-traffic environments.',
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <div className="h-full bg-sage-light rounded-3xl border border-green-primary/10 overflow-hidden shadow-sm">
              <img
                src={productImage}
                alt="Embotics reverse vending machine"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-green-primary/5 blur-3xl rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <span className="text-green-primary font-semibold uppercase tracking-widest text-sm">
              Product Overview
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest leading-tight">
              PET Recycling Reverse Vending Machine (RVM)
            </h2>
            <p className="mt-6 text-text-base/80 text-lg leading-relaxed">
              Our RVMs rewards users instantly for depositing empty PET bottles. Designed for public spaces, it drives user engagement and supports circular economy.
            </p>

            <div className="mt-8 space-y-5">
              {features.map((feat) => (
                <div key={feat.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-primary/10 flex items-center justify-center">
                    <feat.icon className="w-5 h-5 text-green-primary" />
                  </div>
                  <div>
                    <h4 className="text-forest font-semibold">{feat.title}</h4>
                    <p className="text-text-base/70 text-sm mt-1">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link to="/rvm">
                <Button variant="primary" className="gap-2">
                  Learn More About the RVM <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
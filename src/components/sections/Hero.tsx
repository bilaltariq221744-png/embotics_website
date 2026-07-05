import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center">
      {/* Subtle top-right gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-green-primary/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-green-primary/10 border border-green-primary/30 rounded-full px-4 py-1.5 text-green-primary text-sm font-medium mb-8"
          >
            <Leaf className="w-4 h-4" />
            Recycle Bottles. Earn Rewards. Save the Planet.
          </motion.div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-forest tracking-tight max-w-4xl mx-auto leading-tight">
            Turning Waste Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-primary to-accent-teal">
              Value
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-text-base/80 max-w-2xl mx-auto">
            Embotics builds an AI-powered Reverse Vending Machine that rewards users for recycling plastic bottles, helping businesses and communities achieve their sustainability goals while creating a profitable circular economy.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rvm">
              <Button variant="primary" className="gap-2">
                See How It Works <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-forest text-forest hover:bg-forest hover:text-white"
              >
                Request a Demo
              </Button>
            </Link>
          </div>

          {/* Impact stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { label: 'Bottles Recycled', value: '2000+' },
              { label: 'CO₂ Saved', value: '72 kg' },
              { label: 'Machines Deployed', value: '1' },
            ].map((stat) => (
              <div key={stat.label} className="text-forest">
                <div className="text-3xl font-heading font-bold text-green-primary">{stat.value}</div>
                <div className="text-sm uppercase tracking-wide mt-1 text-text-base/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
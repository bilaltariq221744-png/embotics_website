import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-full border border-green-primary/40 py-20 px-6 sm:px-12 overflow-hidden text-center">
          {/* Soft radial gradient for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-primary/25 via-transparent to-transparent opacity-70" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#064E3B] leading-tight">
              Ready to power the{' '}
              <span className="text-green-600">circular economy</span>?
            </h2>
            <p className="mt-4 text-green-primary/90 text-lg max-w-xl mx-auto">
              Deploy our AI&#8209;powered reverse vending machines or leverage our engineering
              services to build the next generation of sustainable technology.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/rvm">
                <Button variant="primary" className="gap-2">
                  Explore the RVM <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline"
                className="border-green-primary text-green-primary hover:bg-green/30 hover:text-forest/90 gap-2">
                  Get in Touch <Mail className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
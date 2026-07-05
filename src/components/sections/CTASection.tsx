import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative bg-forest py-20 overflow-hidden">
      {/* Soft radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-primary/20 via-transparent to-transparent opacity-60" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
            Ready to power the{' '}
            <span className="text-accent-teal">circular economy</span>?
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
            Deploy our AI‑powered reverse vending machines or leverage our engineering services to
            build the next generation of sustainable technology.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rvm">
              <Button variant="primary" className="gap-2">
                Explore the RVM <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-forest gap-2"
              >
                Get in Touch <Mail className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
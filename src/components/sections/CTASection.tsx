import { motion } from 'framer-motion';
import { Leaf, Sparkles, Mail } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-10 sm:py-16 relative z-10">
      <div className="max-w-4xl mx-4 sm:mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
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
  );
};

export default CTASection;
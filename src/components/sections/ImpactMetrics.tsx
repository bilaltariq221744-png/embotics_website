import { motion } from 'framer-motion';
import { Recycle, Wind, Building2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Metric {
  icon: React.ElementType;
  value: number;          // final number to count to
  suffix: string;         // like "M+", "K tons", etc.
  label: string;
  description: string;
}

const metrics: Metric[] = [
  {
    icon: Recycle,
    value: 2000,
    suffix: '+',
    label: 'Bottles Recycled',
    description: 'Over  2K containers Recycled.',
  },
  {
    icon: Wind,
    value: 72,
    suffix: 'Kg',
    label: 'CO₂ Saved',
    description: 'Equivalent to taking 5 cars off the road annually.',
  },
  {
    icon: Building2,
    value: 1,
    suffix: '',
    label: 'Machines Deployed',
    description: 'Activate in Educational Institutions,malls and other public spaces.',
  },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      setCurrent(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-heading font-bold text-green-primary">
      {current}
      {suffix}
    </div>
  );
};

const ImpactMetrics = () => {
  return (
    <section className="py-20 bg-sage-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-green-primary font-semibold uppercase tracking-widest text-sm">
            Environmental Impact
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
            Real Results, Real Change
          </h2>
          <p className="mt-4 text-text-base/70 max-w-2xl mx-auto">
            Every bottle returned through an Embotics machine contributes to a cleaner, 
            more profitable circular economy. Here’s what we’ve achieved so far.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-green-primary/5 flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center mb-4">
                <metric.icon className="w-6 h-6 text-green-primary" />
              </div>
              <AnimatedNumber target={metric.value} suffix={metric.suffix} />
              <div className="mt-2 font-semibold text-forest">{metric.label}</div>
              <p className="mt-2 text-xs text-text-base/60">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
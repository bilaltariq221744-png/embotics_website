import { motion } from 'framer-motion';
import { Cpu, BrainCircuit, Code, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Cpu,
    title: 'Embedded Systems',
    description: [
      'PCB Design',
      'Firmware development',
      'IoT development',
      'Rapid prototyping of embedded devices',
    ],
    link: '/engineering',
  },
  {
    icon: BrainCircuit,
    title: 'AI Solutions',
    description: [
      'Machine learning',
      'Computer vision',
      'AI automation',
      'Chatbots',
      'Agentic workflows ',
    ],
    link: '/engineering',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: [
      'web apps',
      'Mobile apps',
      'CRM & ERP systems',
      'SaaS platforms',
    ],
    link: '/engineering',
  },
  {
    icon: Box,
    title: 'CAD & 3D Prototyping',
    description: [
      'Mechanical design',
      'Enclosure prototyping',
      'DFM‑ready 3D models for manufacturing',
    ],
    link: '/engineering',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const EngineeringPreview = () => {
  return (
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
            Engineering Excellence
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
            Full‑Stack Hardware & Software Services
          </h2>
          <p className="mt-4 text-text-base/70 max-w-2xl mx-auto">
            From Idea to Implementation, we deliver end‑to‑end engineering services that bring
            industrial products to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              whileHover={{ y: -4 }}
              className="group bg-white border border-sage-light hover:border-green-primary/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-green-primary/10 flex items-center justify-center mb-4 group-hover:bg-green-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-green-primary" />
              </div>
              <h3 className="text-forest font-semibold text-lg mb-2">{service.title}</h3>
              <ul className="text-text-base/70 text-sm leading-relaxed mb-4 space-y-2 list-disc pl-5">
                {service.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                to={service.link}
                className="inline-flex items-center gap-1 text-green-primary font-medium text-sm hover:underline"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringPreview;
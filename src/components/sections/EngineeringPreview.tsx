import { motion } from 'framer-motion';
import { Cpu, BrainCircuit, Code, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

import embeddedImage from '../../assets/embedded-system.jpg';
import aiImage from '../../assets/ai-chip.jpg';
import softwareImage from '../../assets/software-dashboard.jpg';
import cadImage from '../../assets/cad-model.jpg';

const services = [
  {
    icon: Cpu,
    title: 'Embedded Systems',
    image: embeddedImage,
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
    image: aiImage,
    description: [
      'Machine learning',
      'Computer vision',
      'AI automation',
      'Chatbots',
      'Agentic workflows',
    ],
    link: '/engineering',
  },

  {
    icon: Code,
    title: 'Software Development',
    image: softwareImage,
    description: [
      'Web apps',
      'Mobile apps',
      'CRM & ERP systems',
      'SaaS platforms',
    ],
    link: '/engineering',
  },

  {
    icon: Box,
    title: 'CAD & 3D Prototyping',
    image: cadImage,
    description: [
      'Mechanical design',
      'Enclosure prototyping',
      'DFM-ready 3D models for manufacturing',
    ],
    link: '/engineering',
  },
];

const EngineeringPreview = () => {
  return (
    <section className="py-20 bg-sage-light overflow-hidden">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="uppercase tracking-[4px] text-emerald-600 font-semibold font-mono">
            Engineering Excellence
          </span>

          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
            Full-Stack Hardware & Software Services
          </h2>

          <p className="mt-4 text-text-base/90 max-w-2xl mx-auto text-lg">
            From Idea to Implementation, we deliver end-to-end engineering
            services that bring industrial products to life.
          </p>
        </motion.div>


        {/* SERVICES */}
        <div className="flex flex-col gap-8">

          {services.map((service, idx) => (

            <motion.div
              key={service.title}

              /* Card comes one by one */
              initial={{
                opacity: 0,
                x: idx % 2 === 0 ? -80 : 80,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                duration: 0.7,
                delay: idx * 0.15,
                ease: 'easeOut',
              }}

              viewport={{
                once: true,
                amount: 0.2,
              }}

              /* Small pop when hovering */
              whileHover={{
                y: -8,
                scale: 1.01,
              }}

              className="
                group
                relative
                bg-white
                rounded-[2rem]
                overflow-hidden
                border
                border-black/10
                shadow-[0_10px_30px_rgba(6,78,59,0.08)]
                hover:shadow-[0_20px_45px_rgba(6,78,59,0.15)]
                transition-shadow
                duration-300
              "
            >

              {/* GREEN TOP LINE */}

              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-1
                  bg-green-primary
                  scale-x-0
                  group-hover:scale-x-100
                  origin-left
                  transition-transform
                  duration-500
                  z-10
                "
              />


              {/* CARD */}

              <div className="grid grid-cols-1 md:grid-cols-2">


                {/* IMAGE */}

                <div className="relative h-64 md:h-full min-h-[320px] overflow-hidden">

                  {/* IMAGE */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      transition-transform
      duration-700
      
      group-hover:scale-105
    "
                  />

                  {/* LEFT → RIGHT FADE INTO TEXT */}
                  <div
                    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-transparent
      via-transparent
      to-white
    "
                  />

                  {/* EXTRA SOFT BLUR ON RIGHT EDGE */}
                  <div
                    className="
      absolute
      top-0
      right-0
      h-full
      w-32
      bg-gradient-to-r
      from-transparent
      to-white
      backdrop-blur-[2px]
    "
                  />

                  {/* ICON */}
                  <div
                    className="
      absolute
      top-5
      left-5
      w-12
      h-12
      rounded-xl
      bg-white/90
      backdrop-blur-sm
      flex
      items-center
      justify-center
      shadow-lg
    "
                  >
                    <service.icon className="w-6 h-6 text-green-primary" />
                  </div>

                </div>


                {/* CONTENT */}

                <div className="p-7 sm:p-9 flex flex-col justify-center">

                  <h3
                    className="
                      text-forest
                      font-bold
                      text-2xl
                      mb-4
                      group-hover:text-green-primary
                      transition-colors
                      duration-300
                    "
                  >
                    {service.title}
                  </h3>


                  {/* DESCRIPTION */}

                  <ul className="text-text-base/90 text-md leading-relaxed mb-6 space-y-3">

                    {service.description.map((item) => (

                      <li
                        key={item}
                        className="flex items-start gap-3"
                      >

                        <span
                          className="
                            mt-1.5
                            w-2
                            h-2
                            rounded-full
                            bg-green-primary
                            flex-shrink-0
                          "
                        />

                        <span>
                          {item}
                        </span>

                      </li>

                    ))}

                  </ul>


                  {/* LEARN MORE */}

                  <Link
                    to={service.link}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-green-primary
                      font-semibold
                      text-sm
                      w-fit
                      hover:gap-3
                      transition-all
                      duration-300
                    "
                  >
                    Learn more
                    <span>→</span>
                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default EngineeringPreview;
import { motion } from 'framer-motion';
import {
  Leaf,
  Target,
  Eye,
  ShieldCheck,
  Users,
  Mail,
} from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import abdullahImage from '../assets/abdullah.png';
import bilalImage from '../assets/bilal.png';
import faizanImage from '../assets/faizan.png';

const SocialIcon = ({ type, className = 'w-5 h-5' }: { type: 'facebook' | 'linkedin' | 'instagram'; className?: string }) => {
  const commonProps = { className, fill: 'currentColor', viewBox: '0 0 24 24' };

  switch (type) {
    case 'facebook':
      return (
        <svg {...commonProps} aria-hidden="true">
          <path d="M14 8h-3V6a1 1 0 0 1 1-1h2V2h-2.5A3.5 3.5 0 0 0 8 5.5V8H6v3h2v10h3V11h2.2l.3-3H11z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...commonProps} aria-hidden="true" viewBox="0 0 24 24">
          <path d="M6.94 8.5a1.56 1.56 0 1 0 0-3.12 1.56 1.56 0 0 0 0 3.12ZM5.5 9.5h2.88V18H5.5zM10.5 9.5h2.76v1.16h.04c.38-.72 1.32-1.48 2.72-1.48 2.91 0 3.45 1.91 3.45 4.4V18h-2.88v-7.55c0-1.8-.03-4.11-2.5-4.11-2.51 0-2.89 1.96-2.89 3.98V18H10.5z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...commonProps} aria-hidden="true">
          <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 2A2.5 2.5 0 0 0 5 7.5v9A2.5 2.5 0 0 0 7.5 19h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 16.5 5h-9Zm4.5 2.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.25-1.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
        </svg>
      );
  }
};

// ---------------- ABOUT US PAGE ----------------
const About = () => {
  return (
    <div>
      {/* 1. Page Hero */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-green-primary font-semibold uppercase tracking-widest text-sm">
              About Embotics
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-forest leading-tight">
              Engineering the Circular Economy
            </h1>
            <p className="mt-6 text-text-base/80 text-lg max-w-2xl mx-auto">
              We’re a green‑tech engineering company on a mission to make recycling intelligent,
              rewarding, and universally accessible. Founded by engineers, powered by AI, and
              driven by impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-sage-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-sage-light shadow-sm"
          >
            <div className="w-14 h-14 rounded-full bg-green-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-green-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-forest mb-3">Our Mission</h2>
            <p className="text-text-base/80 leading-relaxed">
              To deploy intelligent reverse vending infrastructure that transforms public spaces
              into recycling hubs, rewarding every citizen for participating in the circular
              economy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-sage-light shadow-sm"
          >
            <div className="w-14 h-14 rounded-full bg-green-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-green-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-forest mb-3">Our Vision</h2>
            <p className="text-text-base/80 leading-relaxed">
              A world where no recyclable container ends up in landfill or ocean. We envision
              cities where waste is just another resource stream, tracked and monetised through
              AI‑powered systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values */}
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
              What We Stand For
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
              Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Sustainability First',
                desc: 'Every decision we make is measured against its environmental and social impact. We build technology that heals the planet, not harms it.',
              },
              {
                icon: ShieldCheck,
                title: 'Engineering Integrity',
                desc: 'We ship reliable, industrial‑grade systems. No shortcuts, no hype—just robust hardware and clean software that performs in the real world.',
              },
              {
                icon: Users,
                title: 'People & Communities',
                desc: 'We design for the people who use our machines every day. Rewards should be instant, access should be universal, and data must be transparent.',
              },
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-sage-light rounded-2xl p-6 border border-green-primary/10 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-green-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-green-primary" />
                </div>
                <h3 className="font-semibold text-forest text-lg mb-2">{value.title}</h3>
                <p className="text-text-base/70 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team (NEW SECTION) */}
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
              Leadership
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
              Meet the Founders
            </h2>
            <p className="mt-4 text-text-base/70 max-w-xl mx-auto">
              Our co‑founders bring combined expertise in embedded systems, AI, Mechanical Engineering, and
              industrial design backed by a growing team of 12 engineers and researchers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Abdullah Zia Abbassi',
                role: 'CEO & Co‑Founder',
                image: abdullahImage,
                facebook: 'https://www.facebook.com/share/1AERQnd9hr/?mibextid=wwXIfr',
                linkedin: 'https://www.linkedin.com/in/abdullah-zia-abbasi-820500286?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
                instagram: 'https://www.instagram.com/mr._.abdullah_00?igsh=cWxjY2dxZDI2NDI5',
              },
              {
                name: 'Bilal Tariq',
                role: 'CTO & Co‑Founder',
                image: bilalImage,
                facebook: 'https://www.facebook.com/share/1BWuxy1TAL/?mibextid=wwXIfr',
                linkedin: 'https://www.linkedin.com/in/bilal-tariq-34215b318?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
                instagram: 'https://www.instagram.com/bilal__957?igsh=aXlmdm84ZmhkanQ2&utm_source=qr',                email: 'mailto:bilal@embotics.com',              },
              {
                name: 'Faizan Tahir',
                role: 'COO & Co‑Founder',
                image: faizanImage,
                facebook: 'https://www.instagram.com/oyeee_faizi?igsh=MXRsYjJhYmVsMGYx',
                linkedin: 'https://www.linkedin.com/in/mfaizantahir?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
                instagram: 'https://www.instagram.com/oyeee_faizi?igsh=MXRsYjJhYmVsMGYx',
              },
            ].map((founder, idx) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-sage-light shadow-sm text-center"
              >
                {/* Avatar: square shape (rounded-xl) */}
                {founder.image ? (
                  <div className="w-50 h-60 rounded-xl overflow-hidden mx-auto mb-4 border-2 border-green-primary/20 shadow-sm">
                    <img
                      src={founder.image}
                      alt={`${founder.name} headshot`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-50 h-60 rounded-xl bg-green-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-green-primary/20">
                    <Users className="w-10 h-10 text-green-primary" />
                  </div>
                )}

                <h3 className="font-heading font-bold text-forest text-xl">{founder.name}</h3>
                <p className="text-green-primary text-sm font-medium mt-1">{founder.role}</p>
                {/* Social links – professional & brand‑coloured */}
                <div className="flex justify-center gap-3 mt-5 flex-wrap">
                  <a
                    href={founder.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-forest/10 flex items-center justify-center text-forest/60 hover:text-[#1877F2] hover:border-[#1877F2]/30 hover:bg-[#1877F2]/5 transition-all duration-200 shadow-sm"
                    aria-label={`${founder.name} Facebook`}
                  >
                    <SocialIcon type="facebook" className="w-4 h-4" />
                  </a>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-forest/10 flex items-center justify-center text-forest/60 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/5 transition-all duration-200 shadow-sm"
                    aria-label={`${founder.name} LinkedIn`}
                  >
                    <SocialIcon type="linkedin" className="w-4 h-4" />
                  </a>
                  <a
                    href={founder.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-forest/10 flex items-center justify-center text-forest/60 hover:text-[#E4405F] hover:border-[#E4405F]/30 hover:bg-[#E4405F]/5 transition-all duration-200 shadow-sm"
                    aria-label={`${founder.name} Instagram`}
                  >
                    <SocialIcon type="instagram" className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-primary font-semibold uppercase tracking-widest text-sm">
              Our Story
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
              From Engineering Lab to Impact at Scale
            </h2>
          </motion.div>

          <div className="bg-sage-light rounded-3xl p-8 border border-green-primary/10 space-y-6 text-text-base/80">
            <p>
             Embotics began with three friends working together on freelance engineering projects. We were constantly building solutions for others. 
             Shipping ideas, solving problems, and moving on to the next task.
            </p>
            <p>
             One day, we paused and asked a simple question:
             Why are we always building for others, but never for something we truly believe in ourselves?
            </p>
            <p>
            That question turned into late night discussions, rough sketches and early prototypes. We didn’t start with a big plan. 
            Just a shared mindset that real world problems deserve better engineering solutions.
            </p>
            <p>
            Today, we’re a growing team of engineers and designers building intelligent reverse vending machines that is now deployed in our own university from where we started.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-primary/20 via-transparent to-transparent opacity-60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
              Want to build the future with us?
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
              We’re always open to partnerships, pilot projects, and conversations about how our
              technology can create impact.
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
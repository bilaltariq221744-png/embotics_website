import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowRight, Cpu, Zap, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/simple bottle.png';
import crushedBg from '../../assets/pressed-bottle.png';

// Main content animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Individual text animation
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="mt-[-115px] relative bg-emerald-50 px-4 sm:px-6 pb-16 sm:pb-24 pt-4 overflow-hidden">

      {/* HERO CONTAINER */}
      {/* min-h keeps the card a consistent height on mobile instead of
          growing with stacked content. This also happens to be why the
          flip looked glitchy on small screens before: the card's height
          used to change on every render/breakpoint, so the flip container
          (sized to 100%/100%) was an unstable target for the 3D rotation.
          A fixed min-height gives it a stable box to rotate inside. */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered((v) => !v)}
        role="button"
        tabIndex={0}
        aria-label="Tap to see the compacted bottle"
className="relative max-w-8xl mx-0 sm:mx-0 lg:mx-33 mt-30 min-h-[600px] sm:min-h-[640px] lg:min-h-[720px] rounded-[1.25rem] sm:rounded-[1.75rem] lg:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl cursor-pointer select-none"      >

        {/* ================= BACKGROUND IMAGE (CROSSFADE FLIP) ================= */}
        {/* Flip is active at every breakpoint now. Desktop triggers it on
            hover; phones/tablets don't have hover, so the whole card is
            also a tap target (onClick above) that toggles the same state. */}
        <div className="absolute inset-0 w-full h-full" style={{ perspective: '1800px' }}>

          {/* Base drifting wrapper - keeps your original ambient motion */}
          <motion.div
            initial={{ scale: 1.05, x: 0, y: 0 }}
            animate={{
              scale: [1.05, 1.1, 1.05],
              x: [0, -8, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Flip wrapper - rotates on hover (desktop) or tap (touch) */}
            <motion.div
              animate={{ rotateY: isHovered ? 180 : 0 }}
              transition={{
                duration: 0.8,
                ease: [0.45, 0, 0.15, 1] as [number, number, number, number],
              }}
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            >
              {/* FRONT FACE - simple bottle */}
              <img
                src={heroBg}
                alt="Embotics RVM Technology - Sorted Bottle"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95 contrast-170"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              />

              {/* BACK FACE - crushed/pressed bottle (pre-rotated 180deg so
                  it reads correctly once the flip completes). object-cover
                  fills the entire card edge-to-edge (matching the front
                  face), cropping the top/bottom of the photo as needed so
                  there's no visible green backdrop around it. */}
              <div
                className="absolute inset-0 w-full h-full bg-[#255B40] overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <img
                  src={crushedBg}
                  alt="Embotics RVM Technology - Compacted Bottle"
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-95 contrast-120"
                  style={{ objectPosition: '65% center' }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Soft crossfade veil to smooth out the flip's midpoint glare */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                key="flip-veil"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.35, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, times: [0, 0.5, 1] }}
                className="absolute inset-0 bg-emerald-50 pointer-events-none "
              />
            )}
          </AnimatePresence>
        </div>

        {/* ================= DARK OVERLAY ================= */}
        {/* Same colors as before — untouched. */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-r from-[#255B40] via-[#255B40]/60 to-[#255B40]/10 pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute inset-0 bg-gradient-to-t from-[#255B40]/10 via-transparent to-transparent pointer-events-none"
        />

        {/* ================= FLOATING GLOW ================= */}
        {/* Same colors, just scaled down on mobile so the blur doesn't
            wash out the whole card on a narrow screen. Sizing only. */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -left-10 w-40 h-40 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-emerald-500/20 rounded-full blur-2xl sm:blur-[90px] lg:blur-[120px] pointer-events-none"
        />

        {/* SECOND SUBTLE GLOW */}

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 right-0 w-32 h-32 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-teal-400/20 rounded-full blur-2xl sm:blur-[80px] lg:blur-[100px] pointer-events-none"
        />

        {/* ================= MAIN CONTENT ================= */}

        <div className="relative px-6 sm:px-12 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pointer-events-none">

          {/* ================= LEFT CONTENT ================= */}
          {/* pointer-events-none on the row above keeps the whole card
              tappable for the flip; pointer-events-auto here restores
              clicks on the actual buttons/links so they still work. */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 max-w-2xl min-w-0 pointer-events-auto"
          >

            {/* STATUS BADGE */}

            <motion.div
              variants={itemVariants}
              className="inline-block mb-6"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="inline-flex items-center gap-2.5 bg-emerald-950/80 border border-emerald-500/30 backdrop-blur-md rounded-full px-4 py-1.5 text-emerald-200 text-xs font-mono tracking-wide shadow-lg shadow-emerald-950/50"
              >
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                </span>

                <span>NEXT-GEN REVERSE VENDING HARDWARE</span>
              </motion.div>
            </motion.div>

            {/* ================= HEADLINE ================= */}
            {/* break-words: without this, a single long word like "MEASURABLE"
                has no space to wrap on, so on narrow phone screens it just
                overflows past the rounded card edge instead of wrapping to
                a new line — that was the clipped "MEASURA / VALUE." glitch. */}

            <motion.h1
              variants={itemVariants}
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] uppercase break-words"
            >
              Turning Plastic Waste Into{' '}

              <motion.span
                className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                Measurable Value.
              </motion.span>
            </motion.h1>

            {/* ================= DESCRIPTION ================= */}

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-slate-100 leading-relaxed max-w-xl"
            >
              Embotics builds heavy-duty Reverse Vending Machines (RVM) equipped with automated optical sorting, compact shredding, and real-time reward payout systems for modern cities.
            </motion.p>

            {/* ================= BUTTONS ================= */}
            {/* Same colors as your original — just unified padding/rounding
                so they sit evenly at every screen size. stopPropagation so
                tapping a button doesn't also trigger the card's flip. */}

            <motion.div
              variants={itemVariants}
              onClick={(e) => e.stopPropagation()}
              className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >

              <Link to="/rvm" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <Button
                    variant="ghost-light"
                    className="gap-2.5 w-full sm:w-auto justify-center inline-flex items-center px-7 py-3.5 bg-[#093729] hover:bg-emerald-200 text-white hover:text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all"
                  >
                    Explore Machine Specs
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>

              <Link to="/contact" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <Button
                    variant="ghost-light"
                    className="w-full sm:w-auto justify-center inline-flex items-center px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs tracking-wider rounded-xl backdrop-blur-md transition-all"
                  >
                    Request Commercial Demo
                  </Button>
                </motion.div>
              </Link>

            </motion.div>

            {/* ================= HARDWARE HIGHLIGHTS ================= */}

            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-4 font-mono text-xs text-slate-300"
            >
              <motion.div
                whileHover={{ y: -4, color: '#34d399' }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Optical AI Sort</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, color: '#34d399' }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>85% Compaction</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, color: '#34d399' }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>IP65 Armor</span>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="lg:col-span-5 hidden lg:block"
          >
            {/* Empty intentionally - keeping your original layout */}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
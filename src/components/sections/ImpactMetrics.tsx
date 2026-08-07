import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { Recycle, Wind, Building2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Metric {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  description: string;
  accent: string;
}

const metrics: Metric[] = [
  {
    icon: Recycle,
    value: 2000,
    suffix: "+",
    label: "Bottles Recycled",
    description: "Over 2K containers recycled.",
    accent: "recycle",
  },
  {
    icon: Wind,
    value: 72,
    suffix: "Kg",
    label: "CO₂ Saved",
    description: "Equivalent to taking 5 cars off the road annually.",
    accent: "wind",
  },
  {
    icon: Building2,
    value: 1,
    suffix: "",
    label: "Machines Deployed",
    description:
      "Active in educational institutions, malls and public spaces.",
    accent: "building",
  },
];

/* ================= DECORATIVE SVG ART PER CARD TYPE ================= */
/* `active` controls whether the loop is currently running - lets us restart it each time the card re-enters view */

const CardArt = ({ type, active }: { type: string; active: boolean }) => {
  if (type === "recycle") {
    return (
      <svg
        viewBox="0 0 200 200"
        className="absolute -right-6 -top-6 w-40 h-40 opacity-[0.09] pointer-events-none"
      >
        <motion.path
          d="M100 20 L140 60 L100 100 L60 60 Z"
          fill="none"
          stroke="#059669"
          strokeWidth="6"
          animate={active ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 20, repeat: active ? Infinity : 0, ease: "linear" }}
          style={{ transformOrigin: "100px 100px" }}
        />
        <motion.circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="#059669"
          strokeWidth="3"
          strokeDasharray="8 10"
          animate={active ? { rotate: -360 } : { rotate: 0 }}
          transition={{ duration: 30, repeat: active ? Infinity : 0, ease: "linear" }}
          style={{ transformOrigin: "100px 100px" }}
        />
      </svg>
    );
  }
  if (type === "wind") {
    return (
      <svg
        viewBox="0 0 200 200"
        className="absolute -right-4 -top-8 w-40 h-40 opacity-[0.09] pointer-events-none"
      >
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M20 ${60 + i * 30} Q 90 ${40 + i * 30} 160 ${60 + i * 30}`}
            fill="none"
            stroke="#059669"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              active
                ? { pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0], x: [0, 6, 6, 0] }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{
              duration: 3.5,
              repeat: active ? Infinity : 0,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 200 200"
      className="absolute -right-6 -top-6 w-40 h-40 opacity-[0.09] pointer-events-none"
    >
      <motion.g
        animate={active ? { y: [0, -6, 0] } : { y: 0 }}
        transition={{ duration: 4, repeat: active ? Infinity : 0, ease: "easeInOut" }}
      >
        <rect x="70" y="40" width="60" height="120" fill="none" stroke="#059669" strokeWidth="5" />
        {[55, 80, 105].map((rowY) => (
          <g key={rowY}>
            <motion.rect
              x="80"
              y={rowY}
              width="12"
              height="12"
              fill="#059669"
              animate={active ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.3 }}
              transition={{ duration: 2.5, repeat: active ? Infinity : 0, ease: "easeInOut" }}
            />
            <motion.rect
              x="100"
              y={rowY}
              width="12"
              height="12"
              fill="#059669"
              animate={active ? { opacity: [1, 0.3, 1] } : { opacity: 0.3 }}
              transition={{ duration: 2.5, repeat: active ? Infinity : 0, ease: "easeInOut" }}
            />
          </g>
        ))}
      </motion.g>
    </svg>
  );
};

/* ================= CORNER SPARKLES (every card) ================= */

const Sparkles = ({ active }: { active: boolean }) => (
  <>
    {[...Array(5)].map((_, i) => (
      <motion.span
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400/60 pointer-events-none"
        style={{
          left: `${18 + i * 16}%`,
          top: `${15 + (i % 2) * 60}%`,
        }}
        animate={
          active
            ? { y: [0, -14, 0], opacity: [0, 0.9, 0], scale: [0.6, 1, 0.6] }
            : { opacity: 0 }
        }
        transition={{
          duration: 3 + i * 0.3,
          repeat: active ? Infinity : 0,
          delay: i * 0.4,
          ease: "easeInOut",
        }}
      />
    ))}
  </>
);

/* ================= ANIMATED PROGRESS RING BEHIND ICON (uniform size) ================= */

const IconRing = ({ children, active }: { children: React.ReactNode; active: boolean }) => {
  const size = 80;
  const radius = size / 2 - 4;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative flex items-center justify-center mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="absolute inset-0 -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#d1fae5" strokeWidth="3" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#10b981"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={active ? { strokeDashoffset: circumference * 0.15 } : { strokeDashoffset: circumference }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </svg>
      <motion.div
        animate={active ? { y: [0, -3, 0] } : { y: 0 }}
        transition={{ duration: 3, repeat: active ? Infinity : 0, ease: "easeInOut" }}
        className="relative z-10 rounded-full bg-white flex items-center justify-center shadow-sm"
        style={{ width: size - 20, height: size - 20 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

/* ================= ANIMATED NUMBER ================= */

const AnimatedNumber = ({ target, suffix, play }: { target: number; suffix: string; play: boolean }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!play) {
      setCurrent(0);
      return;
    }
    let start = 0;
    const duration = 2000;
    const stepTime = Math.max(10, Math.floor(duration / target));
    const timer = setInterval(() => {
      start++;
      setCurrent(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [play, target]);

  return (
    <div className="font-bold text-emerald-600 text-5xl">
      {current}
      {suffix}
    </div>
  );
};

/* ================= METRIC CARD (all same size) ================= */

const MetricCard = ({ metric, index, featured = false }: { metric: Metric; index: number; featured?: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.4 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });
  const glowBg = useTransform([x, y], ([xv, yv]: number[]) =>
    `radial-gradient(circle at ${50 + xv * 60}% ${50 + yv * 60}%, rgba(16,185,129,0.18), transparent 60%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.94, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
      className="group relative h-full"
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-emerald-500 text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full shadow-md shadow-emerald-500/30">
          Leading metric
        </div>
      )}

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.98 }}
        className={`relative h-full flex flex-col items-center text-center p-8 pt-10 rounded-3xl cursor-pointer overflow-hidden transition-all duration-300 bg-gradient-to-b from-white to-emerald-50/50 shadow-lg hover:shadow-2xl border ${
          featured ? "border-emerald-300" : "border-emerald-100 hover:border-emerald-300"
        }`}
      >
        {/* subtle dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.4] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#10b98122 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        <CardArt type={metric.accent} active={isInView} />
        <Sparkles active={isInView} />

        {/* mouse-follow spotlight glow on every card */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: glowBg }}
        />

        {/* shine sweep, replays each time in view */}
        <motion.div
          initial={{ x: "-120%" }}
          animate={isInView ? { x: "220%" } : { x: "-120%" }}
          transition={{ delay: 0.4, duration: 1.1, ease: "easeInOut", repeat: isInView ? Infinity : 0, repeatDelay: 3 }}
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-emerald-100/70 to-transparent skew-x-12 pointer-events-none"
        />

        <div style={{ transform: "translateZ(30px)" }} className="relative flex flex-col items-center flex-1">
          <motion.div
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <IconRing active={isInView}>
              <metric.icon className="w-7 h-7 text-emerald-700 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
            </IconRing>
          </motion.div>

          <div className="mt-6">
            <AnimatedNumber target={metric.value} suffix={metric.suffix} play={isInView} />
          </div>

          <motion.div className="mt-3 h-[3px] w-16 mx-auto bg-emerald-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : { width: "0%" }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="h-full bg-emerald-500 rounded-full"
            />
          </motion.div>

          <h3 className="mt-4 text-xl font-bold text-slate-800">{metric.label}</h3>
          <p className="mt-3 text-slate-500 leading-7 flex-1">{metric.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ================= SECTION ================= */

const ImpactMetrics = () => {
  return (
    <section className="relative py-24 bg-emerald-50 overflow-hidden">
      {/* Ambient background glows for the whole section */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="uppercase tracking-[4px] text-emerald-600 font-semibold">
            Enviromental Impact
          </span>
          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Real Results, Real Change
          </h2>
          <p className="mt-6 text-slate-600 max-w-3xl mx-auto text-lg leading-8">
            Every bottle returned through an Embotics machine contributes
            to a cleaner, more profitable circular economy.
            Here's what we've achieved so far.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 items-stretch">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
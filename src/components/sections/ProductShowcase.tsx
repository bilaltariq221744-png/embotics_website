import { motion } from "framer-motion";
import {
  ArrowRight,
  Recycle,
  Monitor,
  ShieldCheck,
  Wallet,
  Wifi,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../ui/Button";
import productImage from "../../assets/product.png";

const features = [
  {
    icon: Recycle,
    title: "Multi-colour recognition",
    description:
      "Accepts PET Bottles with 99.2% accuracy and recycles them into high-quality rPET for new products.",
  },
  {
    icon: Wallet,
    title: "E-wallet integration",
    description:
      "Supports instant digital rewards and loyalty programs for users.",
  },
  {
    icon: Monitor,
    title: "Advertising Screen Integration",
    description:
      "42-inch high-definition screen for dynamic advertising and user engagement.",
  },
  {
    icon: Wifi,
    title: "24/7 Connectivity",
    description:
      "24/7 cloud connectivity for real-time data analytics and remote monitoring.",
  },
  {
    icon: ShieldCheck,
    title: "Industrial-grade durability",
    description:
      "Built for 24/7 operation in high-traffic environments.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ProductShowcase = () => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;

    setStyle({
      transform: `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(0.97)
      `,
      transition: "transform 0.05s linear",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.8s ease",
    });
  };

  return (
    <section className="py-20 bg-sage-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="overflow-hidden rounded-[2rem] border border-green-primary/10 shadow-[0_20px_50px_rgba(6,78,59,0.08)]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={productImage}
                alt="Embotics Reverse Vending Machine"
                className="w-full h-full object-cover"
                style={style}
              />
            </div>

            <div className="absolute -inset-5 bg-green-primary/5 blur-3xl rounded-full -z-10"></div>

            <div className="absolute top-5 left-5 bg-forest text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
              Live in Pakistan 🇵🇰
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[5px] text-emerald-400 font-semibold font-mono">
              Product Overview
            </span>

            <h2 className="mt-3 text-4xl font-bold text-forest leading-tight">
              PET Recycling Reverse Vending Machine (RVM)
            </h2>

            <p className="mt-6 text-lg text-text-base/80 leading-relaxed">
              Our RVM rewards users instantly for depositing empty PET bottles.
              Designed for public spaces, it encourages recycling while
              supporting a circular economy.
            </p>

            {/* Feature Cards */}
          {/* Feature Cards */}
<div className="mt-10 space-y-4">
  {features.map((feature, index) => (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.25, // <-- One after another
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-2xl border border-green-primary/15 bg-white p-5 shadow-sm hover:border-green-primary hover:shadow-xl transition-all duration-300"
    >
      {/* Animated Left Border */}
      <motion.div
        className="absolute left-0 top-0 h-full w-1 bg-green-primary"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.25 + 0.2,
          duration: 0.4,
        }}
        style={{ originY: 0 }}
      />

      <div className="flex gap-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.25 + 0.15,
            type: "spring",
            stiffness: 250,
          }}
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-primary/10 group-hover:bg-green-primary transition-colors duration-300"
        >
          <feature.icon className="h-6 w-6 text-green-primary group-hover:text-white transition-colors duration-300" />
        </motion.div>

        <div>
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.25 + 0.25,
              duration: 0.4,
            }}
            className="text-lg font-semibold text-forest"
          >
            {feature.title}
          </motion.h4>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.25 + 0.4,
              duration: 0.5,
            }}
            className="mt-2 text-sm leading-6 text-text-base/75"
          >
            {feature.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  ))}
</div>

            {/* Button */}
            <div className="mt-10">
              <Link to="/rvm">
                <Button variant="primary" className="gap-2">
                  Learn More About the RVM
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
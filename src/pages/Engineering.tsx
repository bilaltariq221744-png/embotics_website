import { motion } from 'framer-motion';
import {
  Cpu,
  CircuitBoard,
  Wifi,
  CpuIcon,
  BrainCircuit,
  Eye,
  MessageSquareText,
  Workflow,
  Code,
  MonitorSmartphone,
  Cloud,
  Box,
  Printer,
  Ruler,
  Mail,
} from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

// ---------------- ENGINEERING SERVICES PAGE ----------------
const Engineering = () => {
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
              Engineering Services
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-forest leading-tight">
              Full‑Stack Hardware & Software Engineering
            </h1>
            <p className="mt-6 text-text-base/80 text-lg max-w-2xl mx-auto">
              From embedded PCBs and industrial IoT to enterprise AI and cloud‑native SaaS,
              Embotics delivers end‑to‑end engineering that turns bold ideas into production‑ready
              products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Embedded Systems */}
      <section className="py-20 bg-sage-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-green-primary font-semibold uppercase tracking-widest text-sm">
              Embedded Systems
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
              PCB, IoT & Firmware Engineering
            </h2>
            <p className="mt-4 text-text-base/80">
              We design and deliver custom embedded hardware—from initial concept and schematic
              capture to prototyping, firmware development, and production testing. Our team
              specialises in low‑power IoT, sensor integration, and real‑time control systems.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                {
                  icon: CircuitBoard,
                  text: 'Multi‑layer PCB design & layout (Altium, KiCad)',
                },
                {
                  icon: Wifi,
                  text: 'Wireless connectivity: BLE, Wi‑Fi, LoRa, NB‑IoT',
                },
               {
                  icon: Cpu,
                  text: 'Communication protocols: UART, SPI, I2C, CAN, Modbus',
                },
                {
                  icon: CpuIcon,
                  text: 'Firmware development in C/C++, Rust, FreeRTOS, Zephyr',
                },
                {
                  icon: Cpu,
                  text: 'Prototyping, testing, and manufacturing hand‑off',
                },
              ].map((item) => (
                <li key={item.text} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-primary/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-green-primary" />
                  </div>
                  <span className="text-text-base/80 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-sage-light shadow-sm"
          >
            <CircuitBoard className="w-12 h-12 text-green-primary mb-4" />
            <h3 className="font-heading text-xl font-bold text-forest">Selected Projects</h3>
            <ul className="mt-4 space-y-3 text-sm text-text-base/70">
              <li>• Custom PCB designs for wearable devices.</li>
              <li>• IoT gateway boards with edge processing.</li>
              <li>• Industrial automated control systems.</li>
              <li>• Home automation systems.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. AI Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <BrainCircuit className="w-12 h-12 text-green-primary mb-4" />
            <h3 className="font-heading text-xl font-bold text-forest">AI Technology Stack</h3>
            <ul className="mt-4 space-y-3 text-sm text-text-base/70">
              <li>• PyTorch, TensorFlow, ONNX Runtime.</li>
              <li>• Edge deployment: NVIDIA Jetson, Rockchip, Coral TPU.</li>
              <li>• Custom YOLO, EfficientNet, ViT fine‑tuning.</li>
              <li>• MLOps pipelines for continuous retraining.</li>
              <li>• Model deployment and monitoring.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-green-primary font-semibold uppercase tracking-widest text-sm">
              AI Solutions
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
              Computer Vision, Automation & Agentic AI
            </h2>
            <p className="mt-4 text-text-base/80">
              We build production‑grade AI systems that run on‑device or in the cloud. From quality
              inspection cameras to conversational chatbots and autonomous workflows, our AI
              solutions are tailored to your domain.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                {
                  icon: Eye,
                  text: 'Computer Vision: object detection, OCR, anomaly detection',
                },
                {
                  icon: MessageSquareText,
                  text: 'Chatbots & conversational AI with RAG and function calling',
                },
                {
                  icon: Workflow,
                  text: 'Agentic workflows: multi‑step reasoning, tool‑using AI',
                },
              ].map((item) => (
                <li key={item.text} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-primary/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-green-primary" />
                  </div>
                  <span className="text-text-base/80 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 4. Software Development */}
      <section className="py-20 bg-sage-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-green-primary font-semibold uppercase tracking-widest text-sm">
              Software Development
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
              Web, Mobile & SaaS Systems
            </h2>
            <p className="mt-4 text-text-base/80">
              We architect and build scalable digital products—from responsive web apps and
              cross‑platform mobile apps to multi‑tenant SaaS platforms. Our stack is modern,
              cloud‑native, and security‑focused.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                {
                  icon: Code,
                  text: 'Frontend: React, Next.js, TypeScript, Tailwind',
                },
                {
                  icon: MonitorSmartphone,
                  text: 'Mobile: React Native, Flutter',
                },
                {
                  icon: Cloud,
                  text: 'Backend & cloud: Node.js, Django, AWS, Firebase',
                },
              ].map((item) => (
                <li key={item.text} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-primary/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-green-primary" />
                  </div>
                  <span className="text-text-base/80 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-sage-light shadow-sm"
          >
            <Cloud className="w-12 h-12 text-green-primary mb-4" />
            <h3 className="font-heading text-xl font-bold text-forest">SaaS & Cloud Expertise</h3>
            <ul className="mt-4 space-y-3 text-sm text-text-base/70">
              <li>• Web and Mobile Applications for Enterprise.</li>
              <li>• Real‑time dashboards for IoT data (WebSocket, MQTT).</li>
              <li>• Payment integration: Stripe, Razorpay.</li>
              <li>• Deployment and monitoring of machine learning models.</li>
              <li>• Cloud architecture: AWS, GCP, Azure, Firebase.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 5. CAD & 3D Prototyping */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <Box className="w-12 h-12 text-green-primary mb-4" />
            <h3 className="font-heading text-xl font-bold text-forest">Prototyping Capabilities</h3>
            <ul className="mt-4 space-y-3 text-sm text-text-base/70">
              <li>• FDM, SLA, SLS 3D printing (in‑house & partner network).</li>
              <li>• CNC machining & laser cutting for functional prototypes.</li>
              <li>• Material selection for sustainability.</li>
              <li>• Design for injection molding (DFM) support.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-green-primary font-semibold uppercase tracking-widest text-sm">
              CAD & 3D Prototyping
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-forest">
              Mechanical Design & Rapid Manufacturing
            </h2>
            <p className="mt-4 text-text-base/80">
              Our mechanical engineers create production‑ready enclosures, brackets, and assemblies
              using SolidWorks, Fusion 360, and CATIA. We bridge the gap between digital design and
              physical product with rapid prototyping and manufacturing hand‑off.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                {
                  icon: Printer,
                  text: 'Industrial design & 3D modeling (parametric & surface)',
                },
                {
                  icon: Ruler,
                  text: 'DFM/DFA optimisation for cost‑effective production',
                },
                {
                  icon: Box,
                  text: 'Prototype → pilot run → mass production support',
                },
              ].map((item) => (
                <li key={item.text} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-primary/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-green-primary" />
                  </div>
                  <span className="text-text-base/80 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 6. CTA Section */}
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
              Need custom engineering?
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
              Tell us about your project and we'll assemble the right team to bring it to life.
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

export default Engineering;
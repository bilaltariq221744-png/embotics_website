import { motion } from 'framer-motion';
import {
  Cpu,
  CircuitBoard,
  Wifi,
  Router,
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
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Leaf,
} from 'lucide-react';
import Button from '../components/ui/Button';
import FirstImage from '../assets/EmboticsImage.png';
import SecondImage from '../assets/software-dashboard.jpg';
import RobotRover from '../assets/RobotRover.png';
import CircuitBoardImage from '../assets/CircuitBoardImage.png';
import RoboticArmImage from '../assets/RoboticArmImage.png';
import MechanicalAssembly from '../assets/MechanicalAssembly.png';
import { Link } from 'react-router-dom';

// ---------------- ENGINEERING SERVICES PAGE ----------------
const Engineering = () => {
  return (
    <div className="bg-[#FCFDFD] text-slate-900 selection:bg-emerald-500/25 selection:text-emerald-900 overflow-hidden font-sans">
      
      {/* 1. Page Hero */}
      <section className="relative min-h-[75vh] flex items-center pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-[#F2F7F4] via-[#FFFFFF] to-[#F8FAF9]">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-teal-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        {/* Image 1: Left floating card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden xl:block absolute left-2 2xl:left-8 top-1/3 w-56 2xl:w-64 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 bg-white/80 backdrop-blur-md p-2 -rotate-6 z-0 pointer-events-none"
        >
          <img 
            src={FirstImage} 
            alt="Hardware PCB Prototyping" 
            className="w-full h-48 object-cover rounded-xl"
          />
          <p className="p-2 text-xs font-medium text-slate-700">Custom PCB Prototyping</p>
        </motion.div>

        {/* Image 2: Right floating card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden xl:block absolute right-2 2xl:right-8 top-1/3 w-56 2xl:w-64 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 bg-white/80 backdrop-blur-md p-2 rotate-5 z-0 pointer-events-none"
        >
          <img 
            src={RobotRover} 
            alt="Full-Stack Hardware & Software Engineering" 
            className="w-full h-48 object-cover rounded-xl"
          />
          <p className="p-2 text-xs font-medium text-slate-700">Full Stack Hardware & Software Engineering</p>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16, scale: 0.85 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Engineering Services</span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              className="font-heading text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
            >
              Full‑Stack Hardware &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700">
                Software Engineering
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              className="mt-6 text-slate-600 text-lg sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto"
            >
              From embedded PCBs and industrial IoT to enterprise AI and cloud‑native SaaS,
              Embotics delivers end‑to‑end engineering that turns bold ideas into production‑ready
              products.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: 'spring', stiffness: 240, damping: 20 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Link to="/contact">
                <Button variant="primary" className="group h-[3.25rem] px-8 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-medium shadow-xl shadow-emerald-900/10 transition-all duration-300 transform hover:-translate-y-0.5">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="#embedded-systems">
                <Button variant="outline" className="group h-[3.25rem] px-8 rounded-full border-slate-200 bg-white/80 hover:bg-slate-50 hover:border-slate-300 text-slate-700 font-medium shadow-sm backdrop-blur-md transition-all duration-300">
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Embedded Systems */}
      <section id="embedded-systems" className="py-28 bg-[#F4F8F6] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <span className="text-emerald-700 font-semibold uppercase tracking-widest text-xs px-3.5 py-1.5 rounded-full bg-emerald-100/60 border border-emerald-200">
                Embedded Systems
              </span>
              <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
                PCB, IoT & Firmware Engineering
              </h2>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                We design and deliver custom embedded hardware—from initial concept and schematic
                capture to prototyping, firmware development, and production testing. Our team
                specialises in low‑power IoT, sensor integration, and real‑time control systems.
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: CircuitBoard, text: 'Multi‑layer PCB design & layout (Altium, KiCad)' },
                  { icon: Wifi, text: 'Wireless connectivity: BLE, Wi‑Fi, LoRa, NB‑IoT' },
                  { icon: Router, text: 'Communication protocols: UART, SPI, I2C, CAN, Modbus' },
                  { icon: Cpu, text: 'Firmware development in C/C++, Rust, FreeRTOS, Zephyr' },
                  { icon: Cpu, text: 'Prototyping, testing, and manufacturing hand‑off' },
                ].map((item) => (
                  <div key={item.text} className="flex gap-3 items-start bg-white/80 p-4 rounded-2xl border border-slate-200/60 shadow-sm">
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-200/40 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-md">
                  <img src={CircuitBoardImage} alt="Custom PCB Hardware" className="w-full h-auto object-cover" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 tracking-tight">Selected Projects</h3>
                <ul className="mt-6 space-y-4 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Custom PCB designs for wearable devices.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>IoT gateway boards with edge processing.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Industrial automated control systems.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Home automation systems.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. AI Solutions */}
      <section className="py-28 bg-[#FFFFFF] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-200/40 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
                <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-md">
                  <img src={RoboticArmImage} alt="Robotic Arm Automation" className="w-full h-auto object-cover" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 tracking-tight">AI Technology Stack</h3>
                <ul className="mt-6 space-y-4 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>PyTorch, TensorFlow, ONNX Runtime.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Edge deployment: NVIDIA Jetson, Rockchip, Coral TPU.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Custom YOLO, EfficientNet, ViT fine‑tuning.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>MLOps pipelines for continuous retraining & model monitoring.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <span className="text-emerald-700 font-semibold uppercase tracking-widest text-xs px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                AI Solutions
              </span>
              <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
                Computer Vision, Automation & Agentic AI
              </h2>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                We build production‑grade AI systems that run on‑device or in the cloud. From quality
                inspection cameras to conversational chatbots and autonomous workflows, our AI
                solutions are tailored to your domain.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Eye, text: 'Computer Vision: object detection, OCR, anomaly detection' },
                  { icon: MessageSquareText, text: 'Chatbots & conversational AI with RAG and function calling' },
                  { icon: Workflow, text: 'Agentic workflows: multi‑step reasoning, tool‑using AI' },
                ].map((item) => (
                  <div key={item.text} className="flex flex-col gap-3 bg-slate-50/80 p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 text-xs font-medium leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Software Development */}
      <section className="py-28 bg-[#F4F8F6] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <span className="text-emerald-700 font-semibold uppercase tracking-widest text-xs px-3.5 py-1.5 rounded-full bg-emerald-100/60 border border-emerald-200">
                Software Development
              </span>
              <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
                Web, Mobile & SaaS Systems
              </h2>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                We architect and build scalable digital products—from responsive web apps and
                cross‑platform mobile apps to multi‑tenant SaaS platforms. Our stack is modern,
                cloud‑native, and security‑focused.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Code, text: 'Frontend: React, Next.js, TypeScript, Tailwind' },
                  { icon: MonitorSmartphone, text: 'Mobile: React Native, Flutter' },
                  { icon: Cloud, text: 'Backend & cloud: Node.js, Django, AWS, Firebase' },
                ].map((item) => (
                  <div key={item.text} className="flex flex-col gap-3 bg-white/80 p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 text-xs font-medium leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-200/40 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-md">
                  <img src={SecondImage} alt="Web & Mobile Dashboard Mockup" className="w-full h-auto object-cover" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 tracking-tight">SaaS & Cloud Expertise</h3>
                <ul className="mt-6 space-y-4 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Web and Mobile Applications for Enterprise.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Real‑time dashboards for IoT data (WebSocket, MQTT).</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Payment integration: Stripe, Razorpay.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cloud architecture: AWS, GCP, Azure, Firebase.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. CAD & 3D Prototyping */}
      <section className="py-28 bg-[#FFFFFF] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-200/40 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
                <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-md">
                  <img src={MechanicalAssembly} alt="Mechanical Gear Assembly" className="w-full h-auto object-cover" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 tracking-tight">Prototyping Capabilities</h3>
                <ul className="mt-6 space-y-4 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>FDM, SLA, SLS 3D printing (in‑house & partner network).</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>CNC machining & laser cutting for functional prototypes.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Material selection optimized for sustainability.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Design for injection molding (DFM) support.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <span className="text-emerald-700 font-semibold uppercase tracking-widest text-xs px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                CAD & 3D Prototyping
              </span>
              <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
                Mechanical Design & Rapid Manufacturing
              </h2>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                Our mechanical engineers create production‑ready enclosures, brackets, and assemblies
                using SolidWorks, Fusion 360, and CATIA. We bridge the gap between digital design and
                physical product with rapid prototyping and manufacturing hand‑off.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Printer, text: 'Industrial design & 3D modeling (parametric & surface)' },
                  { icon: Ruler, text: 'DFM/DFA optimisation for cost‑effective production' },
                  { icon: Box, text: 'Prototype → pilot run → mass production support' },
                ].map((item) => (
                  <div key={item.text} className="flex flex-col gap-3 bg-slate-50/80 p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 text-xs font-medium leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-10 sm:py-16  relative overflow-hidden">
        <div className="max-w-4xl mx-4 sm:mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[3rem] sm:rounded-full bg-gradient-to-b from-emerald-50 to-emerald-50/40 border border-emerald-200 px-6 sm:px-16 py-16 sm:py-20 text-center"
          >
            {/* Decorative leaf icon - top right */}
            <Leaf className="hidden sm:block absolute top-8 right-[5.75rem] w-8 h-8 text-emerald-300" strokeWidth={1.5} />

            {/* Decorative sparkle icon - bottom left */}
            <Sparkles className="hidden sm:block absolute bottom-[3.25rem] left-24 w-6 h-6 text-emerald-300" strokeWidth={1.5} />

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-forest">
              Want to build the future with us?
            </h2>
            <p className="mt-4 text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              We're always open to partnerships, pilot projects, and conversations about how our
              technology can create impact.
            </p>

            <div className="mt-10 flex items-center justify-center">
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="gap-2 rounded-full border border-forest/60 bg-white text-forest font-semibold px-6 py-3 hover:bg-forest hover:text-white transition-colors"
                >
                  <span>Get in Touch</span> <Mail className="w-4 h-4" />
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
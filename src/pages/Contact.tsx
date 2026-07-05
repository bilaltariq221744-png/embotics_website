import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, ShieldCheck } from 'lucide-react';
import Button from '../components/ui/Button';

// ---------------- CONTACT PAGE ----------------
const Contact = () => {
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
              Contact Us
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-forest leading-tight">
              Let’s Build Something Sustainable
            </h1>
            <p className="mt-6 text-text-base/80 text-lg max-w-2xl mx-auto">
              Request a demo, discuss an engineering project, or just say hello. We’ll get back to
              you within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Info Cards */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Mail,
              title: 'Email',
              details: 'bilaltariq221744@gmail.com',
              sub: 'For general enquiries',
            },
            {
              icon: Phone,
              title: 'Phone',
              details: '+92 341 144 7542',
              sub: 'Mon–Fri, 9am–6pm IST',
            },
            {
              icon: MapPin,
              title: 'Location',
              details: 'Islamabad, Pakistan',
              sub: '5th floor of the FMC Building at Air University main campus in the PAF Complex Sector E-9 Islamabad',
            },
          ].map((contact, idx) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-sage-light rounded-2xl p-6 border border-green-primary/10 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-green-primary/10 flex items-center justify-center mx-auto mb-4">
                <contact.icon className="w-6 h-6 text-green-primary" />
              </div>
              <h3 className="font-semibold text-forest mb-2">{contact.title}</h3>
              <p className="text-forest font-medium">{contact.details}</p>
              <p className="text-text-base/70 text-sm mt-1">{contact.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Lead Form & Map Placeholder */}
      <section className="py-20 bg-sage-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-sage-light shadow-sm"
          >
            <h2 className="font-heading text-2xl font-bold text-forest mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-forest font-medium text-sm mb-1">Full name *</label>
                  <input
                    type="text"
                    className="w-full border border-sage-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-forest font-medium text-sm mb-1">Email *</label>
                  <input
                    type="email"
                    className="w-full border border-sage-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-forest font-medium text-sm mb-1">Company</label>
                  <input
                    type="text"
                    className="w-full border border-sage-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-forest font-medium text-sm mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full border border-sage-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors"
                    placeholder="+91 0000000000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-forest font-medium text-sm mb-1">Interest *</label>
                <select
                  className="w-full border border-sage-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors bg-white"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="rvm-demo">RVM Demo</option>
                  <option value="engineering-services">Engineering Services</option>
                  <option value="partnership">Partnership / Investment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-forest font-medium text-sm mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full border border-sage-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-primary transition-colors"
                  placeholder="Tell us about your project or enquiry..."
                />
              </div>
              <Button type="submit" variant="primary" className="w-full gap-2">
                Send Message <Send className="w-4 h-4" />
              </Button>
              <p className="text-xs text-text-base/50 text-center mt-2">
                <ShieldCheck className="inline w-3 h-3 mr-1" />
                We respect your privacy and never share your data.
              </p>
            </form>
          </motion.div>

          {/* Map (replaced placeholder) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-sage-light shadow-sm flex flex-col"
          >
            <h2 className="font-heading text-2xl font-bold text-forest mb-6">Our Location</h2>
            <div className="bg-sage-light rounded-xl flex-1 overflow-hidden border border-green-primary/10">
              <iframe
                title="Air University Islamabad – Embotics HQ"
                src="https://www.openstreetmap.org/export/embed.html?bbox=73.0640%2C33.7155%2C73.0685%2C33.7185&layer=mapnik"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[300px]"
              />
            </div>
            <div className="mt-6 flex items-center gap-3 text-text-base/70 text-sm">
              <Clock className="w-4 h-4 text-green-primary" />
              <span>Response time: typically within 24 hours</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
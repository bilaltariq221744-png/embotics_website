import { Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-sage-light border-t border-green-primary/10">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand column */}
        <div>
          <Link to="/" className="flex items-center gap-2 text-forest font-heading font-bold text-lg mb-4">
            <Recycle className="w-6 h-6 text-green-primary" />
            Embotics
          </Link>
          <p className="text-forest/70 text-sm leading-relaxed">
            Intelligent reverse vending & engineering for a circular future.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-forest font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-forest/70 text-sm">
            <Link to="/rvm" className="hover:text-green-primary transition">Reverse Vending Machine</Link>
            <Link to="/engineering" className="hover:text-green-primary transition">Services</Link>
            <Link to="/sustainability" className="hover:text-green-primary transition">Sustainability</Link>
            <Link to="/about" className="hover:text-green-primary transition">About Us</Link>
            <Link to="/contact" className="hover:text-green-primary transition">Contact</Link>
          </div>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-forest font-semibold mb-4">Get in Touch</h4>
          <div className="text-forest/70 text-sm space-y-1">
            <p>hello@embotics.com</p>
            <p>+91 (000) 000-0000</p>
            <p>Bangalore, India</p>
          </div>
        </div>
      </div>

      <div className="border-t border-forest/10 py-4 text-center text-forest/50 text-xs">
        © {new Date().getFullYear()} Embotics Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
import { Recycle, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2D5F44] px-4 sm:px-6 pb-4 sm:pb-6    rounded-3xl">
      <div className="max-w-7xl mx-auto  rounded-[2.25rem] px-6 sm:px-12 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-white font-heading font-bold text-lg mb-4">
              <span className="w-9 h-9 rounded-full bg-green-primary flex items-center justify-center">
                <Recycle className="w-4 h-4 text-white" />
              </span>
              Embotics
            </Link>
            <p className="text-white/90 text-md leading-relaxed max-w-xs ">
              Intelligent reverse vending machines and engineering services for a circular,
              sustainable future.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
            <div className="flex flex-col gap-2.5 text-white/80 text-md">
              <Link to="/rvm" className="hover:text-green-primary transition w-fit">Reverse Vending Machine</Link>
              <Link to="/engineering" className="hover:text-green-primary transition w-fit">Services</Link>
              <Link to="/sustainability" className="hover:text-green-primary transition w-fit">Sustainability</Link>
              <Link to="/about" className="hover:text-green-primary transition w-fit">About Us</Link>
              <Link to="/contact" className="hover:text-green-primary transition w-fit">Contact</Link>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Get In Touch</h4>
            <div className="text-white/80 text-md space-y-3">
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-green-primary shrink-0" /> hello@embotics.com</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-green-primary shrink-0" /> +92 (000) 000-0000</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-green-primary shrink-0" /> Islamabad, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/40 text-xs">
          © {new Date().getFullYear()} Embotics Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

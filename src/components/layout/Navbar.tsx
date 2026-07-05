import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-sage-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-forest font-heading font-bold">
          <img
            src={logo}
            alt="Embotics logo"
            className="h-20 w-20 object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg">Embotics Pvt Ltd</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-green-primary">
              Innovate Develop Deliver
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-forest/80 font-medium">
          <Link to="/rvm" className="hover:text-green-primary transition">Product</Link>
          <Link to="/engineering" className="hover:text-green-primary transition">Services</Link>
          <Link to="/sustainability" className="hover:text-green-primary transition">Sustainability</Link>
          <Link to="/about" className="hover:text-green-primary transition">About</Link>
          <Link to="/contact" className="hover:text-green-primary transition">Contact</Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-forest hover:text-green-primary transition"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-sage-light">
          <div className="flex flex-col gap-4 px-4 py-6 text-forest font-medium">
            <Link to="/rvm" onClick={() => setMobileOpen(false)} className="hover:text-green-primary">RVM</Link>
            <Link to="/engineering" onClick={() => setMobileOpen(false)} className="hover:text-green-primary">Services</Link>
            <Link to="/sustainability" onClick={() => setMobileOpen(false)} className="hover:text-green-primary">Sustainability</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="hover:text-green-primary">About</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="hover:text-green-primary">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
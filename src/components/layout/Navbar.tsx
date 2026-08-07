import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

const GOLD = '#fdfbf9'; // same site-wide accent as Services / Sustainability / About

const links = [
  { to: '/rvm', label: 'Product' },
  { to: '/engineering', label: 'Services' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    // wrapper is now transparent — only the pill itself has a background.
    // `px-30` was previously used here, but 30 isn't a step on Tailwind's
    // default spacing scale, so it compiled to *no padding at all* — the
    // pill sat flush against the screen edges on every breakpoint. Replaced
    // with a real responsive scale so there's always breathing room, more
    // on wider screens.
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 xl:px-16"
    >
      {/* `max-w-400` was also invalid (not a real Tailwind class — needs
          brackets like `max-w-[400px]`, or a named size), so it had no
          effect either: the pill had no width cap and just stretched to
          fill whatever space the (broken) wrapper padding left it. Swapped
          for a real max-width so the pill actually stays a pill on large
          screens instead of an edge-to-edge bar. */}
      <nav className="max-w-7xl mx-auto bg-[#2D5F44] backdrop-blur-xl rounded-full shadow-2xl shadow-forest/70 border border-white/30 px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo & Brand ID.
              The name now shows at every size — previously `hidden sm:flex`
              hid it below the sm breakpoint, leaving just the logo mark on
              phones. Only the small mono tagline underneath stays sm+ only,
              since two lines of text next to the logo gets tight once the
              hamburger button is also competing for space. */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 text-white font-heading font-bold shrink-0 group min-w-0">
            <motion.div
              whileHover={{ rotate: -6, scale: 1.06 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl  border border-green-primary/30 flex items-center justify-center p-1.5 shadow-inner shrink-0"
            >
              <img src={logo} alt="Embotics logo" className="h-full w-full object-contain rounded-full" />
            </motion.div>
            <div className="flex flex-col leading-tight min-w-0">
              <span className="text-sm sm:text-md font-bold tracking-wide text-white group-hover:text-green-primary transition-colors truncate">
                Embotics
              </span>
              <span className="hidden sm:block font-mono text-[9px] uppercase tracking-[0.12em] text-sage-light">
                Innovate · Develop · Deliver
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5 text-white/90 text-sm  tracking-wider">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `group relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-white/15 border border-white/30 shadow-sm'
                    : 'hover:text-white hover:bg-white/10'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isActive ? 'bg-green-primary shadow-[0_0_8px_theme(colors.green-primary)]' : 'bg-transparent'
                    }`}
                  />
                  <span className="relative pb-0.5">
                    Home
                    <span
                      className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100"
                      style={{ background: isActive ? '#ffffff' : '#ffffff' }}
                    />
                  </span>
                </>
              )}
            </NavLink>

            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/15 border border-white/30 shadow-sm'
                      : 'hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isActive ? 'bg-green-primary shadow-[0_0_8px_theme(colors.green-primary)]' : 'bg-transparent'
                      }`}
                    />
                    <span className="relative pb-0.5">
                      {link.label}
                      <span
                        className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100"
                        style={{ background: isActive ? GOLD : '#ffffff' }}
                      />
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden px-5 py-2.5 bg-green-primary hover:bg-green-deep text-white font-mono text-md tracking-wider font-semibold rounded-full shadow-lg shadow-green-primary/20 transition-colors duration-300"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <X className="w-5 h-5 text-green-primary" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown — width now tracks the fixed wrapper's own
          responsive padding above instead of its own separate `max-w-6xl`,
          which could disagree with the pill's width on some screen sizes. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden max-w-7xl mx-auto mt-2 bg-forest/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/15 overflow-hidden p-3"
          >
            <motion.div
              className="flex flex-col gap-1.5 text-white font-mono text-sm tracking-wider"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -8 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.25 }}
              >
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="group relative flex items-center px-4 py-3 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <span
                    className="mr-3 h-0 w-[2px] rounded-full transition-all duration-300 group-hover:h-4"
                    style={{ background: GOLD }}
                  />
                  Home
                </Link>
              </motion.div>
              {links.map((link) => (
                <motion.div
                  key={link.to}
                  variants={{
                    hidden: { opacity: 0, x: -8 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="group relative flex items-center px-4 py-3 rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    <span
                      className="mr-3 h-0 w-[2px] rounded-full transition-all duration-300 group-hover:h-4"
                      style={{ background: GOLD }}
                    />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -8 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.25 }}
                className="pt-2 mt-1 border-t border-white/10"
              >
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <button className="w-full py-3 bg-green-primary hover:bg-green-deep text-white  tracking-wider rounded-xl shadow-lg transition-all">
                    Contact Us
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
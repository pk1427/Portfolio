import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion, useScroll } from "framer-motion";
import logo from "../assets/PkLogo.png";
import { CONTACT, NAV_LINKS } from "../constants";

const socials = [
  { href: CONTACT.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: CONTACT.github, icon: FaGithub, label: "GitHub" },
  { href: CONTACT.instagram, icon: FaInstagram, label: "Instagram" },
  { href: CONTACT.x, icon: FaSquareXTwitter, label: "X" },
];

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 py-3 sm:py-4"
    >
      <nav className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-[rgba(12,13,11,0.88)] px-3 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:px-5">
        <a href="#about" aria-label="Home" className="flex items-center gap-3">
          <img
            src={logo}
            className="h-10 w-10 rounded-lg object-cover sm:h-11 sm:w-11"
            alt="Prasad Kapure logo"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">
              Prasad Kapure
            </p>
            <p className="text-xs text-slate-500">
              Blockchain developer | Smart contracts | Web3 apps
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-teal-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-md border border-white/10 bg-white/5 p-2 text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-0.5 hover:border-teal-200/50 hover:bg-teal-200/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-200/40 sm:p-2.5"
            >
              <Icon className="text-base sm:text-lg" />
            </a>
          ))}
        </div>
      </nav>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="mt-1.5 h-[2px] origin-left rounded-full bg-gradient-to-r from-teal-300 via-amber-200 to-teal-300 opacity-70"
      />
    </motion.header>
  );
};

export default Navbar;

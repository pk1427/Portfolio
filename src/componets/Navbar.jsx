import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import logo from "../assets/PkLogo.png";
import { CONTACT, NAV_LINKS } from "../constants";

const socials = [
  { href: CONTACT.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: CONTACT.github, icon: FaGithub, label: "GitHub" },
  { href: CONTACT.instagram, icon: FaInstagram, label: "Instagram" },
  { href: CONTACT.x, icon: FaSquareXTwitter, label: "X" },
];

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 py-5"
    >
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-xl sm:px-6">
        <a href="#about" aria-label="Home" className="flex items-center gap-3">
          <img
            src={logo}
            className="h-11 w-11 rounded-full object-cover"
            alt="Prasad Kapure logo"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-300">
              Prasad Kapure
            </p>
            <p className="text-xs text-slate-500">Protocol-minded Web3 engineer</p>
          </div>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:-translate-y-0.5 hover:border-sky-400/50 hover:text-white"
            >
              <Icon className="text-lg" />
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;

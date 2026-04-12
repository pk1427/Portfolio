import { CONTACT } from "../constants/index";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="pb-20">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70">
        <div className="grid gap-8 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
              Let&apos;s build
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
              Open to protocol engineering, smart contract, and full-stack Web3 roles.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
              If you&apos;re building markets, infra, wallets, or serious on-chain
              products, I&apos;d love to talk.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-400/40 hover:bg-sky-400/10"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Email</p>
              <p className="mt-3 text-sm text-white sm:text-base">{CONTACT.email}</p>
            </a>
            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-400/40 hover:bg-sky-400/10"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Phone</p>
              <p className="mt-3 text-sm text-white sm:text-base">{CONTACT.phoneNo}</p>
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-400/40 hover:bg-sky-400/10"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">LinkedIn</p>
              <p className="mt-3 text-sm text-white sm:text-base">Connect professionally</p>
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-400/40 hover:bg-sky-400/10"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">GitHub</p>
              <p className="mt-3 text-sm text-white sm:text-base">Explore repositories</p>
            </a>
          </motion.div>
        </div>

        <div className="border-t border-white/10 px-8 py-5 text-sm text-slate-500 lg:px-10">
          Based in {CONTACT.address}
        </div>
      </div>
    </section>
  );
};

export default Contact;

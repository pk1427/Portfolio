import { CONTACT } from "../constants/index";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="section-shell pb-20">
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[rgba(16,18,15,0.82)] shadow-[0_24px_90px_rgba(0,0,0,0.38)] ring-1 ring-white/[0.025]">
        <div className="grid items-start gap-6 p-4 sm:gap-8 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              Contact
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Open to blockchain developer and smart contract engineering roles.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
              Especially interested in teams working on DeFi, Solana, EVM apps,
              treasury tooling, identity, oracle integrations, or better wallet
              UX.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.6 }}
            className="grid items-stretch gap-3 sm:grid-cols-2 sm:gap-4"
          >
            <a
              href={`mailto:${CONTACT.email}`}
              className="min-h-[104px] rounded-lg border border-white/10 bg-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:-translate-y-0.5 hover:border-teal-200/40 hover:bg-teal-200/10 sm:min-h-[120px] sm:p-5"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Email</p>
              <p className="mt-3 break-words text-sm text-white sm:text-base">{CONTACT.email}</p>
            </a>
            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="min-h-[104px] rounded-lg border border-white/10 bg-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:-translate-y-0.5 hover:border-teal-200/40 hover:bg-teal-200/10 sm:min-h-[120px] sm:p-5"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Phone</p>
              <p className="mt-3 text-sm text-white sm:text-base">{CONTACT.phoneNo}</p>
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[104px] rounded-lg border border-white/10 bg-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:-translate-y-0.5 hover:border-teal-200/40 hover:bg-teal-200/10 sm:min-h-[120px] sm:p-5"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">LinkedIn</p>
              <p className="mt-3 text-sm text-white sm:text-base">Connect professionally</p>
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[104px] rounded-lg border border-white/10 bg-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:-translate-y-0.5 hover:border-teal-200/40 hover:bg-teal-200/10 sm:min-h-[120px] sm:p-5"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">GitHub</p>
              <p className="mt-3 text-sm text-white sm:text-base">Explore repositories</p>
            </a>
          </motion.div>
        </div>

        <div className="border-t border-white/10 px-4 py-5 text-sm text-slate-500 sm:px-8 lg:px-10">
          Based in {CONTACT.address} · Built with Next.js, TypeScript, and deployed on Vercel.
        </div>
      </div>
    </section>
  );
};

export default Contact;

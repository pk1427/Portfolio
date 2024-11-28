import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/PkLogo.png"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center
        " >
            <a href="/" aria-label="Home">
            <img src={logo} className="mx-2" width={70}height={53} alt="Logo" /></a>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href=""
            target="_blank"
            rel="noopener npreferrer"
            aria-label="LinkedIn">
                <FaLinkedin/>
            </a>

            <a href=""
            target="_blank"
            rel="noopener npreferrer"
            aria-label="Gitgub">
                <FaGithub/>
            </a>

            <a href=""
            target="_blank"
            rel="noopener npreferrer"
            aria-label="Instagram">
                <FaInstagram/>
            </a>

            <a href=""
            target="_blank"
            rel="noopener npreferrer"
            aria-label="Twitter">
                <FaSquareXTwitter/>
            </a>

        </div>

    </nav>
  )
}

export default Navbar
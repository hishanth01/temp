import Logo from "../assets/hplogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-0 flex items-center justify-between py-0">
      <div className="flex flex-shrink-0 items-center">
        <img src={Logo} alt="Logo" className="h-10 w-auto"/>
      </div>

      <div className="m-8 flex items-center justify-between gap-10 text-2xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hishanth-puva/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin />
        </a>

        {/* Facebook */}
        <a
          href="https://web.facebook.com/hishanth.anirudh" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaFacebook />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/hishanth01" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black"
        >
          <FaGithub />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/mr_hishanth/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800"
        >
          <FaInstagram />
        </a>
        </div>
      </nav>
  )
}

export default Navbar;
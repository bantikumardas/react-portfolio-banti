import logo from "../assets/logo.jpg";
import { FaLinkedin, FaGithub, FaTwitter, FaCode } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-4 w-28" src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/banti-kumar-das-aaaa6521a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/bantikumardas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/bantikumardas43/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GeeksforGeeks"
        >
          <SiGeeksforgeeks />
        </a>
        <a
          href="https://leetcode.com/u/bantikumar/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="CodeChef"
        >
          <FaCode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

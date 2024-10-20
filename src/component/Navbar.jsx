import logo from "../assets/kevinRushLogo.png"; 
import { FaLinkedin, FaGithub, FaTwitter, FaCode } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

const Navbar = () => {
  return ( 
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"> 
        <img className="mx-4 w-28" src={logo} alt="logo" />
      </div>
    
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/aayush-kumar-gupta-7a6466214/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a> 
        <a href="https://github.com/Aayushgupta24?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a> 
        <a href="https://x.com/AayushK88649573" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/aayushkggfg/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target="_blank" rel="noopener noreferrer" aria-label="GeeksforGeeks">
          <SiGeeksforgeeks />
        </a>
        <a href="https://leetcode.com/cap_America/" target="_blank" rel="noopener noreferrer" aria-label="CodeChef">
          <FaCode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

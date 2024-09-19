import { Mail, Github, Linkedin, Twitter } from "lucide-react"; // Import icons from lucide-react
import Link from "next/link";

const Socials = () => (
  <div className="flex space-x-6 mt-4">

    <Link href="https://github.com/pranav-gandesree" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
      <Github className="w-6 h-6" />
    </Link>


    <Link href="https://www.linkedin.com/in/gandesree-pranav-7998a4242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
      <Linkedin className="w-6 h-6" />
    </Link>

    <Link href="https://x.com/pranav8267" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
      <Twitter className="w-6 h-6" />
    </Link>


<Link href="mailto:pranav8267@gmail.com" className="text-gray-400 hover:text-white">
  <Mail className="w-6 h-6" />
</Link>

  </div>
);

export default Socials;

import { Mail, Github, Linkedin, Twitter } from "lucide-react"; // Import icons from lucide-react
import Link from "next/link";

const Socials = () => (
  <div className="flex space-x-6 mt-4">
    {/* GitHub */}
    <Link href="https://github.com/pranavgandesree" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
      <Github className="w-6 h-6" />
    </Link>

    {/* LinkedIn */}
    <Link href="https://www.linkedin.com/in/pranavgandesree" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
      <Linkedin className="w-6 h-6" />
    </Link>

    {/* Twitter */}
    <Link href="https://twitter.com/pranavgandesree" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
      <Twitter className="w-6 h-6" />
    </Link>

    {/* Email */}
    <Link href="mailto:pranav@example.com" className="text-gray-400 hover:text-white">
      <Mail className="w-6 h-6" />
    </Link>
  </div>
);

export default Socials;

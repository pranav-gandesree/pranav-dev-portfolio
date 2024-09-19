// import { Button } from "@/components/ui/button";

// const Header = () => (
//   <header className="mb-16">
//     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//       Hello, I'm Pranav Gandesree.
//     </h1>
//     <p className="text-lg md:text-xl text-gray-400 mb-8">
//       I'm an IoT developer and web enthusiast, helping create innovative solutions and bringing ideas to life.
//     </p>
//     <div className="flex space-x-4">
//       <Button size="lg" className="text-lg">
//         Book a call
//       </Button>
//       <Button size="lg" variant="outline" className="text-lg">
//         View Projects
//       </Button>
//     </div>
//   </header>
// );

// export default Header;




import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, Linkedin } from "lucide-react"; // Import the icons
import Link from "next/link";

const Header = () => (
  <header className="mb-16">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
      Hello, I'm Pranav Gandesree.
    </h1>
    <p className="text-lg md:text-xl text-gray-400 mb-8">
      I'm an IoT developer and web enthusiast, helping create innovative solutions and bringing ideas to life.
    </p>
    <div className="flex space-x-4">
      <Link href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5" /> 
      </Link>
      <Link href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-5 h-5" /> 
      </Link>
      <Link href="mailto:your-email@example.com">
          <Mail className="w-5 h-5" />

      </Link>
      <Link href="">
          <Linkedin className="w-5 h-5" />

      </Link>
    </div>
  </header>
);

export default Header;

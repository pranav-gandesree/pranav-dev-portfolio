import Socials from "./Socials";

const Header = () => (
  <header className="mb-16">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
      Hello, I&apos;m Pranav Gandesree.
    </h1>
    <p className="text-lg md:text-xl text-gray-400 mb-8">
      21-year-old tech enthusiast passionate and on a journey to create cool projects and leave a mark in the world of tech! Exploring the latest in Web3, blockchain, and decentralized
      technologies. 
    </p>
    <Socials />
  </header>
);

export default Header;

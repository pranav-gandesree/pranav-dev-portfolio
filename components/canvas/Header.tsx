import Socials from "./Socials";

const Header = () => (
  <header className="mb-16">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
      Hello, I&apos;m Pranav
    </h1>
    <p className="text-lg md:text-xl text-gray-400 mb-8">
      Full stack developer exploring solana blockchain.
    </p>
    <Socials />
  </header>
);

export default Header;

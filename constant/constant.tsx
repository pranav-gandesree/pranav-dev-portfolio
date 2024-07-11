import project1 from '../public/project1.png'
import mediumImage from '../public/medium_image.png'
import quicksharebin from '../public/quicksharebin.png'

const projects = [
  
  {
    title: 'TrueColors Photography',
    description: 'The Truecolor Photography landing page is a showcase of artistry and professionalism in visual storytelling. Designed to captivate visitors from the moment they arrive, it highlights the commitment to capturing life&apos;s most precious moments with clarity and vibrancy',
    techStack: ['HTML', 'CSS', 'ReactJS', 'TailwindCss', 'Firebase'],
    image: project1,
    githubLink: 'https://github.com/pranav-gandesree/truecolors',
    websiteLink: 'https://truecolors-photography.com',
  },
  {
    title: 'InkSpire Hub',
    description: 'Inkspire Hub is a modern content publishing platform inspired by Medium, offering a seamless, engaging experience for writers and readers.Built with React and Node.js, Inkspire Hub is the perfect place to create, discover, and connect through high-quality content.',
    techStack: ['JavaScript','React','Express.js', 'Node.js', 'MongoDB'],
    image: mediumImage,
    githubLink: 'https://github.com/pranav-gandesree/InkSpire-Hub',
    // websiteLink: 'https://project-two-website.com',
  },
  {
    title: 'QuickShareBin',
    description: ' Share text snippets quickly with unique URLs. An efficient tool for sharing text content across devices and platforms.',
    techStack: ['JavaScript','React','Express.js', 'Node.js', 'MongoDB'],
    image: quicksharebin,
    githubLink: 'https://github.com/pranav-gandesree/stagbinClone',
    // websiteLink: 'https://project-three-website.com',
  },
];

export { projects };




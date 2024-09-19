// const AboutMe = () => (
//     <section className="mb-16">
//       <h2 className="text-2xl font-bold mb-4">About Me</h2>
//       <p className="text-gray-400 mb-4">
//         I'm a Computer Science and Engineering student specializing in IoT. With a passion for web development and a knack for problem-solving, I create user-friendly applications that make a difference.
//       </p>
//       <p className="text-gray-400">
//         My experience ranges from IoT development to creating responsive web applications. I'm always eager to learn and apply new technologies to solve real-world problems.
//       </p>
//     </section>
//   );






//   export default AboutMe;





















import Socials from "../canvas/Socials";
import SeriesList from "./WatchedSection";


const AboutMe = () => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-4">About Me</h2>

    <p className="text-gray-400 mb-10 text-lg">
      I'm a 21-year-old tech enthusiast with a degree in Computer Science and Engineering, specializing in IoT. I love solving problems through technology and creating user-friendly, impactful web applications.
    </p>

{/* Education */}
<h3 className="text-xl font-semibold mb-2">Education</h3>
    <p className="text-gray-400 text-lg">
      B.Tech in Computer Science and Engineering Internet of Things (IoT)
    </p>
    <p  className="text-gray-400 mb-10 text-lg">
     Ace Engineering College, Hyderabad, Telangana. CGPA – 8.01
    </p>

    {/* Work Experience */}
    <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
    <p className="text-gray-400 mb-4 text-lg">
      <strong>IoT Developer Intern at Li Blocks Pvt Ltd</strong> <br />
      June 2023 – October 2023 <br />
      Worked on designing and implementing a user-friendly web application for visual programming with Blockly for IoT devices. Integrated WebSocket technology for real-time communication and collaborated with cross-functional teams for IoT device interaction.
    </p>






    {/* Spotify Playlist */}
    {/* <h3 className="text-xl font-semibold mb-2">My Spotify Playlist</h3>
    <p className="text-gray-400 mb-4">
      Music is my constant companion while coding. Check out my playlist on Spotify to vibe with me:
    </p>
    <iframe className="border-radius:12px" src="https://open.spotify.com/embed/playlist/5LnbCdXrzplErj2FCrIXRd?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}







    <SeriesList/>

    <div className="flex justify-center mt-4">
    <Socials/>

    </div>
  </section>
);

export default AboutMe;

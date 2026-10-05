import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

const About = () => {
  return (
    <div
      className="border-2 border-custom-sand bg-white rounded-[30px]"
      id="about"
    >
      <div className="px-5 py-3">
        <h3 className="text-2xl font-bold text-custom-red">About Me</h3>
        <div className="font-semibold text-zinc-500 text-base leading-relaxed text-justify indent-paragraph pt-1">
          <p>
            Hello, I&apos;m Jameel Ahmed. Coming from a background of running a
            family business, I bring a unique, product-conscious perspective to
            software engineering. Over the last couple of years, I&apos;ve
            immersed myself in full-stack development, building everything from
            responsive user interfaces to complex, event-driven enterprise
            platforms, always prioritizing clean code and reliable architecture.
          </p>
          <p>
            Now, I&apos;m eager to bring my enthusiasm for solving real-world
            problems and my proficiency in technologies like NestJS, TypeScript,
            Next.js, and PostgreSQL to a dynamic team. I am actively seeking
            opportunities to tackle challenging projects and collaborate with
            like-minded professionals who value quality and scalable design.
            Joining a team that supports continuous learning will not only help
            me achieve my professional goals but also allow me to add immediate
            value through my dedication and operational mindset.
          </p>
        </div>
        <div className="my-2 flex flex-wrap gap-4">
          {renderLink(
            "mailto:jameel.swe@gmail.com",
            <BiLogoGmail />,
            "Send Email",
            "Gmail",
            "testing",
          )}
          {renderLink(
            "https://github.com/jameel-swe",
            <FaGithub />,
            "Github",
            "Github",
            "bg",
          )}
          {renderLink(
            "https://linkedin.com/in/jameel-swe",
            <FaLinkedin />,
            "LinkedIn",
            "LinkedIn",
            "cloud",
          )}
          {renderLink(
            "https://github.com/user-attachments/files/33052292/Jameel_Ahmed_Resume_FSE.pdf",
            <MdDescription />,
            "Resume",
            "Resume",
            "teal",
          )}
        </div>
      </div>
    </div>
  );
};

function renderLink(href, icon, label, name, color) {
  return (
    <a
      href={href}
      className={`px-4 py-2 flex justify-center items-center gap-2 bg-custom-${color} rounded-full text-base font-semibold hover:text-custom-red hover:bg-custom-bg`}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {name}
    </a>
  );
}

export default About;

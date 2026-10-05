import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const Contact = () => {
  return (
    <div id="contact">
      <h3 className="text-2xl font-bold text-custom-red">
        Get in touch with me anytime
      </h3>
      <div className="hidden text-5xl md:block">&#8592;</div>
      <div className="my-4 md:hidden block">
        {renderLink("https://github.com/jameel-swe", <FaGithub />, "Github")}
        {renderLink(
          "https://linkedin.com/in/jameel-swe",
          <FaLinkedin />,
          "LinkedIn",
        )}
        {renderLink(
          "mailto:jameel.swe@gmail.com",
          <BiLogoGmail />,
          "Send Email",
        )}
      </div>
      <div className="text-justify md:text-base font-semibold py-2 my-2 text-zinc-600">
        I&apos;m a Full-Stack Software Engineer specializing in scalable backend
        architectures and enterprise platforms using NestJS, TypeScript,
        Next.js, and PostgreSQL.
      </div>
      <div className="text-justify md:text-base font-semibold py-2 my-2 text-zinc-600">
        Outside of work, I enjoy staying active by playing badminton and table
        tennis, and I unwind by catching up on the latest series.
      </div>
      <div className="text-justify md:text-base font-semibold py-2 my-2 text-zinc-600">
        I strive for a balance between professional achievements and personal
        development.
      </div>
      {/* <div className="text-balance font-semibold py-2 my-2">
        <div className="flex flex-row text-custom-red gap-4 underline">
          <a
            href="https://dev.to/jameel-webdev"
            aria-label="https://dev.to/jameel-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center flex-wrap"
          >
            dev
            <IoIosLink />
          </a>
          <a
            href="https://github.com/jameel-webdev/npx-jameel-webdev"
            aria-label="https://github.com/jameel-webdev/npx-jameel-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            npmprofile
            <IoIosLink />
          </a>
        </div>
      </div> */}
    </div>
  );
};

function renderLink(href, icon, label) {
  return (
    <a
      href={href}
      className="mr-5 p-4 border-2 border-custom-red rounded-lg inline-block text-3xl bg-custom-testing/40 focus:outline-none focus:ring-2 focus:ring-white/50"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
export default Contact;

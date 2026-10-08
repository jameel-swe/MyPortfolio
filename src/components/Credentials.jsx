import CredCard from "./CredCard";

const Credentials = () => {
  return (
    <>
      <div className="my-7" id="credentials">
        <h3 className="text-2xl font-bold text-custom-red mb-5">Credentials</h3>
        <div className="lg:flex lg:flex-row-reverse lg:gap-2">
          <div className="border-2 border-custom-sand bg-white rounded-[30px] px-5 py-3 my-3">
            <div
              className={`font-bold text-base py-1 px-4 rounded-full bg-custom-lime inline-block my-2`}
            >
              Certifications
            </div>
            {/**Certifications*/}
            <div className="mb-4 lg:mb-2">
              <div className="flex flex-wrap justify-between font-bold">
                <div>Frontend Developer React Certificate - HackerRank</div>
                <div>April 2024</div>
              </div>
              <div className="text-sm text-zinc-500 py-1">
                Successfully passed a HackerRank role certification exam that
                covers React, CSS, and JavaScript technologies.
              </div>
            </div>
            <div className="mb-4 lg:mb-2">
              <div className="flex flex-wrap justify-between font-bold">
                <div>Git and GitHub - LinkedIn Learning</div>
                <div>Jan 2024 - Apr 2024</div>
              </div>
              <div className="text-sm text-zinc-500 py-1">
                Completed course on Git and GitHub essential commands and
                collaborative development.
              </div>
            </div>
            <div className="mb-4 lg:mb-2">
              <div className="flex flex-wrap justify-between font-bold">
                <div>Back End Development and APIs - FreeCodeCamp</div>
                <div>Jan 2024 - Apr 2024</div>
              </div>
              <div className="text-sm text-zinc-500 py-1">
                Developed hands-on back end applications using Node.js, npm,
                Express, MongoDB and Mongoose.
              </div>
            </div>
            <div className="mb-4 lg:mb-2">
              <div className="flex flex-wrap justify-between font-bold">
                <div>Responsive Web Design - FreeCodeCamp</div>
                <div>Sep 2023 - Apr 2024</div>
              </div>
              <div className="text-sm text-zinc-500 py-1">
                Mastered HTML, CSS, and responsive design through building
                hands-on web apps.
              </div>
            </div>
            <div className="mb-4 block lg:mb-2 lg:hidden">
              <div className="flex flex-wrap justify-between font-bold">
                <div>The Complete JavaScript Course - Udemy</div>
                <div>Jan 2023 - May 2023</div>
              </div>
              <div className="text-sm text-zinc-500 py-1">
                Learned fundamental concepts and acquired practical experience
                by building projects.
              </div>
            </div>
          </div>
          <div>
            <CredCard
              cardName="Professional Experience"
              company="Software Engineer @ BootLabs"
              years="July 2024 - Present"
              description="I build scalable web applications and contribute to various client projects. My work focuses on developing robust backend systems and seamless frontend experiences."
              color="bg-custom-testing"
            />
            <CredCard
              cardName="Professional Training"
              company="Zen Class Full Stack Developer Program"
              years="Feb 2023 - Dec 2023"
              description="Acquired a comprehensive skill set in both front-end and back-end development."
              color="bg-custom-cloud"
            />
            <CredCard
              cardName="Experience"
              company="Intrapreneur - Anees Gunny Merchant"
              years="Dec 2017 - May 2023"
              description="Improved company operations and growth by coordinating teams and analyzing dynamic market data, Karnataka"
              color="bg-custom-testing"
            />
            <CredCard
              cardName="Education"
              company="Bachelor of Engineering in Mechatronics"
              years="Aug 2013 - May 2017"
              description="Nehru Institute of Engineering and Technology, Coimbatore, TamilNadu"
              color="bg-custom-teal"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Credentials;

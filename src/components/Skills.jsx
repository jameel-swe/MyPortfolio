const Skills = () => {
  return (
    <div
      className="border-2 border-custom-sand bg-white rounded-[30px] my-8"
      id="skills"
    >
      <div className="px-5 py-4">
        <h3 className="text-2xl font-bold text-custom-red">My Arsenals</h3>
        <div className="py-2">
          <h4 className="text-base font-bold mb-2">Programming Languages</h4>
          <div className="flex gap-2 font-semibold text-base flex-wrap">
            {renderSkill("TypeScript", "bg-custom-testing")}
            {renderSkill("JavaScript", "bg-custom-testing")}
            {renderSkill("Python", "bg-custom-testing")}
            {renderSkill("Kotlin", "bg-custom-testing")}
            {renderSkill("Swift", "bg-custom-testing")}
            {renderSkill("HTML/CSS", "bg-custom-testing")}
          </div>
        </div>
        <div className="py-2">
          <h4 className="text-base font-bold mb-2">Backend & Architecture</h4>
          <div className="flex gap-2 font-semibold text-base flex-wrap">
            {renderSkill("NestJS", "bg-custom-purple")}
            {renderSkill("Node.js", "bg-custom-purple")}
            {renderSkill("Express.js", "bg-custom-purple")}
            {renderSkill("Kafka", "bg-custom-purple")}
            {renderSkill("Temporal", "bg-custom-purple")}
            {renderSkill("REST APIs", "bg-custom-purple")}
            {renderSkill("Microservices", "bg-custom-purple")}
          </div>
        </div>
        <div className="py-2">
          <h4 className="text-base font-bold mb-2">Frontend & Mobile</h4>
          <div className="flex gap-2 font-semibold text-base flex-wrap">
            {renderSkill("React.js", "bg-custom-teal")}
            {renderSkill("Next.js", "bg-custom-teal")}
            {renderSkill("Zustand", "bg-custom-teal")}
            {renderSkill("TanStack Query", "bg-custom-teal")}
            {renderSkill("Tailwind CSS", "bg-custom-teal")}
            {renderSkill("Material UI", "bg-custom-teal")}
            {renderSkill("Expo (React Native Web)", "bg-custom-teal")}
          </div>
        </div>
        <div className="py-2">
          <h4 className="text-base font-bold mb-2">
            Databases & Infrastructure
          </h4>
          <div className="flex gap-2 font-semibold text-base flex-wrap">
            {renderSkill("PostgreSQL", "bg-custom-cloud")}
            {renderSkill("MongoDB", "bg-custom-cloud")}
            {renderSkill("AWS", "bg-custom-cloud")}
            {renderSkill("Docker", "bg-custom-cloud")}
            {renderSkill("CI/CD", "bg-custom-cloud")}
          </div>
        </div>
        <div className="py-2">
          <h4 className="text-base font-bold mb-2">Tools and Environments</h4>
          <div className="flex gap-2 font-semibold text-base flex-wrap">
            {renderSkill("Git", "bg-custom-lime")}
            {renderSkill("GitHub", "bg-custom-lime")}
            {renderSkill("Postman", "bg-custom-lime")}
            {renderSkill("Vercel", "bg-custom-lime")}
            {renderSkill("Netlify", "bg-custom-lime")}
            {renderSkill("Render", "bg-custom-lime")}
          </div>
        </div>
      </div>
    </div>
  );
};

const renderSkill = (name, bgColor) => (
  <span
    className={`px-4 py-1 border border-custom-sand ${bgColor} rounded-full`}
  >
    {name}
  </span>
);

export default Skills;

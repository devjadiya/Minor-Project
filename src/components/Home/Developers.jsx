"use client";

export const Developers = () => {
  const team = [
    {
      avatar: "/sarthak.jpeg",
      name: "Sarthak Khare",
      desc: "Frontend & Backend Developer",
      linkedin: "https://www.linkedin.com/in/sarthak-khare-898084253/",
    },
    {
      avatar: "/shreya.jpg",
      name: "Shreya Dwivedi",
      desc: "Database Architect",
      linkedin: "https://www.linkedin.com/in/shreya-dwivedi-494155223/",
    },
    {
      avatar: "/dev.jpeg",
      name: "Dev Jadiya",
      desc: "DevOps Engineer & Software Developer",
      linkedin: "https://www.linkedin.com/in/devjadiya/",
    },
    {
      avatar: "/aryan.png",
      name: "Aryan Parashar",
      desc: "Cyber Security Analyst & VAPT",
      linkedin: "https://www.linkedin.com/in/aryanparashar-sati/",
    },
  ];

  return (
    <section id="developer" className="py-14 w-full bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl font-semibold sm:text-4xl">
            Meet Our Team
          </h3>
          <p className="text-gray-400 mt-2">
            Talented developers, designers, and analysts behind our success.
          </p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-4 rounded-lg shadow-lg text-center"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h4 className="mt-4 text-lg font-semibold">{member.name}</h4>
              <p className="text-gray-400 text-sm">{member.desc}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 mt-2 inline-block"
              >
                LinkedIn Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

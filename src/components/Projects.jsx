export default function Projects() {
  const projects = [
    {
      title: "Boom Health",
      description:
        "A health-focused website designed to provide users with essential information and resources for maintaining their well-being. The platform features a clean and user-friendly interface, ensuring easy access to health tips, articles, and tools for tracking personal health goals.",
      link: "https://boomhealth.ae/",
    },
    {
      title: "E-Commerce App",
      description:
        "An efficient and user-friendly e-commerce application that offers a seamless shopping experience. The platform supports a wide range of products and features a secure payment system, allowing users to browse, select, and purchase items with ease.",
      link: "https://my-commerce-peach.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-12 px-16 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center font-hind">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2 font-hind">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-indigo-400 hover:text-indigo-600 font-semibold font-hind"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "This is a brief description of Project 1.",
      image: "/images/boom-img.png",
      link: "#",
    },
    {
      title: "Project 2",
      description: "This is a brief description of Project 2.",
      image: "/images/ecommerce-img.png",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center font-hind">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-hind">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-indigo-500 hover:text-indigo-700 font-semibold font-hind"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

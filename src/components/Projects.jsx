export default function Projects() {
  const projects = [
    {
      title: "Boom Health",
      description: `Boom Health is a health-focused web platform offering personalized recommendations, 
                    online consultations, and a rich library of health resources. 
                    Designed for ease of use with a responsive and intuitive interface.`,
      image: "/images/boom-img.png",
      link: "https://boomhealth.ae/",
    },
    {
      title: "E-Commerce App",
      description: `The E-Commerce App is an online shopping platform featuring a wide product range, 
                    secure payments, and user-friendly navigation. 
                    Optimized for all devices with advanced search options.`,
      image: "/images/ecommerce-img.png",
      link: "https://my-commerce-peach.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-12 px-16 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-100 mb-8 text-center font-hind">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2 font-hind">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-indigo-400 hover:text-indigo-600 font-semibold font-hind"
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

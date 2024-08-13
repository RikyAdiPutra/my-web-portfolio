export default function About() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src="/images/img1.png"
            alt="Your Name"
            className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-hind">
            About Me
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I’m a passionate developer with a love for creating interactive and
            user-friendly web applications. With a strong foundation in frontend
            technologies and a keen eye for design, I aim to bring ideas to life
            in the digital space. My journey in web development started from a
            simple curiosity, which quickly evolved into a deep-seated passion
            for building impactful web solutions.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or indulging in my love for
            photography. Let's connect and create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}

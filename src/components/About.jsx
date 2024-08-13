export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src="/images/img1.png"
            alt="Your Name"
            className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-100 mb-4 font-hind">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m a passionate developer with a love for creating interactive and
            <span className="font-semibold">
              {" "}
              user-friendly web applications
            </span>
            . With a strong foundation in
            <span className="font-semibold"> frontend technologies</span> and a
            keen eye for design, I aim to bring ideas to life in the digital
            space. My journey in web development started from a
            <span className="font-semibold"> simple curiosity</span>, which
            quickly evolved into a deep-seated passion for building impactful
            web solutions.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            When I'm not coding, you can find me exploring new technologies,
            <span className="font-semibold">
              {" "}
              contributing to open-source projects
            </span>
            , or indulging in my love for photography. Let's connect and{" "}
            <span className="font-semibold">
              create something amazing together!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

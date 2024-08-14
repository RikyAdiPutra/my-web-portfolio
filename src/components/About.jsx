export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
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
          <p className="text-lg leading-relaxed">
            I am a <span className="font-bold">dedicated web developer</span>{" "}
            with a focus on creating
            <span className="font-bold"> efficient and user-friendly</span> web
            applications. With strong experience in frontend development and a
            deep understanding of design principles, I strive to combine
            functionality with aesthetics.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I believe that{" "}
            <span className="font-bold">attention to detail</span> is key to
            creating an exceptional user experience. In every project I work on,
            I am committed to delivering the best results and always seek
            opportunities to <span className="font-bold">learn and grow</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

const Hero = () => {
  return (
    <section id="home" className="hero-section text-center d-flex align-items-center justify-content-center">
      <div className="fade-in">
        <h3 className="text-light">Hello, I'm</h3>
        <h1 className="fw-bold text-white display-4">Benediktus Pius Kanyan</h1>
        <p className="text-light fs-4 accent">Junior Developer</p>

        <a href="#projects" className="hero-btn mt-4 d-inline-block">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;

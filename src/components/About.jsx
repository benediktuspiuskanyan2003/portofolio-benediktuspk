import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="about-section container fade-in">
      <h2 className="fw-bold text-white text-center mb-4">About Me</h2>

      <div className="row align-items-center g-4">
        <div className="col-md-4 text-center">
          <img
            src={profile}
            alt="Profile"
            className="profile-img"
          />
        </div>

        <div className="col-md-8 text-light">
          <p className="fs-5">
            Saya <strong>Benediktus Pius Kanyan</strong>, seorang
            <span className="accent"> Junior Developer</span> yang fokus pada
            Frontend Development menggunakan React dan UI/UX Design.
          </p>

          <div className="social-links mt-3">
            <a href="https://github.com/benediktuspiuskanyan2003" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
            </a>
            <a href="https://wa.me/6289505642060" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp"></i>
            </a>
            <a href="https://instagram.com/bene_karafuruna_yoru.30" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/benediktus-pius-kanyan-506b1120b/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
            </a>
        </div>
        </div>  
      </div>
    </section>
  );
};

export default About;

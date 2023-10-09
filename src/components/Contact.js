const Contact = () => {
    return (
      <section id="contact" className="contact">
        <h2 className="title">Contact Me</h2>
  
        <div className="container">
          <div className="socials flex">
            <a href="">
              <i className="fa-brands fa-facebook"></i>
            </a>
  
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
  
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>
  
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
  
          <div className="email-container flex">
            <input type="text" placeholder="email address" />
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      </section>
    )
  }
  export default Contact
  
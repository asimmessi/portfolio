import profilePic from "../assets/asimm.jpg"
const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="title">About Me</h2>

      <div className="container flex">
        <div className="about-left flex">
          <img src={profilePic} alt="profile-pic" />
        </div>

        <div className="about-right">
          <h2>Asim Shrestha</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, quas
            quaerat repudiandae nulla nihil aspernatur perspiciatis labore
            possimus, nam cupiditate voluptatum dolores earum molestias in minus
            harum delectus obcaecati ex?
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            repudiandae quo debitis deleniti saepe minus molestiae vero beatae
            natus corrupti!
          </p>

          <p>Sydney, Australia</p>

          <div>
            <div className="tag">Interest</div>
            <div className="flex interests">
              <span>Coding</span>
              <span>Football</span>
              <span>Reading</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About

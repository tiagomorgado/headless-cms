import heroImg from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nam quidem molestiae totam. Saepe dicta suscipit, error rerum nobis amet inventore reiciendis magnam quam quia, accusamus ab. Ratione, sit architecto.
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and the browser" className="img"/>
            </div>
        </div>
    </section>
  )
}
export default Hero
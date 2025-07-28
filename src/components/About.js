import fatria from "../img/fatria.jpg"

const About = () => {
    return (
        <div className="description">
            <div className="title">
                <div className="hide">
                    <h2>We work to make</h2>
                </div>
                <div className="hide">
                    <h2>your <span>dreams</span></h2>
                </div>
                <div className="hide">
                    <h2>come true.</h2>
                </div>
                <p>Need programming help? Our expert team is here to provide solutions for web development, software, and more. Contact us today for reliable, efficient coding support.</p>
                <button>Contact us</button>
            </div>
            <div className="image">
                <img alt="" src={fatria} />
            </div>
        </div>

    )
}

export default About;
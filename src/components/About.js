//images
import fatria from "../img/fatria.jpg"
//style
import { AboutSection, Description, Image, Hide } from "../styles";

const About = () => {
    return (
        <AboutSection>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span></h2>
                    </Hide>
                    <Hide>
                        <h2>come true.</h2>
                    </Hide>
                    <p>Need programming help? Our expert team is here to provide solutions for web development, software, and more. Contact us today for reliable, efficient coding support.</p>
                    <button>Contact us</button>
                </div>
            </Description>
            <Image >
                <img alt="" src={fatria} />
            </Image >
        </AboutSection>
    )
}

export default About;
//export components
import About from "../components/About";
import Service from "../components/Service";
import Faq from "../components/Faq";
//style
import GlobalStyle from "../components/GlobalStyle";

const AboutPage = () => {
    return (
        <div className="aboutpage">
            <GlobalStyle />
            < About />
            <Service />
            <Faq />
        </div>
    )
}

export default AboutPage;
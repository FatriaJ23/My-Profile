//style
import styled from "styled-components";
import { AboutSection } from "../styles";

const Faq = () => {
    return (
        <FaqSection>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="questions">
                <h4>How Do I Start?</h4>
                <div className="answar">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, maiores?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="questions">
                <h4>Daily Schedule</h4>
                <div className="answar">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, maiores?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="questions">
                <h4>Different Payment Methods?</h4>
                <div className="answar">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, maiores?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="questions">
                <h4>What Product Do You Offer?</h4>
                <div className="answar">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, maiores?</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </FaqSection>
    )
}

const FaqSection = styled(AboutSection)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background:#cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width:100%;
    }
    .question{
    padding: 3rem 0rem;
    cursor: pointer;
    }
    .answer{
    padding:2rem 0rem;
    p{
        padding:1rem 0rem;
    }
    }
`

export default Faq;
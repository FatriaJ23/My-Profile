//render out the icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faDiagramNext, faMoneyBillWave, faUsers } from '@fortawesome/free-solid-svg-icons';
import product from "../img/product.jpg";
//styles
import styled from "styled-components";
import { AboutSection, Description, Image, Hide } from "../styles";


const Service = () => {
    return (
        <Services>
            <Description>
                <h2>
                    High <span>quality</span> services
                </h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faClock} />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem, ipsum.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faDiagramNext} />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem, ipsum.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faMoneyBillWave} />
                            <h3>Pro Grade Gear</h3>
                        </div>
                        <p>Lorem, ipsum.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faUsers} />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem, ipsum.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={product} />
            </Image>
        </Services>
    )
}

const Services = styled(AboutSection)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width:70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display:flex;
    flex-wrap:wrap;
`

const Card = styled.div`
    flex-basis:20rem;
    .icon{
        display:flex;
        align-items:center;
        h3{
            margin-left:1 rem;
            background: white;
            color:black;
            padding:1rem;
        }
    }
`


export default Service;
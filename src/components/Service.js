//render out the icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faDiagramNext, faMoneyBillWave, faUsers } from '@fortawesome/free-solid-svg-icons';
import product from "../img/product.jpg";


const Service = () => {
    return (
        <div className="service">
            <div className="description">
                <h2>
                    High <span>quality</span> services
                </h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faClock} />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit exercitationem doloribus laboriosam nobis, vitae cupiditate necessitatibus odit eveniet in aut aperiam sunt. Maxime ducimus rerum veniam labore maiores. Molestias.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faDiagramNext} />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit exercitationem doloribus laboriosam nobis, vitae cupiditate necessitatibus odit eveniet in aut aperiam sunt. Maxime ducimus rerum veniam labore maiores. Molestias.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMoneyBillWave} />
                            <h3>Pro Grade Gear</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit exercitationem doloribus laboriosam nobis, vitae cupiditate necessitatibus odit eveniet in aut aperiam sunt. Maxime ducimus rerum veniam labore maiores. Molestias.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faUsers} />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit exercitationem doloribus laboriosam nobis, vitae cupiditate necessitatibus odit eveniet in aut aperiam sunt. Maxime ducimus rerum veniam labore maiores. Molestias.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={product} />
            </div>
        </div>
    )
}

export default Service;
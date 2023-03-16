import { Link } from "react-router-dom";
import styles from "./style.module.scss";


const CharacterCards = ({ id, name, gender, birth }) => {
    
    return (
        <div
            key={id}
            className={`col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark`}
        >
            <Link className={`${styles.link}`} to={`/characters/${id}`} key={id} >
                <div className={`${styles.card} d-flex flex-column justify-content-center`} >
                    <img className={`${styles.img} img-fluid`} src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" />
                    <div className={`${styles.content}`}>
                        <div className="fs-5 fw-bold mb-4 text-center">{name}</div>
                        <div className="">
                            <div className="fw-normal">
                                <span className="fw-semibold fs-5 pe-1">Gender:</span>
                                <span className="fs-6">{gender}</span>
                            </div>
                            <div className="fw-normal">
                                <span className="fw-semibold fs-5 pe-1">Year of Birth:</span>
                                <span className="fs-6">{birth}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )

}

export default CharacterCards
import { Link } from "react-router-dom";
import styles from "./style.module.scss";


const CharacterCard = ({ results }) => {
    let display;

    if (results) {
        display = results.map((item, index) => {
            let { name, gender, birth_year, url } = item;

            let id = url.split("/").at(-2)

            return (
                <div
                    key={index}
                    className={`col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark`}
                >
                    <div className={`${styles.card} d-flex flex-column justify-content-center`} >
                        <div className={`${styles.content}`}>
                            <Link className={`${styles.link}`} to={`/characters/${id}`} key={id} >
                                <div className="fs-5 fw-bold mb-4 text-center">{name}</div>
                                <div className="">
                                    <div className="fw-normal">
                                        <span className="fw-semibold fs-5 pe-1">Gender:</span>
                                        <span className="fs-6">{gender}</span>
                                    </div>
                                    <div className="fw-normal">
                                        <span className="fw-semibold fs-5 pe-1">Year of Birth:</span>
                                        <span className="fs-6">{birth_year}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        });
    }
    


    return <div className="row">{display}</div>;
}

export default CharacterCard
import styles from "./style.module.scss";

const CharacterId = ({ name, hair, skin, mass, height, eye }) => {

    return (
        <div className={`${styles.card} d-flex flex-column gap-3 mx-3`}>
            <h1 className="text-center pt-3">{name}</h1>
            <div className='content mx-4'>
                <div className="mt-1">
                    <span className="fw-bold">Skin Color: </span>
                    <span>{skin}</span>
                </div>
                <div className="mt-1">
                    <span className="fw-bold">Hair Color: </span>
                    <span>{hair}</span>
                </div>
                <div className="mt-1">
                    <span className="fw-bold">Eye Color: </span>
                    <span>{eye}</span>
                </div>
                <div className="mt-1">
                    <span className="fw-bold">Height: </span>
                    <span>{height}</span>
                </div>
                <div className="mt-1 mb-3">
                    <span className="fw-bold">Mass: </span>
                    <span>{mass}</span>
                </div>
            </div>
        </div>

    )
}

export default CharacterId
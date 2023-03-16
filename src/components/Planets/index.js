import styles from "./style.module.scss";

const Planets = ({ population, climate, diameter, gravity, terrain, created, name }) => {
    return (
        <div className={`${styles.card} d-flex flex-column gap-3 mx-3 mt-4`}>
            <h1 className="text-center pt-3">Planet's Name: {name}</h1>
            <div className='content mx-4'>
                <div className="mt-1">
                    <span className="fw-bold">Population: </span>
                    <span>{population}</span>
                </div>
                <div className="mt-1">
                    <span className="fw-bold">Climate: </span>
                    <span>{climate}</span>
                </div>
                <div className="mt-1">
                    <span className="fw-bold">Diameter: </span>
                    <span>{diameter}</span>
                </div>
                <div className="mt-1">
                    <span className="fw-bold">Gravity: </span>
                    <span>{gravity}</span>
                </div>
                <div className="mt-1">
                    <span className="fw-bold">Terrain: </span>
                    <span>{terrain}</span>
                </div>
                <div className="mt-1 mb-3">
                    <span className="fw-bold">Created: </span>
                    <span>{created}</span>
                </div>
            </div>
        </div>
    )
}

export default Planets
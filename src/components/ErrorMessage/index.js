import styles from "./style.module.scss";

const ErrorMessage = () => {
    
	const clickHandler = () => {
        window.location.reload()
	}

    return (
        <div className={`${styles.error}`}>
            <h3>Ooops!</h3>
            <p>Something went wrong, sorry about that.</p>
            <button className={`${styles.btn}`} onClick={clickHandler}>Let's try again</button>
        </div>
    )
}

export default ErrorMessage
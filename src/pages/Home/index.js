import { useState, useEffect } from "react";
import CharacterCard from "../../components/CharacterCard";
import Pagination from "../../components/Pagination";
import Navbar from "../../components/Navbar";
import { enhancedFetch } from "../../services/Http";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";


const BASE_API_URL = `https://swapi.dev/api`;


const Home = () => {
    const [people, setPeople] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { results } = people;


    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await enhancedFetch('GET', BASE_API_URL + `/people/?page=${page}`)
                setPeople(response)
                setLoading(true)
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchPeople()
    }, [page])


    return (
        <div className="Home">
            <Navbar />
            <h1 className="text-center mb-3">Characters</h1>
            <div className="container">
                <div className={`row justify-content-center`}>
                    <div className="col-lg-8 col-12">
                        <div className="row">
                            {loading && <Loading /> }
                            {error && <ErrorMessage /> }
                            <CharacterCard results={results} />
                        </div>
                    </div>
                </div>
            </div>
            <Pagination
                pageNumber={page}
                updatePageNumber={setPage}
            />
        </div>
    )
}

export default Home
import { useState, useEffect } from "react";
import { enhancedFetch } from "../../services/Http";
import { get, set } from "../../services/CreateStorage";

import CharacterCards from "../../components/CharacterCards";
import Pagination from "../../components/Pagination";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const BASE_API_URL = `https://swapi.dev/api`;


const Home = () => {

    const [people, setPeople] = useState([])
    const [favorites, setFavorites] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        const fetchPeople = async () => {
            try {
                setLoading(true)
                const response = await enhancedFetch(BASE_API_URL + `/people/?page=${page}`)
                setPeople(response.results)
            } catch {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchPeople()

    }, [page])


    useEffect(() => {
        const characterFavorites = get('star-wars-character-favorites')

        if (characterFavorites) {
            setFavorites(characterFavorites);
        }
    }, [])

    const saveToLocalStorage = (items) => {
        set('star-wars-character-favorites', items);
    }


    const filteredPeople = people.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    )


    const addFavoriteCharacter = (people) => {
        const newFavoriteList = [...favorites, people];
        setFavorites(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
        console.log('fav', newFavoriteList)
    }



    const renderCharacter = () => {

        if (loading) {
            return <Loading />
        }

        if (error) {
            return <ErrorMessage />
        }

        return (
            filteredPeople.map(people => {
                let id = people.url.split("/").at(-2)
                return (
                    <CharacterCards
                        key={id}
                        id={id}
                        name={people.name}
                        handleFavouritesClick={addFavoriteCharacter}
                    />
                );
            })
        )

    }



    return (
        <div className="Home">
            <Navbar />
            <div className="container">
                <div className="col-lg-6 col-md-6 m-auto pb-5 pt-3">
                    <form role="search">
                        <input
                            className="form-control form-control-lg border-0 shadow"
                            type="search"
                            placeholder="Search Character..."
                            aria-label="Search"
                            onChange={e => setSearch(e.target.value)}
                        />
                    </form>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-12">
                        <div className="row">
                            {renderCharacter()}
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
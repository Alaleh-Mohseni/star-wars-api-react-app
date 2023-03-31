import { useState, useEffect } from "react";
import { enhancedFetch } from "../../services/Http";
import { retrieveList } from "../../actions";
import { useParams } from "react-router-dom";
import CharacterDetails from "../../components/CharacterDetails";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";


const BASE_API_URL = `https://swapi.dev/api`;


const Characters = () => {

  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { id } = useParams()


  useEffect(() => {

    const fetchCharacter = async () => {
      try {
        setLoading(true)
        const response = await enhancedFetch(BASE_API_URL + `/people/${id}`)
        setPeople(response)
        const dataFilms = await retrieveList(response.films)
        setFilms(dataFilms)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacter()

  }, [id])


  const renderDetails = () => {

    if (loading) {
      return <Loading />
    }

    if (error) {
      return <ErrorMessage />
    }

    return (
      <CharacterDetails
        name={people.name}
        gender={people.gender}
        hair={people.hair_color}
        skin={people.skin_color}
        mass={people.mass}
        height={people.height}
        eye={people.eye_color}
        id={id}
        films={films}
      />
    )

  }


  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {renderDetails()}
        </div>
      </div>
    </div>
  );
};

export default Characters
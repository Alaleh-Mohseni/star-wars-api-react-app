import { useState, useEffect } from "react";
import { enhancedFetch } from "../../services/Http";
import { useParams } from "react-router-dom";
import CharacterIds from "../../components/CharacterIds";
import Navbar from "../../components/Navbar";
import Planets from "../../components/Planets";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";


const BASE_API_URL = `https://swapi.dev/api`;


const Characters = () => {

  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { characterId } = useParams()


  useEffect(() => {

    const fetchCharacter = async () => {
      try {
        setLoading(true)
        const response = await enhancedFetch('GET', BASE_API_URL + `/people/${characterId}`)
        setPeople(response)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }


    const fetchPlanet = async () => {
      try {
        setLoading(true)
        const response = await enhancedFetch('GET', BASE_API_URL + `/planets/${characterId}`)
        setPlanets(response)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }


    fetchCharacter()
    fetchPlanet()

  }, [characterId])

  console.log('people', people)
  console.log('planets', planets)


  const renderDetails = () => {

    if (loading) {
      return <Loading />
    }

    if (error) {
      return <ErrorMessage />
    }


    return (
      <div className="col-lg-6 col-md-6 my-5">
        {/* <img className={`img-fluid`} src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`} alt="" /> */}
        < CharacterIds
          name={people.name}
          hair={people.hair_color}
          skin={people.skin_color}
          mass={people.mass}
          height={people.height}
          eye={people.eye_color}
        />
        <Planets
          population={planets.population}
          name={planets.name}
          climate={planets.climate}
          diameter={planets.diameter}
          created={planets.created}
          gravity={planets.gravity}
          terrain={planets.terrain}
        />
        {/* <img className={`img-fluid`} src={`https://starwars-visualguide.com/assets/img/planets/${characterId}.jpg`} alt="" /> */}
      </div>
    )
  }


  return (
    <div>
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center">
        {renderDetails()}
      </div>
    </div>
  );
};

export default Characters
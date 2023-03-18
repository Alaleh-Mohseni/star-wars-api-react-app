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
  const { id } = useParams()



  useEffect(() => {

    const fetchCharacter = async () => {
      try {
        setLoading(true)
        const response = await enhancedFetch('GET', BASE_API_URL + `/people/${id}`)
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
        const response = await enhancedFetch('GET', BASE_API_URL + `/planets/${id}`)
        setPlanets(response)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }


    fetchCharacter()
    fetchPlanet()

  }, [id])



  const renderDetails = () => {

    if (loading) {
      return <Loading />
    }

    if (error) {
      return <ErrorMessage />
    }


    return (
      <div className="col-lg-6 col-md-6 my-5">
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
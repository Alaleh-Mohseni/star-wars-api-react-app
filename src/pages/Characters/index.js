import { useState, useEffect } from "react";
import { enhancedFetch } from "../../services/Http";
import { useParams } from "react-router-dom";
import CharacterId from "../../components/CharacterId";
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

  const { name, hair_color, skin_color, mass, height, eye_color } = people;
  const { population, climate, diameter, gravity, terrain, created } = planets;


  useEffect(() => {

    const fetchCharacter = async () => {
      try {
        const response = await enhancedFetch('GET', BASE_API_URL + `/people/${characterId}`)
        setPeople(response)
        setLoading(true)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }


    const fetchPlanet = async () => {
      try {
        const response = await enhancedFetch('GET', BASE_API_URL + `/planets/${characterId}`)
        setPlanets(response)
        setLoading(true)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }


    fetchCharacter()
    fetchPlanet()

  }, [characterId])


  return (
    <div>
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center">
        {loading && <Loading />}
        {error ? <ErrorMessage /> : 
        <div className="col-lg-6 col-md-6 my-5">
          <CharacterId
            name={name}
            hair={hair_color}
            skin={skin_color}
            mass={mass}
            height={height}
            eye={eye_color}
          />
          <Planets
            population={population}
            climate={climate}
            diameter={diameter}
            created={created}
            gravity={gravity}
            terrain={terrain}
          />
        </div>}
      </div>
    </div>
  );
};

export default Characters
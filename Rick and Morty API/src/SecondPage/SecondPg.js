import React, { useEffect, useState } from 'react'
import './SecondPg.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams} from 'react-router'


function SecondPg() {


    const { id } = useParams()


    const [info, setInfo] = useState({})
    const [episode, setEpisode] = useState([])

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then((result) => {
                console.log(result)
                setInfo(result.data)
                
            })
    }, [])


    const gender = info.gender
    if (gender === 'Female') {
        return (
            <div>
                <div className="secondPageDiv">
                    <div>
                        <img src={info.image} className="infosIMg"></img>
                    </div>
                    <div>
                        Name: {info.name}
                    </div>
                    <div>
                        Species: {info.species}
                    </div>
                    <div>
                        Status: {info.status}
                    </div>
                    <div>
                        Gender: <b className="genderFem"> {info.gender} </b>
                    </div>
                    <div>
                        Location: {info.location.name }
                    </div>
                   <div>
                       
                   </div>
                </div>
                <div>
                    <Link to={`/`} className="secondPageButton">
                        <button >Go back to main Page</button>
                    </Link>
                </div>
            </div>
        )
    }
    else if(gender === 'Male')
    {
        return (
            <div>
                <div className="secondPageDiv">
                    <div>
                        <img src={info.image} className="infosIMg"></img>
                    </div>
                    <div>
                        Name: {info.name}
                    </div>
                    <div>
                        Species: {info.species}
                    </div>
                    <div>
                        Status: {info.status}
                    </div>
                    <div>
                        Gender: <b className="genderMale">{info.gender}</b>
                    </div>
                   <div>
                        Location: {info.location.name }
                    </div>
                </div>
                <div>
                    <Link to={`/`} className="secondPageButton">
                        <button >Go back to main Page</button>
                    </Link>
                </div>
            </div>
        )
    }
    else{
        return (
            <div>
                <div className="secondPageDiv">
                    <div>
                        <img src={info.image} className="infosIMg"/>
                    </div>
                    <div>
                        Name: {info.name}
                    </div>
                    <div>
                        Species: {info.species}
                    </div>
                    <div>
                        Status: {info.status}
                    </div>
                    <div>
                        Gender: <b className="genderNeut">{info.gender}</b>
                    </div>
                   
                </div>
                <div>
                    <Link to={`/`} className="secondPageButton">
                        <button >Go back to main Page</button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default SecondPg
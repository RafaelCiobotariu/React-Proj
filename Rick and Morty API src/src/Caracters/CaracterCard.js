import React from 'react'
import { Link } from 'react-router-dom'
import './caracter.css'


const CaracterCard = (props) => {
    
    return (

        <div className="card">
            <Link to={`${props.result.id}`} className="linkedCard">
                <div>
                    <img src={props.result.image} alt="caracter"></img>
                </div>
                <div className="nume">
                    {props.result.name}
                </div>
                <div className="status">
                    {props.result.status}
                </div>
            </Link>
        </div>
    )

}

export default CaracterCard
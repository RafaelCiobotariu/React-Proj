import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CaracterCard from './CaracterCard'
import './caracter.css'
export default function CaracterList() {

    const url="https://rickandmortyapi.com/api/character/"
    const [info, setInfo] = useState({})
    const [caracter, setCaracter] = useState([])
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)


    useEffect(() => {
        axios.get(`${url}?page=${page}&name=${search}`)
            .then((result) => {
                console.log(result.data.results)
                setInfo(result.data.info)
                setCaracter(result.data.results)
                
            })
            .catch((error) => {
                console.log(error)
                setPage(1)
            })

        
    }, [search, page])



    const nextButton = (event) => {
        event.preventDefault()
        if (page < info.pages) {
            setPage(page + 1)
        }
        else {
            setPage(1)
        }
    }

    const prevButton = (event) => {
        event.preventDefault()
        if (page > 1) {
            setPage(page - 1)
        }
        else {
            setPage(info.pages)
        }
    }


    return (
        <div>
            <header>
                <div className="title">Rick and morty API</div>
                <div className="pages">{page}/{info.pages}</div>
                <input onChange={(e) => {
                    setSearch(e.target.value)
                }}
                    value={search}
                    type="text" />


            </header>

            <div className="list">
                {caracter.map((rezultat) => {
                    return (
                        <CaracterCard key={rezultat.id} result={rezultat} />
                    )
                })}
            </div>

            <div className="buttons">
                <button onClick={(event) => { prevButton(event) }}>
                    Prev Page
                </button>
                <div className="pages">
                    {page}/{info.pages}
                </div>
                <button onClick={(event) => { nextButton(event) }}>
                    Next Page
                 </button>
            </div>

        </div>
    )

}

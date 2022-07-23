import { useEffect, useReducer, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { Back } from "../components/buttons/Back/Back"
import { ENDPOINT } from "../libs/const"

import './Add.css'

const initialState = {
    title: "",
    author: "",
    isbn: "",
    cover_url: "",
    availableAt: "",
    genre: "",
    publisher: "",
    year_of_publication: "",
    language: "",
    format: "",
    plot: "",
    location: {
        data: {
            id: 0,
        }
    }
}

const reducer = (state, action) => {
    switch(action.type){
        case "UPDATE_TITLE":
            return { ...state, title: action.payload }
        case "UPDATE_AUTHOR":
            return { ...state, author: action.payload }
        case "UPDATE_ISBN":
            return { ...state, isbn: action.payload }
        case "UPDATE_COVER":
            return { ...state, cover_url: action.payload }
        case "UPDATE_GENRE":
            return { ...state, genre: action.payload }
        case "UPDATE_PUBLISHER":
            return { ...state, publisher: action.payload }
        case "UPDATE_YEAR":
            return { ...state, year_of_publication: action.payload }
        case "UPDATE_LANGUAGE":
            return { ...state, language: action.payload }
        case "UPDATE_FORMAT":
            return { ...state, format: action.payload }
        case "UPDATE_PLOT":
            return { ...state, plot: action.payload }
        case "UPDATE_LOCATION":
            return { ...state, location:{
                data:{
                        id: parseInt(action.payload)
                }
            } }
    }
}

export const Add = ({location}) => {
    const [active, setActive] = useState(false)
    const navigate = useNavigate()
    const [state, dispatch] = useReducer(reducer, initialState)
    const [locations, setLocations] = useState([])
    
    useEffect(() => {
        const getLocations = async () => {
            const response = await fetch("http://localhost:1337/api/locations?populate=*")
            const {data} = await response.json()
            setLocations(data)
        }

        return getLocations
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        // const hasErrors = formValidation(state)

            try{
                const response = await fetch("http://localhost:1337/api/books?populate=*", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({data: state}),
                })

                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.log(error)
            } finally {
                navigate(-1)
            }
    }

    return(
        <main className="add-page">

            <Back url="/" />

            <form className="my-3" onSubmit={handleSubmit} noValidate>
                {console.log(active)}

                <h3>Dati obbligatori*</h3>
                <div className="form-section">

                    <div className="input-box">
                        <input 
                            type="text"
                            name="title"
                            id="title"
                            required
                            value={state.title}
                            onChange={(event) => {
                                dispatch({
                                    type: "UPDATE_TITLE",
                                    payload: event.target.value,
                                })
                                setActive(true)
                                console.log(active)
                            }}
                            className={setActive ? 'active' : 'not-active'}
                        />
                        <label htmlFor="title">Titolo*</label>
                    </div>

                    <div className="input-box">
                        <input 
                            type="text"
                            name="author"
                            id="author"
                            required
                            value={state.author}
                            onChange={(event) => {
                                dispatch({
                                    type: "UPDATE_AUTHOR",
                                    payload: event.target.value,
                                })
                            }}
                        />
                        <label htmlFor="author">Autore*</label>
                    </div>

                    <div className="input-box">
                        <input 
                            type="text"
                            name="isbn"
                            id="isbn"
                            required
                            value={state.isbn}
                            onChange={(event) => {
                                dispatch({
                                    type: "UPDATE_ISBN",
                                    payload: event.target.value,
                                })
                            }}
                        />
                        <label htmlFor="isbn">Codice ISBN*</label>
                    </div>

                    <div className="input-box">
                        <input 
                            type="text"
                            name="cover"
                            id="cover"
                            required
                            value={state.cover_url}
                            onChange={(event) => {
                                dispatch({
                                    type: "UPDATE_COVER",
                                    payload: event.target.value,
                                })
                            }}
                        />
                        <label htmlFor="cover">Copertina (url)*</label>
                    </div>

                </div>

                <h3>Dati opzionali</h3>
                <div className="form-section">

                    <div className="form-sub-section">
                        <div className="input-box">
                            <input 
                                type="text"
                                name="genre"
                                id="genre"
                                required
                                value={state.genre}
                                onChange={(event) => {
                                    dispatch({
                                        type: "UPDATE_GENRE",
                                        payload: event.target.value,
                                    })
                                }}
                            />
                            <label htmlFor="genre">Genere</label>
                        </div>
                        
                        <div className="input-box">
                            <input 
                                type="text"
                                name="publisher"
                                id="publisher"
                                required
                                value={state.publisher}
                                onChange={(event) => {
                                    dispatch({
                                        type: "UPDATE_PUBLISHER",
                                        payload: event.target.value,
                                    })
                                }}
                            />
                            <label htmlFor="publisher">Editore</label>
                        </div>

                        <div className="input-box">
                            <input 
                                type="text"
                                name="year_of_publication"
                                id="year_of_publication"
                                required
                                value={state.year_of_publication}
                                onChange={(event) => {
                                    dispatch({
                                        type: "UPDATE_YEAR",
                                        payload: event.target.value,
                                    })
                                }}
                            />
                            <label htmlFor="year_of_publication">Anno di pubblicazione</label>
                        </div>

                        <div className="input-box">
                            <input 
                                type="text"
                                name="language"
                                id="language"
                                required
                                value={state.language}
                                onChange={(event) => {
                                    dispatch({
                                        type: "UPDATE_LANGUAGE",
                                        payload: event.target.value,
                                    })
                                }}
                            />
                            <label htmlFor="language">Lingua</label>
                        </div>

                        <div className="input-box">
                            <input 
                                type="text"
                                name="format"
                                id="format"
                                required
                                value={state.format}
                                onChange={(event) => {
                                    dispatch({
                                        type: "UPDATE_FORMAT",
                                        payload: event.target.value,
                                    })
                                }}
                            />
                            <label htmlFor="format">Formato</label>
                        </div>

                        <div className="input-box">
                            <select 
                                name="location"
                                id="location" 
                                value={state.location.data.id}
                                onChange={(event) => {
                                    dispatch({
                                        type: "UPDATE_LOCATION",
                                        payload: event.target.value,
                                    })
                                }}
                            >
                                <option value="">Seleziona un locale</option>
                                {locations.map((location, index) => (
                                    <option 
                                        key={index}
                                        value={location.id}
                                    >
                                        {location.attributes.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>
                    
                    <div className="input-box">
                        <textarea 
                            type="text"
                            name="plot"
                            id="plot"
                            required
                            value={state.plot}
                            onChange={(event) => {
                                dispatch({
                                    type: "UPDATE_PLOT",
                                    payload: event.target.value,
                                })
                            }}
                        />
                        <label htmlFor="plot">Trama</label>
                    </div>

                </div>
                
                <button>Aggiungi libro</button>
                
            </form>
        </main>
    )
}
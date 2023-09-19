import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom"
import{getVideogameId}from "../../redux/actions/index"
import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import "./detail.style.css"

function Delail(){

const {id}= useParams();
const disptch = useDispatch();
const videoGameDetail = useSelector(state=>state.videogameId)
useEffect(()=>{
    disptch(getVideogameId(id));
},[disptch,id])

// valido si el es un array para saber si hay error:
if (!videoGameDetail) {
    return <div>Cargando....</div>;
    
}
    return(
        <div className="Detail_component">
            <h1>estamos en el Detail</h1>

            <p>ID: {videoGameDetail.id}</p>
            <p>name: {videoGameDetail.name}</p>
            <img className="image" src={videoGameDetail.image} alt={videoGameDetail.name} />
            <p>plataforma: {videoGameDetail.platformNa.join(', ')}</p>
            <p>{videoGameDetail.description}</p>
            <p>fecha :{videoGameDetail.released}</p>
            <p>rating: {videoGameDetail.rating}</p>
            <p>genre: {videoGameDetail.genreNa.join(', ')}</p>
        
                <Link to={"/home/"}>
                <button >ir al home</button>
                </Link>
        </div>
    )
}


export default Delail ;
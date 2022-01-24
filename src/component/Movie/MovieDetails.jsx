import React, { useState, useEffect } from "react";
import { useParams ,Link} from "react-router-dom";
import axiosInstance from './../axiosConfig/axiosConfig';
import {useDispatch,useSelector} from 'react-redux';
import changeMovieDetailes from '../../store/actions/movieDetails'

const MovieDetails=()=>{

     const params=useParams();
     const [movie,setMovie]=useState({});
    // const image='https://image.tmdb.org/t/p/w500'
    //const movie= useSelector((state) => state.movieDetails);
    //const dispatch=useDispatch();

     useEffect(()=>{

        //dispatch(changeMovieDetailes(params.id))

        axiosInstance
        .get(`/${params.id}?api_key=11150438bab8902b7d497b7264dcd2ba&language=en-US/`)
        .then((res)=>{setMovie(res.data)
            console.log(params.id)
       
        })
        .catch((err) => console.log(err));
     },[]);
    return(
        
        <div key={movie.id} className="col-8 shadow-lg p-1 mb-5 bg-body rounded text-center mx-auto mt-3" style={{ width: '60%' , height:'50%'}}>

        <h1 className="mt-3">Movie Details</h1>
        <h2>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  style={{ width: '90%' , height:'30rem'}} alt="" />
        <h4 className="mt-3">Overview: </h4>
        <p className="p-3"> {movie.overview}`</p>
        <h6>{`Original Language : ${movie.original_language} `}</h6>
        <h5> Rate : {movie.vote_average}</h5>
             <Link className="page-link  fs-1" to="/" aria-label="Previous"><span aria-hidden="true">&laquo;</span></Link>
        </div>
            )
}
export default MovieDetails;
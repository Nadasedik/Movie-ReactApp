
import { useState, useEffect ,useContext } from "react";
import { Link } from "react-router-dom";
import axiosInstance from './../axiosConfig/axiosConfig'
import {Card,Button,FormControl,Form} from 'react-bootstrap';
import './MovieStyle.css'
import {LanguageContext } from './../../Context/LanguageContext'
import {useDispatch, useSelector} from 'react-redux';
import {AddFav , RemoveFav} from './../../store/actions/FavAction';
import axios from 'axios'

const Movies = () => {

   const image='https://image.tmdb.org/t/p/w500'
   const [movie, setMovie] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const{lang,setLang}=useContext(LanguageContext);
   const dispatch = useDispatch();
   const selector = useSelector((state) => state.Fav);

   useEffect(() =>
  
   axiosInstance.get("/popular",
       {
           params: {
               api_key: '11150438bab8902b7d497b7264dcd2ba',
               language: 'en-US',
               page: currentPage
           }
       })
       .then((res) => setMovie(res.data.results))
       .catch((err) => console.log(err))
,[currentPage]);
 


function goToPreviousPage() {
    if(currentPage>1)
     setCurrentPage(currentPage-1);
  }
  function goToNextPage() {  
    setCurrentPage(currentPage+1);
  }

    var [searchInput,setSearch]=useState("");

    const changeHandler=(e)=>{
        setSearch(e.target.value);
      }
  

    const toggleLang=()=>{
        setLang(lang=== "en" ? "ar" : "en")
    }

   
    let IsClicked = (id) => {
        return selector.find((el) => el.id == id)?true:false;
        
    }
  
    function addToFav  (e,mov)
    {
        if(e.target.className==='fas fa-star text-dark text-center fs-3 mt-3')
        {
            dispatch(AddFav(mov));

            e.target.className = 'fas fa-star text-warning text-center fs-3 mt-3';
             console.log("added")
        }
        else
        {
            dispatch (RemoveFav(mov))
            e.target.className = 'fas fa-star text-dark text-center fs-3 mt-3';
            console.log("removed")
        }
    }
   

      useEffect(() =>{
          console.log(searchInput)
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=11150438bab8902b7d497b7264dcd2ba& language=en-US&query=${searchInput}`)
            .then((res) => {
                setMovie(res.data.results)
            
             })
            .catch((err) => console.log(err))
        },[searchInput])


    
    
    
    return (
        <div dir={lang === "en" ? "ltr" : "rtl"}>
            <button className="btn btn-danger float-end me-4" onClick={()=>{toggleLang();}}>Toggle</button>
            <h1 className="mt-3 mb-4 ms-2">Movies <i className="fas fa-video text-secondary fs-3"></i></h1>
            
            <h2 className="text-center">{lang}</h2>
            <Form className="d-flex w-75 mb-4 mx-auto">
           <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>{changeHandler(e)}}
        />
        <Button variant="outline-info">Search</Button>
    </Form>
            <div className="container">
            <div className="row justify-content-center">
                {movie.map((mov,index) => {
                   
                    return (
                        
                        <div className="col-md-4  align-self-center " key={index}> 
                        <Card  className="shadow-lg p-1 mb-5 bg-body rounded " >
                            <img src={`${image}${mov.poster_path}`} alt="" className="imges"/>

                            {IsClicked(mov.id) == false ? (
                            <i className="fas fa-star text-dark text-center fs-3 mt-3" onClick={(e)=>{addToFav(e,mov)}}></i>
                             ):
                     (<i className="fas fa-star text-warning text-center fs-3 mt-3" onClick={(e)=>{addToFav(e,mov)}}></i>
                           )}

                           {/* {selector.map((item)=>item.id).indexOf(mov.id)>-1} */}

                            <Card.Body className="cards">
                                <Card.Title>{mov.title}</Card.Title>
                                
                                <Card.Text>
                                   Rate : {mov.vote_average}
                                </Card.Text>
                                
                            </Card.Body>
                            
                            <div key={mov.id}>
                             <Link to={`/MovieDetails/${mov.id}`}>
                             <Button variant="info text-light mb-3 mt-0 mx-5">Show Details</Button>
                             </Link>
                            </div>
                        </Card>
                        </div> 
                    )
                   
                }
                
                )}
                </div>
               <div className="  mb-5">
               <button type="button" className="btn btn-secondary float-start ms-5 px-5 py-2 mb-5" onClick={goToPreviousPage} >Previous</button>
               <button type="button" className="btn btn-secondary float-end me-5 px-5 py-2 mb-5" onClick={goToNextPage}>Next</button>
               </div> 
            </div>
        </div>
    );
}

export default Movies;


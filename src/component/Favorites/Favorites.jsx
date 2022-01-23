import {Card,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar,faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from 'react-redux';
import {RemoveFav} from './../../store/actions/FavAction'
const Favorites=()=>{

    const dispatch = useDispatch();
    const FavMov = useSelector(state => state.Fav);
    const image='https://image.tmdb.org/t/p/w500'

    let removeFavMov = (id,movi) => {
        dispatch(RemoveFav(movi));
    }

   var x= console.log(FavMov)  

    return(
        <>
        
         <div className="container">
            <div className="row justify-content-center">
                {FavMov.length>0?
               FavMov.map((move,index) => {
                   
                    return (
                        
                        <div className="col-md-4  align-self-center " key={index}> 
                        <Card  className="shadow-lg p-1 mb-5 bg-body rounded " >
                            <img src={`${image}${move.poster_path}`} alt="" className="imges"/>
                            
                            <Card.Body className="cards">
                                
                            <FontAwesomeIcon icon={faStar}  className="text-warning fs-3 float-start mb-3  ms-5 "/>
                            <FontAwesomeIcon icon={faTrashAlt}  className="text-danger fs-3 float-end mb-3 me-5" onClick={(id) => {removeFavMov(id,move)}} />
                                <br/>
                                <Card.Title className="mt-4 mb-3">{move.title}</Card.Title>
                                
                                <Card.Text>
                                   Rate : {move.vote_average}
                                </Card.Text>
                                
                            </Card.Body>
                            
                            <div key={move.id}>
                             <Link to={`/MovieDetails/${move.id}`}>
                             <Button variant="info text-light mb-3 mx-5 mt-5">Show Details</Button>
                             </Link>
                            </div>
                        </Card>
                        </div> 
                    )
                   
                }
                
               
          )
        :
        <div className="shadow-lg   bg-body rounded text-center mt-5 p-5 w-75 text-info">
            <h1>No Favorite Movies</h1>
            </div>
        }
                </div>
               
            </div>
           
        </>
    )
}
export default Favorites;



// {isAuthunticated ?
//     <Route path="/Favorites" exact component={Favorites}/>
//     :<Route path="/LoginForm" exact component={LoginForm}/>}/>
;
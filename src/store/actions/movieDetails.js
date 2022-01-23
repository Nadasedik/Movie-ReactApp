import axiosInstance from '../../component/axiosConfig/axiosConfig';

export default function changeMovieDetailes(_id)
{
    return (dispatch)=>{
        axiosInstance
        .get(`/${_id}?api_key=11150438bab8902b7d497b7264dcd2ba&language=en-US/`)
        .then((res)=>dispatch({type:"SET_DETAILES",payload:res.data.results })
       , console.log("hello")
        )
        .catch((err) => console.log(err));
        
       
    }
}
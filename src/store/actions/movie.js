import axiosInstance from '../../component/axiosConfig/axiosConfig';


export default function getMovies(cPage)
{
    return (dispatch)=>{
        axiosInstance.get("/popular",
            {
                params: {
                    api_key: '11150438bab8902b7d497b7264dcd2ba',
                    language: 'en-US',
                    page: cPage
                }
            })
            .then((res) => dispatch({type:"GET_MOVIES",payload:res.data.results }))
            .catch((err) => console.log(err))
    }
}
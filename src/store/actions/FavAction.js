export  function AddFav(data)
{
    return{
        type: "ADD_FAV",
        payload : data,
    };
}

export  function RemoveFav(data)
{
    return{
        type: "REMOVE_FAV",
        payload : data,
    };
}
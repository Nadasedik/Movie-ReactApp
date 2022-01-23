export default function detailsReducer(state={},action)
{
    switch(action.type)
    {
        case "SET_DETAILES":
            return{
                ...action.payload,
            };
        default:
           return state;
    }
}
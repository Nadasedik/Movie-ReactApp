// const inital={
//     movies=[]
// }

export default function MovieReducer(state=[],action)
{
    switch(action.type)
    {
        case "GET_MOVIES":
            return action.payload;
                // ...state,
                // movies:[...state.movies,action.payload]
            // };
        default:
           return state;
    }
}
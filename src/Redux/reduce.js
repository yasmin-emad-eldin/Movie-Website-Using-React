const initial_value = {
    favourites: [],
    counter: 0,
    Movies:[]
};

export default function favReducer(state = initial_value, action)
{
    switch (action.type) {
        case 'FavouriteStore':{
            state.favourites.push(action.payload)
            return {
                ...state, counter:state.favourites.length
            };
        }
        case'FavouriteStoreArray':
            state.favourites = new Array(...action.payload);
            return {
                ...state, counter:state.favourites.length
            };

        case 'ApiMovies':
            return{
                ...state, Movies: action.payload
                };
                
        default:
            return {
                ...state
            }; 
    }
}
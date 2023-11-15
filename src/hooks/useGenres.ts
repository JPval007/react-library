
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// In here we changed the custom hook, we are no longer getting the genres from the server because they don't change
// and it's also bad UX/UI practice to use too much loading components
// And it also has minimal impact on server time, less requests, faster performance

const useGenres = () => ({data: genres, isLoading: false, error: null});


export default useGenres;
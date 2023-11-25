
import ms from 'ms';
import {useQuery} from '@tanstack/react-query';
import APIClient from "../services/api-client";
import genres from '../data/genres';


//APIClient is a class now, that does the same logic as the hook (function) but you only call it once instead of repeating it
const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// In here we changed the custom hook, we are no longer getting the genres from the server because they don't change
// and it's also bad UX/UI practice to use too much loading components
// And it also has minimal impact on server time, less requests, faster performance

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24h
    initialData: genres
});


export default useGenres;
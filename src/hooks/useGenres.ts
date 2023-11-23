

import {useQuery} from '@tanstack/react-query';
import apiClient from "../services/api-client";
import { FetchResponse } from './useData';
import genres from '../data/genres';

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
    queryFn: ()=> apiClient
    .get<FetchResponse<Genre>>('/genres').then(res => res.data),
    staleTime: 24*60*60*1000, //24h
    initialData: { count: genres.length, results: genres }
});


export default useGenres;
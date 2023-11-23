
import {useQuery} from '@tanstack/react-query';
import apiClient from "../services/api-client";
import { FetchResponse } from './useData';
import platforms from '../data/platforms';
import { Platform } from './useGames';

// interface Platform {
//     id: number;
//     name: string;
//     slug: string;
// }

// Did the same as genres because the platforms are the same, they won't change for at least 5-10 yrs

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: ()=> apiClient
    .get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
    staleTime: 24*60*60*1000, //24h    
    initialData: {count: platforms.length, results:platforms}
});
    

export default usePlatforms;
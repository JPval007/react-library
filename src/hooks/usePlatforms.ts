import ms from 'ms'
import {useQuery} from '@tanstack/react-query';
import APIClient from "../services/api-client";
import platforms from '../data/platforms';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// Did the same as genres because the platforms are the same, they won't change for at least 5-10 yrs

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24h    
    initialData: platforms
});
    

export default usePlatforms;
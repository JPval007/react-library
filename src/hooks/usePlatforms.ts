
import useData from './useData';
import platforms from '../data/platforms';

interface Platform {
    id: number;
    name: string;
    slug: string;
}

// Did the same as genres because the platforms are the same, they won't change for at least 5-10 yrs

const usePlatforms = () => ({data: platforms, isLoading: false, error: null});
    

export default usePlatforms;
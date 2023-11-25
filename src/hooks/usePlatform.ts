import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  
    //This is used to implement the new logic in this part
    const { data: platforms } = usePlatforms();
    return platforms?.results.find(
    (p) => p.id === id
    );
}

export default usePlatform
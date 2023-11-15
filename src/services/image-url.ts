import noImage from '../assets/no-image-placeholder-6f3882e0.webp';
// Import images as a module because in deployment it won't work otherwise, I think mainly beacause of the build folder which has few files

const GetPropImageUrl = (url: string) =>{
    if (!url) return noImage;

    const target = 'media/';
    // Watch out for the error when games have no images
    const index = url.indexOf(target) + target.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index);
};

export default GetPropImageUrl;
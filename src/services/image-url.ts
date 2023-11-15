
const GetPropImageUrl = (url: string) =>{
    if (!url) return '';
    
    const target = 'media/';
    // Watch out for the error when games have no images
    const index = url.indexOf(target) + target.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index);
};

export default GetPropImageUrl;
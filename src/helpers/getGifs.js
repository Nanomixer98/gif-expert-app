export const getGifs = async (category) => {
    const URL = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=mRqGwXmmz66CMN9pkonxqmCTFiZEHeKN`;
    const resp = await fetch(URL);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    // console.log(gifs);
    return gifs;
}
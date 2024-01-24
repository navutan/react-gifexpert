export const getGifs = async(category) => {

    //const api_key = 'I6VsuK2099bDHHfecpGo4Q7XlZBQ0Umh';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=I6VsuK2099bDHHfecpGo4Q7XlZBQ0Umh&q=${category}&limit=10`;
    const resp = await fetch(url);

    const { data } = await resp.json();
    //console.log(data);

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) );

    return gifs;
}
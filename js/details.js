const myUrl = new URL("https://www.disney.dev");

myUrl.searchParams.append("id", "26");
myUrl.searchParams.append("name", "abuelita");
myUrl.searchParams.append("tvshows", "gravity falls");

console.log(myUrl.search);


const container = document.querySelector(".container")

const url = 'https://api.disneyapi.dev/characters/26'
   
async function getAPI() {
    const response = await fetch(url)
    const json = await response.json()

    console.log(json)

    container.innerHTML = `
        <h2>${json.name}</h1>
        <p><img style="background-image: url('${json.imageUrl}')"></p>
        <h3>TV Shows: ${json.tvShows}</h2>
        <h3>Video games: ${json.videoGames}</h2>
        `;
        
};
getAPI();
function getData(){
    fetch('https://api.disneyapi.dev/characters')
    .then(response => {
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        console.log(data.data);
        const html = data.data
            .map(character => {
                return `
                <div id="characters"
                    <p><img src = "${character.imageUrl}" alt="${character.name}"</p>
                    <p>Name: ${character.name}</p>
                    <p>TvShows: ${character.tvShows}</p>
                    <p>Films: ${character.films}</p>
                    <p>Videogames: ${character.videoGames}</p>
                </div>
                `;
            })
            .join('')
            console.log(html);
            document.querySelector('#app').insertAdjacentHTML('afterbegin', html)
    })
    .catch(error => {
        console.log(error)
    })
}

getData();
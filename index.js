const baseUrl = 'http://localhost:3000';
let music = select(".audio_file");
let music_title = select(".album_title");
let music_artist = select(".album_artist");
let favIcon = select(".music_icon");
let Playing = select(".fa-play");
let playMusic = select(".music_controls");
let music_thmub = select(".music_thumnail");
let myMusicContainer = select('.my-music');
let allAudios = [];

//event listeners
// Playing.addEventListener("click", play);
// music_title.addEventListener("change", loadMusicData);
// music_artist.addEventListener("change", loadMusicData);
// favIcon.addEventListener("change", loadMusicData);




//functionality

function play() {
  if (music.paused) {
    music.play();
    Playing.classList.replace("fa-play", "fa-pause");
  } else {
    music.pause();
    Playing.classList.replace("fa-pause", "fa-play");
  }
}

(async () => {
  let response = await Http.get('http://localhost:3000/all-audios');
  allAudios = response;
  renderAllAudios()
})()



const renderAllAudios = () => {
  allAudios.forEach(audioData => {
    let cardTemplate = `<div class="card" key="${audioData.id}">
    <div class="thumbnail">
      <img src='${baseUrl + audioData.thumbnail}' />
    </div>
    <div class="audio-info">
      <h1 class="album_title">${audioData.title}</h1>
      <p class="album_artist">${audioData.artist_name}</p>
    </div>
  </div>`;
  myMusicContainer.insertAdjacentHTML('beforeend',cardTemplate)
  })
}


// =====================================
// SONG LIST
// =====================================

const songs = [

    {
        title: "Dukhwa Mitayin Chhathi Maiya",
        artist: "Shardha Sinha",
        file: "assets/song1.mp3",
        cover: "assets/shardha sinha.jpg"
    },

    {
        title: "Kaanch Hi Baans Ke Bahangiya",
        artist: "Anuradha Paudwal",
        file: "assets/song2.mp3",
        cover: "assets/anuradha.jfif"
    },

    {
        title: "Kelva Ke Paat Par",
        artist: "Shardha Sinha",
        file: "assets/song3.mp3",
        cover: "assets/shardha sinha.jpg"
    },

    {
        title: "Patna Ke Ghat Par",
        artist: "Shardha Sinha",
        file: "assets/song4.mp3",
        cover: "assets/shardha sinha.jpg"
    },

    {
        title: "Pawan Singh Jode Jode Falwa",
        artist: "Pawan Singh",
        file: "assets/song5.mp3",
        cover: "assets/pawan singh.jfif"
    },

    {
        title: "Darshan Dekhai dihi ",
        artist: "Kalpana Patwari",
        file: "assets/song6.mp3",
        cover: "assets/kalpana.jfif"
    },

    {
        title: "chala bhauji hali Hali",
        artist: "pawan singh",
        file: "assets/song7.mp3",
        cover: "assets/pawan singh.jfif"
    },

    {
        title: "Maarbo Re Sugva Dhanukh Se",
        artist: "Anuradha Paudwal",
        file: "assets/song8.mp3",
        cover: "assets/anuradha.jfif"
    },

    {
        title: "Aadit Manaila ",
        artist: "Anuradha Paudwal",
        file: "assets/song9.mp3",
        cover: "assets/anuradha.jfif"
    },

    {
        title: "Adityamal Hote Re Sahaiya",
        artist: "Pawan Singh",
        file: "assets/song10.mp3",
        cover: "assets/pawan singh.jfif"
    },

    {
        title: "Chhath Ke Baratiya",
        artist: "Shardha Sinha",
        file: "assets/song11.mp3",
        cover: "assets/shardha sinha.jpg"
    },

    {
        title: "Dihi Darshan suraj Gosiyia",
        artist: "Pawan Singh",
        file: "assets/song12.mp3",
        cover: "assets/pawan singh.jfif"
    },

    {
        title: "Ghatwa Par aajan baajan",
        artist: "Pawan singh",
        file: "assets/song13.mp3",
        cover: "assets/pawan singh.jfif"
    },

    {
        title: "Beriya Ke Beri",
        artist: "Anuradha Paudwal",
        file: "assets/song14.mp3",
        cover: "assets/anuradha.jfif"
    },

    {
        title: "Bhorewe Me Nadiya Nahaila",
        artist: "Anuradha Paudwal",
        file: "assets/song15.mp3",
        cover: "assets/anuradha.jfif"
    },

    {
        title: "Chhathi Mai Ke Pawan",
        artist: "Pawan Singh",
        file: "assets/song16.mp3",
        cover: "assets/pawan singh.jfif"
    },

    {
        title: "Darshan Dihi Na Apar He Chhathi Maiya",
        artist: "Anuradha Paudwal",
        file: "assets/song17.mp3",
        cover: "assets/anuradha.jfif"
    },

    {
        title: "Chhathi Mai Hoihen Sahai",
        artist: "Pawan Singh",
        file: "assets/song18.mp3",
        cover: "assets/pawan singh.jfif"
    },

    {
        title: "Ho Deenanath",
        artist: "Shardha Sinha",
        file: "assets/song19.mp3",
        cover: "assets/shardha sinha.jpg"
    },

    {
        title: "Jai Chhathi Maiya",
        artist: "Sonu Nigam, Pawan Singh",
        file: "assets/song20.mp3",
        cover: "assets/pawan singh.jfif"
    },

    {
        title: "Kopi Kopi Boleli",
        artist: "Devi",
        file: "assets/song21.mp3",
        cover: "assets/anuradha.jfif"
    },

    {
        title: "Aadit Manaila Bhojpuri",
        artist: "Shardha Sinha",
        file: "assets/song22.mp3",
        cover: "assets/shardha sinha.jpg"
    },

    

    {
        title: "Aragh ke Ber",
        artist: "Anuradha Paudwal",
        file: "assets/song24.mp3",
        cover: "assets/anuradha.jfif"
    },

    {
        title: "Pawan Singh Pujan Ke Beriya",
        artist: "Pawan Singh",
        file: "assets/song25.mp3",
        cover: "assets/pawan singh.jfif"
    }

];



// =====================================
// CURRENT SONG
// =====================================

let currentSongIndex = 0;



// =====================================
// HTML ELEMENTS
// =====================================

const audioPlayer =
    document.getElementById(
        "audioPlayer"
    );


const playBtn =
    document.getElementById(
        "playBtn"
    );


const previousBtn =
    document.getElementById(
        "previousBtn"
    );


const nextBtn =
    document.getElementById(
        "nextBtn"
    );


const progressBar =
    document.getElementById(
        "progressBar"
    );


const currentTime =
    document.getElementById(
        "currentTime"
    );


const duration =
    document.getElementById(
        "duration"
    );


const songTitle =
    document.getElementById(
        "songTitle"
    );


const songArtist =
    document.getElementById(
        "songArtist"
    );


const songCover =
    document.getElementById(
        "songCover"
    );



// =====================================
// LOAD SONG
// =====================================

function loadSong(index) {


    currentSongIndex = index;


    const song =
        songs[currentSongIndex];


    audioPlayer.src =
        song.file;


    songTitle.textContent =
        song.title;


    songArtist.textContent =
        song.artist;


    songCover.src =
        song.cover;


    progressBar.value = 0;

}



// =====================================
// PLAY / PAUSE
// =====================================

playBtn.addEventListener(
    "click",
    function () {


        if (
            audioPlayer.paused
        ) {


            audioPlayer.play()
                .catch(function () {

                    alert(
                        "Audio file nahi mila. assets folder check karo."
                    );

                });


        } else {


            audioPlayer.pause();

        }

    }
);



// =====================================
// WHEN PLAYING
// =====================================

audioPlayer.addEventListener(
    "play",
    function () {

        playBtn.textContent =
            "Ⅱ";

    }
);



// =====================================
// WHEN PAUSED
// =====================================

audioPlayer.addEventListener(
    "pause",
    function () {

        playBtn.textContent =
            "▶";

    }
);



// =====================================
// PREVIOUS
// =====================================

previousBtn.addEventListener(
    "click",
    function () {


        currentSongIndex--;


        if (
            currentSongIndex < 0
        ) {

            currentSongIndex =
                songs.length - 1;

        }


        loadSong(
            currentSongIndex
        );


        audioPlayer.play();

    }
);



// =====================================
// NEXT
// =====================================

nextBtn.addEventListener(
    "click",
    function () {


        currentSongIndex++;


        if (
            currentSongIndex >=
            songs.length
        ) {

            currentSongIndex = 0;

        }


        loadSong(
            currentSongIndex
        );


        audioPlayer.play();

    }
);



// =====================================
// AUDIO LOADED
// =====================================

audioPlayer.addEventListener(
    "loadedmetadata",
    function () {


        duration.textContent =
            formatTime(
                audioPlayer.duration
            );

    }
);



// =====================================
// UPDATE PROGRESS
// =====================================

audioPlayer.addEventListener(
    "timeupdate",
    function () {


        if (
            audioPlayer.duration
        ) {


            const percentage =
                (
                    audioPlayer.currentTime /
                    audioPlayer.duration
                ) * 100;


            progressBar.value =
                percentage;

        }


        currentTime.textContent =
            formatTime(
                audioPlayer.currentTime
            );

    }
);



// =====================================
// SEEK SONG
// =====================================

progressBar.addEventListener(
    "input",
    function () {


        if (
            audioPlayer.duration
        ) {


            audioPlayer.currentTime =
                (
                    progressBar.value /
                    100
                ) *
                audioPlayer.duration;

        }

    }
);



// =====================================
// SONG ENDED
// =====================================

audioPlayer.addEventListener(
    "ended",
    function () {


        currentSongIndex++;


        if (
            currentSongIndex >=
            songs.length
        ) {

            currentSongIndex = 0;

        }


        loadSong(
            currentSongIndex
        );


        audioPlayer.play();

    }
);



// =====================================
// FORMAT TIME
// =====================================

function formatTime(seconds) {


    if (
        !Number.isFinite(seconds)
    ) {

        return "0:00";

    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    const secondsPart =
        Math.floor(
            seconds % 60
        )
        .toString()
        .padStart(2, "0");


    return (
        minutes +
        ":" +
        secondsPart
    );

}



// =====================================
// LIVE CLOCK
// =====================================

function updateClock() {


    const now =
        new Date();


    document.getElementById(
        "clock"
    ).textContent =
        now.toLocaleTimeString(
            [],
            {
                hour: "numeric",
                minute: "2-digit"
            }
        );

}


setInterval(
    updateClock,
    1000
);


updateClock();



// =====================================
// LISTENERS
// =====================================


let listeners = 245;

// Target number
let targetListeners = 245;


// Generate a new target
function generateTarget() {

    targetListeners =
        Math.floor(
            Math.random() * (400 - 200 + 1)
        ) + 200;

}


// Move slowly towards target
function updateListeners() {

    if (listeners < targetListeners) {

        // Slowly increase
        listeners +=
            Math.floor(
                Math.random() * 3
            ) + 1;

    }

    else if (listeners > targetListeners) {

        // Slowly decrease
        listeners -=
            Math.floor(
                Math.random() * 3
            ) + 1;

    }


    // Never go outside 200 - 400
    if (listeners > 400) {

        listeners = 400;

    }


    if (listeners < 200) {

        listeners = 200;

    }


    // Show number
    document.getElementById(
        "listeners"
    ).textContent = listeners;

}


// Generate new target every 20-40 seconds

function changeTarget() {

    generateTarget();

    const nextChange =
        Math.floor(
            Math.random() * 20000
        ) + 20000;


    setTimeout(
        changeTarget,
        nextChange
    );

}


// Start target system

generateTarget();

changeTarget();


// Change visible number slowly

setInterval(
    updateListeners,
    3000
);


// =====================================
// INITIAL SONG
// =====================================

loadSong(0);
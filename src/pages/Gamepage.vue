<template>
    <div>
        <button @click="goToPage('home')">
            Go to home
        </button>
        <h1>
            Game
        </h1>

        <Carousel
            :items="songs"
        />
    </div>
</template>

<script>
    // components
    import Carousel from "../components/Carousel.vue";

    // export
    export default {
        name: "Gamepage",
        components: {
            Carousel
        },
        data() {
            return {
                songs: []
            }
        },
        mounted() {
            this.fetchSongs();
        },
        methods: {
            // navigation method
            goToPage(page) {
                this.$emit("change-page", page);
            },

            // data methods
            fetchSongs() {
                // Get all songs
                const url = "http://webservies.be/eurosong/Songs";

                fetch(url)
                    .then((response) => {
                        return response.json();
                    })
                    .then((songs) => {
                        this.fetchArtists(songs);
                    });
            },

            fetchArtists(songs) {
                // Get all artist
                const url = "http://webservies.be/eurosong/Artists";

                fetch(url)
                    .then((response) => {
                        // response is text, so convert to json
                        return response.json();
                    })
                    .then((artists) => {
                        // loop over array songs with forEach method
                        songs.map((song) => {
                            // find the artist in an array
                            const artist = artists.find((artist) => artist.id == song.artist);

                            // replace the id by the artist object
                            song.artist = artist;

                            // return the new object
                            return song;
                        });

                        // change data of songs, so everything will get rerenderd;
                        this.songs = songs;
                    });
            }
        }
    }
</script>
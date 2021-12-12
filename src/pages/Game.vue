<template>
    <div>
        Game

        <button @click="goBack">
            Go to back to home
        </button>

        <!-- Song Carousel -->
        <Carousel 
            :songs="songs"
            :activeSongIndex="activeSongIndex"

            @change-active-song="changeActiveSong"
        />

        <!-- Votes -->
        <div v-for="(vote, index) in votes" :key="index" >
            <button v-if="!vote.isVoted" @click="voteSong(index)">
                {{ vote.points }}
            </button>
        </div>
    </div>
</template>

<script>
    // import components
    import Carousel from "../components/Carousel.vue";

    // export the whole game
    export default {
        name: "Game",
        components: {
            Carousel
        },
        data() {
            return {
                songs: [], // to be filled in by api
                activeSongIndex: 0,
                votes: [
                    {
                        points: 1,
                        isVoted: false
                    },
                    {
                        points: 2,
                        isVoted: false
                    },
                    {
                        points: 4,
                        isVoted: false
                    },
                    {
                        points: 8,
                        isVoted: false
                    },
                    {
                        points: 12,
                        isVoted: false
                    },
                ]
            }
        },
        mounted() {
            // fetch the artists
            this.fetchSongs();
        },
        methods: {
            // navigation method
            goBack() {
                this.$emit('showpage', 'home')
            },

            // api data method
            fetchSongs() {
                const url = "http://webservies.be/eurosong/Songs";

                fetch(url)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        // data from api
                        let songs = data;

                        // fetch artist
                        this.fetchArtists(songs);
                    });
            },

            fetchArtists(songs) {
                const url = "http://webservies.be/eurosong/Artists";

                fetch(url)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        // data from api
                        let artists = data;

                        songs.map((song) => {

                            let artist = artists.find(artist => artist.id == song.id);
                            // to check if artist
                            song.isVoted = false;
                            song.artist = artist;

                            return song;
                        });

                        // change the data of the vue component
                        this.songs = songs;
                        this.activeSong = songs[0];
                    });
            },

            postVotes(song, points) {
                console.log(song.id, points);
                const url = "http://webservies.be/eurosong/Votes";

                fetch(
                        url,
                        {
                            method: "POST",
                            headers: {
                                'Accept': 'application/json, text/plain',
                                'Content-Type': 'application/json;charset=UTF-8'
                            },
                            body: JSON.stringify({
                                songID: song.id,
                                points: points,
                            })
                        }
                    )
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                    });
            },

            // internal data change
            changeActiveSong(id) {
                this.activeSongIndex = id;
            },

            voteSong(index) {
                // hide button
                this.votes[index].isVoted = true;

                // change state of the game
                const song = this.songs[this.activeSongIndex];
                song.isVoted = true;

                // post votes
                this.postVotes(song, this.votes[index].points);
            }
        },
    }
</script>
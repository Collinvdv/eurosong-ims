<template>
    <div>
        <button @click="changeActiveSong(-1)">
            Previous song
        </button>
        <div v-for="(song, index) in songs" :key="index">
            <div v-if="index == activeSongIndex">
                <div v-if="song.isVoted">
                    voted
                </div>
                {{song.title}} - {{song.artist.name}}
            </div>
        </div>

        <button @click="changeActiveSong(1)">
            next song
        </button>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        props: [
            "songs",
            "activeSongIndex"
        ],
        methods: {
            changeActiveSong(value) {
                // do +1 or -1
                let index = this.activeSongIndex + value;

                if (index < 0) {
                    index = this.songs.length - 1;
                }

                if (index == this.songs.length) {
                    index = 0
                }

                this.$emit("change-active-song", index);
            }
        }
    }
</script>
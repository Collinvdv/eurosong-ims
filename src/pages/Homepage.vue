<template>
    <div>
       <h1> Eurosong festival</h1>

      <button @click="showPage('game')">
        Start game
      </button>

      <button @click="showPage('ranking')">
        Show ranking
      </button>
    </div>
</template>

<script>
    export default {
        name: "Game",
        methods: {
            showPage(page) {
                this.$emit('showpage', page);
            }
        }
    }
</script>
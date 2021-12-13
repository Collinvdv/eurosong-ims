<template>
  <div id="app">
    <!-- Homepage -->
    <Homepage
      @showpage="showPage"

      v-if="page == 'home'"
    />

    <!-- Game -->
    <Game
      @showpage="showPage"

      v-if="page == 'game'"
    />

    <!-- Ranking -->
    <Ranking
      @showpage="showPage"

      v-if="page == 'ranking'"
    />
  </div>
</template>

<script>
// Pages
import Homepage from "./pages/Homepage.vue";
import Game from "./pages/Game.vue";
import Ranking from "./pages/Ranking.vue";

// App component
export default {
  name: 'App',
  components: {
    Game,
    Ranking,
    Homepage
  },
  data() {
    return {
      page:  "home"
    }
  },
  methods: {
    showPage(page) {
      this.page = page;
    }
  }
}
</script>

<style lang="scss">
  @import "./scss/style.scss";
</style>
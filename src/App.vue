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
// Import of the whole styling for the app
import style from './scss/style.scss';

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


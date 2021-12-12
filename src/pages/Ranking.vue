<template>
    <div>
       Ranking

       <button @click="goBack">
        Go to back to home
      </button>
    </div>
</template>

<script>
    export default {
        name: "Ranking",
        methods: {
            goBack() {
                this.$emit('showpage', 'home')
            }
        }
    }
</script>
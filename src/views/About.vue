<template>
  <div class="about">
    <h1>Counter</h1>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'home',
        computed: {
            ...mapState(['counter']),
        },
    }
</script>
<template>
    <div class="add">
        <span>Total {{ combinedTotal }}</span>
        <input :value="inputz" @input="updateInput" disabled>
        <div>
            <button @click="addNumber(1)">1</button>
            <button @click="addNumber(2)">2</button>
            <button @click="addNumber(3)">3</button>
            <button @click="addNumber(4)">4</button>
            <button @click="addNumber(5)">5</button>
            <button @click="addNumber(6)">6</button>
            <button @click="addNumber(7)">7</button>
            <button @click="addNumber(8)">8</button>
            <button @click="addNumber(9)">9</button>
            <button @click="add">+</button>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    import { types } from '@/store'

    export default {
        name: 'home',
        computed: {
            ...mapState({
                inputz: (state) => state.input
            }),
            ...mapGetters(['combinedTotal'])
        },
        methods: {
            updateInput(value) {
                this.$store.commit(types.UPDATE_INPUT, value)
            },
            ...mapActions({
                add: types.ADD_NUMBER,
                addNumber: types.UPDATE_INPUT
            }),
        },
    }
</script>

<style lang="stylus">
    /*input*/
        /*disable*/
</style>
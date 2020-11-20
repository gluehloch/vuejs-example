<template>
    <div>
        <h1>Register yourself as person</h1>
        <h2>Dein Name: <b>{{ viewModel.name }}</b></h2>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

class ViewModel {
    name: String;
    firstName: String;
    email: String;
}

@Component
export default class Register extends Vue {
    @Prop() private msg!: string;

    viewModel: ViewModel = new ViewModel();

    constructor() {
        super();
        console.log('Register::constructor()');
    }

    /*
    data() {
        console.log('Register::data()');
        this.viewModel = new ViewModel();
        return this.viewModel;
    }
    */

    mounted() {
        console.log('Register::mounted()');
        this.viewModel.name = "Andre Winkler";
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>

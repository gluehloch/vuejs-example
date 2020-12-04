<template>
    <div>
        <h1>Register yourself as person</h1>
        <h2>Dein Name: <b>{{ viewModel.name }}</b></h2>
        <p>
            <select id="selection" v-model="viewModel.selection">
                <option v-for="v in viewModel.values" :key="v.key">{{ v.name }}</option>
            </select>
        </p>
        <p>
            Selection: {{ viewModel.selection }}
        </p>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

class Selection {
    private message: string;
    constructor(public name: String, public key: String) {
        this.message = this.toString();
    }

    toString() {
        return '(' + this.key + '-' + this.name + ')';
    }
}

class ViewModel {
    name: String = '';
    firstName: String = '';
    email: String = '';

    selection: Selection = new Selection('Please select one', '0');
    values = [
        new Selection('Wert A', 'a'),
        new Selection('Wert B', 'b'), 
        new Selection('Wert C', 'c')
    ];
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

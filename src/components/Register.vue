<template>
    <div>
        <h1>Register yourself as person</h1>
        <h2>Dein Name: <b>{{ viewModel.name }}</b></h2>
        <p>
            <select id="selection" v-model="viewModel.selection">
                <option v-for="v in viewModel.values"
                    :key="v.key"
                    :disabled="v.key == 0"
                    :value="v">{{ v.name }} # Msg='{{ v.message }}'</option>
            </select>
        </p>
        <p>
            Selection: {{ viewModel.selection.name }}
        </p>
        <p>
            Outer Pre-Select {{ preSelect }}
        </p>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

class Selection {
    private _message: string;
    constructor(public name: string, public key: string) {
        this._message = this.toMessage(name, key);
    }

    get message(): string {
        return this._message;
    }

    private toMessage(name: string, key: string) {
        if (key == '0') {
            return name;
        } else {
            return '(' + key + '-' + name + ')';
        }
    }
}

class ViewModel {
    name: String = '';
    firstName: String = '';
    email: String = '';

    selection: Selection = new Selection('Please select one', '0');
    values = [
        this.selection,
        new Selection('Wert A', 'a'),
        new Selection('Wert B', 'b'),
        new Selection('Wert C', 'c')
    ];
}

@Component
export default class Register extends Vue {
    @Prop() private preSelect!: string;
    @Prop() private msg!: string;

    viewModel: ViewModel = new ViewModel();

    constructor() {
        super();
        console.log('Register::constructor()');
        console.log(this.viewModel.selection.name, this.viewModel.selection.key);
    }

    /*
    data() {
        console.log('Register::data()');
        this.viewModel = new ViewModel();
        return this.viewModel;
    }
    */

    @Watch("viewModel.selection")
    watch() {
        console.log("Selection detected.", this.viewModel.selection);
        this.$emit('update-selection', this.viewModel.selection); // allways kebap-case for event names!!!
    }

    mounted() {
        console.log('Register::mounted()');
        this.viewModel.name = "Andre Winkler";
        this.viewModel.selection = this.viewModel.values[0];
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

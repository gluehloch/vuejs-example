<template>
    <div class="hello">
        <h1>{{ msg }}</h1>

        <hr />

        <Register
            :pre-select="selection"
            v-on:update-selection="updateSelection"
        />
        <Register :pre-select="selection" />
        <SharedMessage :shared="shared" :sharedUpdateCounter="counter" />

        <hr />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Shared } from "./Shared";
import Register from "./Register.vue";
import SharedMessage from "./SharedMessage.vue";

@Component({
    components: {
        Register,
        SharedMessage,
    },
})
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;

    selection: string = "";
    shared: Shared = new Shared();
    counter = 0;

    updateSelection(selection: any) {
        console.log(
            'HelloWorld#updateSelection :: Message from component "register component":',
            selection,
            selection.key
        );
        this.selection = selection.key;

        this.shared.id = this.counter++;
        this.shared.name = "Andre Winkler was here";

        console.log("HelloWorld#updateSelection :: Shared data: ", this.shared);
    }
}
</script>

<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <hr />
        <Register
            :pre-select="selection"
            v-on:update-selection="updateSelection" />
        <Register
            :pre-select="selection" />
        <SharedMessage
            :shared="shared" :sharedUpdateCounter="counter" />
        <hr />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Shared } from "./Shared";

import SharedMessage from './SharedMessage.vue';
import Register from './Register.vue';

export default defineComponent({
    name: 'HelloWorld',
    components: {
        Register,
        SharedMessage,
    },
    props: {
        msg: String
    },
    data() {
        return {
            selection: '',
            shared: new Shared(),
            counter: 0
        }
    },
    methods: {
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
});
</script>

<template>
    <div>
        Message:
        <b>
        {{ shared.id }} / {{ shared.name }}
        </b>
        <p>
        Shared Update Counter {{ sharedUpdateCounter }}.
        </p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Shared } from "./Shared";

export default defineComponent({
    name: 'SharedMessage',
    props: {
        shared: Shared,
        sharedUpdateCounter: Number,
    },
    watch: {
        shared(newShared, oldShared) {
            console.log('SharedMessage#watch Update of the shared data: ', newShared, oldShared);
            // TODO ???? this.sharedUpdateCounter++;              
        }
    }
});

/*
@Component
export default class SharedMessage extends Vue {
    @Prop({type: Object as () => PropType<Shared>})
    public shared!: Shared;

    @Prop()
    sharedUpdateCounter = 0;

    @Watch('shared')
    watchShared() {
        console.log('SharedMessage#watch Update of the shared data: ', this.shared);
        this.sharedUpdateCounter++;
    }
}
*/

</script>
<style scoped>
</style>

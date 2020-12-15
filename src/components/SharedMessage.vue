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
import { PropType } from "vue";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Shared } from "./Shared";

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

</script>
<style scoped>
</style>

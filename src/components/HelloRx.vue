<template>
    <div>
        <vp-button type="primary" class="op-button" v-stream:click="plus$">+</vp-button>
        <vp-button type="primary" class="op-button" v-stream:click="minus$">-</vp-button>
        <p>total: {{total$}}</p>
    </div>
</template>

<script>
import {throttle} from 'a-pei'
import { empty, merge } from "rxjs";
import { mapTo, tap, startWith, scan } from "rxjs/operators";
export default {
    name: "rx",
    domStreams: ["plus$", "minus$"],
    subscriptions() {
        const btnPlusClick$ = this.plus$.pipe(mapTo(1));
        const btnMinusClick$ = this.minus$.pipe(mapTo(-1));
        return {
            total$: merge(btnPlusClick$, btnMinusClick$).pipe(
                startWith(0),
                scan((acc, cur) => acc + cur),
                tap(e => console.log(e))
            )
        };
    },
    created() {
        console.log(throttle)
        window.onmousemove = throttle(() => {
            console.log("eee" + +new Date());
        }, 1000);
    }
};
</script>

<style>
.op-button {
    max-width: 60px;
    max-height: 60px;
    line-height: 60px;
    display: inline-block;
}
</style>




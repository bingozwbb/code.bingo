<template>
    <div class="container">
        <button @wn="getwn">ok</button>
    </div>
</template>
<script>
import child from './child.vue'
export default {
    name: 'demo2',
    data() {
        return {
            message: "我依然很帅"
        }
    },
    methods: {
        sendMsg () {
            this,$emit('wn', this.message)
        }
    }
}
</script>

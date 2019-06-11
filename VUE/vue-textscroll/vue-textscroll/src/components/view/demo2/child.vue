<template>
    <div class="container">{{msg}}
        <child @wn="getWn"></child>
    </div>
</template>
<script>
import child from ''
export default {
    name: 'demoChild2',

    data() {
        return {
            
        }
    },
    components: {

    }
}
</script>

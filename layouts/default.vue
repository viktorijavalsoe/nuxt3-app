<template>
    <div>
        <nav>
            <nuxt-link to="/">Home</nuxt-link>
        </nav>
<slot/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
        }
    })
</script>

<style scoped>

</style>
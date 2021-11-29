<template>
    <div>
        <h1>{{workspaceName}} Workspace (# {{ $route.params.id}})</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, computed } from 'vue'
import {workspaceList, Workspace} from '../../store/global'


export default defineComponent({
    setup () {
        return {
            workspaceList
        }
    },
		data: ()=> ({
				workspaceName: ''
		}),
		mounted(){
			this.workspaceName = this.workspaceList.find(( workspace: Workspace) => workspace.id === Number(this.$route.params.id)).name
			console.log(this.workspaceName)
			console.log(this.$route.params.id)
		}
})
</script>

<style scoped>

</style>
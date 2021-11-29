<template>
  <h1>Home page</h1>
  <h2>Recently viewed</h2>
  <h2>Workspaces</h2>
  <input type="text" v-model="newWorkspaceName">
  <button @click="createWorkspace">Create a workspace</button>
  <ul>
      <li v-for="workspace in workspaces" :key="workspace.id">
          {{workspace.id}}: {{workspace.name}}
      </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';
import { ref } from 'vue'

export default defineComponent({
    setup (props) {
         const workspaces = ref([
            {id: 1, name:'Test'},
            {id: 2, name:'Experiment'},
        ])  
        const newWorkspaceName= ref('')
        const createWorkspace = () => {
            const randomId = Math.floor(Math.random() * 100)
            workspaces.value.push({
                id: randomId,
                name: newWorkspaceName.value
            })
        }
        return {
            workspaces,
						createWorkspace,
						newWorkspaceName
        }
			}
	})

</script>

<style scoped>

</style>
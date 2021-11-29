<template>
  <h1>Home page</h1>
  <h2>Recently viewed</h2>
  <h2>Workspaces</h2>
  <input type="text" v-model="newWorkspaceName" @keyup.enter="createWorkspace">
  <button @click="createWorkspace">Create a workspace</button>
  <ul class="workspaceList">
      <li v-for="workspace in workspaces" :key="workspace.id" class="workspaceList__card">
          {{workspace.id}}: {{workspace.name}}
      </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';
import { ref } from 'vue'
interface Workspace {
	id: Number,
	name: String
}

export default defineComponent({
    setup (props) {
         const workspaces = ref<Workspace[]>([])  
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

<style scoped lang="scss">
.workspaceList{
	margin-left: 0;
	padding-left: 0;

	&__card{
		display: block;
		padding: 2rem;
		border-radius: 4px;
		margin-bottom: 1rem;
		border: 1px solid black;
	}
}

</style>
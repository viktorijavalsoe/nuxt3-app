<template>
<div>
  <h1>Home page</h1>
  <h2>Recently viewed</h2>
  <h2>workspaceList</h2>
  <input type="text" v-model="newWorkspaceName" @keyup.enter="createWorkspace">
  <button @click="createWorkspace">Create a workspace</button>
  <ul class="workspaceList">
      <li v-for="workspace in workspaceList" :key="workspace.id" class="workspaceList__card">
          <nuxt-link :to="`/workspace/${workspace.id}`">{{workspace.id}}: {{workspace.name}}</nuxt-link>
      </li>
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';
import { ref } from 'vue'
import{ workspaceList} from '../store/global'

export default defineComponent({
    setup (props) {
        const newWorkspaceName= ref('')
        const createWorkspace = () => {
            const randomId = Math.floor(Math.random() * 100)
            workspaceList.value.push({
                id: randomId,
                name: newWorkspaceName.value
            })
						newWorkspaceName.value = ''
        }
        return {
            workspaceList,
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
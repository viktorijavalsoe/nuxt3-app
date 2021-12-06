<template>
    <div>
        <h1>{{workspaceName}} Workspace (# {{ $route.params.id}})</h1>
				<section>
					<h2>
						{{ board.name}}
					</h2>
					<button @click="createColumn">Create Column</button>
					<div class="columnGrid">
						<ul class="columnGrid__column" v-for="column in board.columns" :key="column.id">

						</ul>
					</div>
				</section>
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
				workspaceName: '',
				board: {
					name: 'test',
					columns: []
					}
		}),
			methods: {
				createColumn(){
					this.board.columns.push({
					items: []
				})
			}		
		},
		mounted(){
			this.workspaceName = this.workspaceList.find(( workspace: Workspace) => workspace.id === Number(this.$route.params.id)).name
		
		}
})
</script>

<style scoped lang="scss">
.columnGrid{
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	// grid-template-columns: repeat(var(--column-number), 1fr);

	&__column{
		border: 1px solid hotpink;
		height: 80vh;
		margin-right: 1rem;

	}

}

</style>
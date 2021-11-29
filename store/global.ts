import {ref} from 'vue'
export interface Workspace {
	id: Number,
	name: String
}

export const workspaceList = ref<Workspace[]>([])
import { Todo } from '@models';
import axios from './client';

export function getAllTodos() {
    return axios.get<{ objects: Todo[] }>('/api/v1/todos');
}

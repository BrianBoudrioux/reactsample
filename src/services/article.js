import api from './api';

const articleService = {
    getAll: async () => {
        return await api.get('/articles');
    },
    getById: async (id) => {
        return await api.get('/articles/' + id);
    }
    // other service method
}

export default articleService;
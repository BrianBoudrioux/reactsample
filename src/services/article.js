import api from './api';

const articleService = {
    getAll: async () => {

        const token = localStorage.getItem('token');

        return api.get('/articles', {
            headers: {'Authorization': 'Bearer ' + token}
        });
    },
    getById: async (id) => {

        const token = localStorage.getItem('token');
        
        return api.get('/articles/' + id , {
            headers: {'Authorization': 'Bearer ' + token}
        });
    }
    // other service method
}

export default articleService;
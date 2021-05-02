import api from './api';

const userService = {
    login: async (email, password) => {
        const user = {email, password};

        return api.post('/users/login', user);
    },
    // other service method
}

export default userService;
import api from "../api";

export async function loginUser(email, password) {
    try {
        const response = await api.apiBackend.get('/users', 
        {
            params: {
                email: email,
                password: password
            }
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        );
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
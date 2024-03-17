import api from "../api";

export async function loginUser(email, password) {
    try {
        const response = await api.apiBackend.get('/users', {
            params: {
                email: email,
                password: password
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function registerUser(emailUser, nameUser, passwordUser, nameBusiness, emailBusiness, occupation, phone, cnpj, idPlan) {
    try {
        const response = await api.apiBackend.post('/business', {
            name: nameBusiness,
            email: emailBusiness,
            phone: phone,
            cnpj: cnpj,
            about: "",
            photo: "",
            occupation: occupation,
            user: {
                id: "",
                name: nameUser,
                email: emailUser,
                password: passwordUser,
            },
            plans: {
                id: idPlan,
                name: "",
                price: "",
                favorite: "",
                limit_search: "",
                limit_category: "",
            },
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


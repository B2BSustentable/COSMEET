import api from "../api";

export async function getBusinessById(id) {
    try {
        const response = await api.apiBackend.get(`/business/${id}`);
        return response.data; 
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getAllBusiness() {
    try {
        const response = await api.apiBackend.get(`/business`);
        return response.data; 
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getSearchBusiness(name) {
    try {
        const response = await api.apiBackend.get(`/business/search?name=${name}`);
        return response.data; 
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function updateBusiness(id, businessData) {
    try {
        const formData = new FormData();
        formData.append('file', businessData.file);

        const response = await api.apiBackend.put(
            `/business/${id}?name=${businessData.business.name}&email=${businessData.business.email}&phone=${businessData.business.phone}&occupation=${businessData.business.occupation}&about=${businessData.business.about}`
            , formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data; 
    } catch (error) {
        console.log(error);
        throw error;
    }
}
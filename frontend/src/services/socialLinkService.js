import api from "./api";


export const getSocialLinks = async () => {

    const response = await api.get("/social-links/");

    return response.data;
};
import api from "./api";


export const getCertifications = async () => {

    const response = await api.get("/certifications/");

    return response.data;
};
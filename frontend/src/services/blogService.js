import api from "./api";


export const getBlogs = async () => {
    const response = await api.get("/blog/");
    return response.data;
};


export const getBlog = async (id) => {
    const response = await api.get(`/blog/${id}/`);
    return response.data;
};
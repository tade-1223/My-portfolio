import axios from "axios";

const api = axios.create({
    baseURL: "https://my-portfolio-backend-046t.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;


//import axios from "axios";
//const api = axios.create({
 //   baseURL: "https://my-portfolio-backend-046t.onrender.com/api",
   // headers: {
       // "Content-Type": "application/json",},
//});
//export default api;
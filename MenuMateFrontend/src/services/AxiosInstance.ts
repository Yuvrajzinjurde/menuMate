import axios from "axios";



const authAxios=axios.create({
  baseURL:'https://8f9f-2401-4900-1c45-4845-d184-6286-d839-4f6e.ngrok-free.app',
  headers: {
    "ngrok-skip-browser-warning": "skip-browser-warning",
  },

})

export default authAxios
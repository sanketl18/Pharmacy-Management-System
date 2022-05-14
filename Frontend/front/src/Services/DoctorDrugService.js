import axios from "axios";
import httpClient from "../htttp-commonD";


const viewAllDrugs = () => {
    return httpClient.get('/doctor/viewdrugs');
}


const findbyid = id => {
    return httpClient.get(`/doctor/viewbyId/${id}`);
}

const addDruginorder = data => {
    return httpClient.post("/doctor/addOrder", data);
}


const orderlist = () => {
    return httpClient.get("/doctor/viewOrders");
}





export default {findbyid, viewAllDrugs, addDruginorder,orderlist};
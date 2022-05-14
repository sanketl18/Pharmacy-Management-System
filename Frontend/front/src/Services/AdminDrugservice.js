import axios from "axios";
import httpClient from "../http-common";


const viewAllDrugs = () => {
    return httpClient.get('/admin/viewdrugs');
}

const addDrug = data => {
    return httpClient.post("/admin/adddrugs", data);
}


const findbyid = id => {
    return httpClient.get(`/admin/viewbyId/${id}`);
}

const findbyname =name => {
    return httpClient.get(`/admin/viewdrugs/${name}`);
}
const updateDrug = data => {
    return httpClient.put("/admin/editdrugs", data);
}

const deleteDrugs = id => {
    return httpClient.delete(`/admin/deletedrug/${id}`);
}

const viewSupplier = () => {
    return httpClient.get("/admin/viewsuppliers")
}

const AddSupplier = data =>{
    return httpClient.post("/admin/addsuppliers", data);
}

const deleteSupplier = id => {
    return httpClient.delete(`/admin/deletesupplier/${id}`);
}

const deleteorder =id => {
    return httpClient.delete(`/admin/deleteOrder/${id}`);
}

const addtopickup =data => {
    return httpClient.post("/admin/ordertopick", data);
}


const  orderById = id => {
    return httpClient.get(`/admin/getorder/${id}`);
}

const PickUpList = () => {
    return httpClient.get('/admin/pickuplist');
}

const viewOrders = () => {
    return httpClient.get("/admin/viewOrders")
}

const deletepickupitem =id => {
    return httpClient.delete(`/admin/deletepickup/${id}`);
}



const AdminRegister = data => {
    return axios.post("http://localhost:9090/admin-service/register/reg", data);
}

const DoctorRegister = data => {
    return axios.post("http://localhost:9090/doctor-service/register/reg", data);
}



export default {findbyid, viewAllDrugs, addDrug, updateDrug, deleteDrugs ,findbyname,AdminRegister, 
    DoctorRegister,viewSupplier,deleteSupplier, AddSupplier,deleteorder,addtopickup,
    orderById, viewOrders,PickUpList, deletepickupitem};
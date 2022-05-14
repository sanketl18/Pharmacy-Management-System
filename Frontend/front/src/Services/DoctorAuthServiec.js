import axios from "axios";
class DoctorAuthService {

    login(username, password) {
      
      const API_URL = "http://localhost:9090/doctor-service/register/auth";
        return axios
            .post(API_URL , {
            username,
            password
            })
            .then(response => {
              const token = response.data;
              localStorage.setItem("drSavedToken" , token) 
              console.log(token);
            });
        }

        
    
      logout(){
        localStorage.removeItem("drSavedToken");
      }
    
      getCurrentUser() {
        return localStorage.getItem('drSavedToken');
      };
      
    }
    
    export default new DoctorAuthService();
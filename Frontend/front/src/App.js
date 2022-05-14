import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import App1 from './App1';
import Doctor from './UsersAD/DoctorLogin';
import Admin from './UsersAD/AdminLogin';

import AddDrug from './Component/AddDrug';
import DrugList from './Component/DrugList';
import NotFound from './Error/NotFound';
import DocDrugli from './Component/DocDrugli';
import AdminReg from './UsersAD/AdminReg';
import DoctoReg from './UsersAD/DoctorReg';
import SupplierList from './Component/SupplierList';
import AddSupplier from './Component/AddSupplier';
import AdminHomePage from './Component/AdminHomePage';

import CreateOrder from './Component/CreateOrder';
import OrderList from './Component/OrderList';
import Paytm from './Payment/Paytm';
import AdminOrderList from './Orders/Adminorder';
import AddtoPickup from './Pickup/AddtoPickup';
import DocPickUpList from './Pickup/DocPickUpList';
import PickUpList from './Pickup/PickUpList';
import Unauthorize from './Error/Unauthorize';
import DocHomePage from './Component/DocHomePage';
import Checkout from './StripCopm/Checkout';
import PrivateRoute from './PrivateRoute/AdminPrivate';
import DPrivateRoute from './PrivateRoute/DoctorPrivate';
import Chat from './Chat/Chat';



function App() {
  return (

    <div>
      <BrowserRouter>

        <div>
          <Routes>

            <Route exact path="/" element={<App1 />} />

            {/* Login and signUp  */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/reg" element={<AdminReg />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/doctor/reg" element={<DoctoReg />} />

            {/* Admin Services*/}
            <Route path="/list" element={<PrivateRoute><DrugList /> </PrivateRoute>} />
            <Route path="/add" element={<PrivateRoute><AddDrug /></PrivateRoute>} />
            <Route path="/drug/edit/:id" element={<PrivateRoute><AddDrug /></PrivateRoute>} />
            <Route path="/supplier/list" element={<PrivateRoute><SupplierList /></PrivateRoute>} />
            <Route path="/supplier/add" element={<PrivateRoute><AddSupplier /></PrivateRoute>} />
            <Route path="/admin/orderlist" element={<PrivateRoute><AdminOrderList /></PrivateRoute>} />
            <Route path='/pickuplist' element={<PrivateRoute><PickUpList /></PrivateRoute>} />
            <Route path='/order/:id' element={<CreateOrder />} />

            {/*  Doctor Services*/}
            <Route path="/dlist" element={<DPrivateRoute><DocDrugli /></DPrivateRoute>} />
            <Route path="/orderlist" element={<DPrivateRoute><OrderList /></DPrivateRoute>} />
            <Route path='/Docpickuplist' element={<DPrivateRoute><DocPickUpList /></DPrivateRoute>} />
            <Route path='/Pickup/:id' element={<AddtoPickup />} />


            {/* Home pages */}
            <Route path="/Adminhome" element={<PrivateRoute><AdminHomePage /></PrivateRoute>} />
            <Route path="/Dochome" element={<DPrivateRoute><DocHomePage /></DPrivateRoute>} />


            {/*  errors*/}
            <Route path="*" element={<NotFound />} />
            <Route path="/unauthorize" element={<Unauthorize />} />

            {/*  payment*/}
            <Route path="/pay" element={<Paytm />} />
            <Route path="/stripe/pay" element={<Checkout />} />
             
             <Route path='/chat' element={<Chat/>}/>
          </Routes>
        </div>
      </BrowserRouter>

    </div>

  );
}


export default App;

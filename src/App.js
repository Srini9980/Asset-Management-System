
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import FetchAllShipment from './component/shipment/FetchAllShipment';
import CreateShipment from './component/shipment/CreateShipment';
import FetchShipment from './component/shipment/FetchShipment';
import FetchAllShipment2 from './component/shipment/FetchAllShipment2';
import FetchAllShipment3 from './component/shipment/FetchAllShipment3';
import EditShipment from './component/shipment/EditShipment';
import Login from './component/login/Login';
import AdminDashboard from './component/dashboard/AdminDashboard';
import ManagerDasboard from './component/dashboard/ManagerDashboard';
import UserDashboard from './component/dashboard/UserDasboard';
import FetchShipment2 from './component/shipment/FetchShipment2';
import FetchShipment3 from './component/shipment/FetchShipment3';
import HomePage from './component/home/HomePage';
import Footer from './component/footer/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/shipment/all" element={<FetchAllShipment />} />
          <Route path="/shipment2/all" element={<FetchAllShipment2 />} />
          <Route path="/shipment3/all" element={<FetchAllShipment3 />} />
          <Route path="/shipment/all/:id" element={<FetchShipment />} />
          <Route path="/shipment2/all/:id" element={<FetchShipment2 />} />
          <Route path="/shipment3/all/:id" element={<FetchShipment3 />} />
          <Route path="/shipment/save" element={<CreateShipment />} />
          <Route path="/shipment/edit/:id" element={<EditShipment />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/manager/dashboard" element={<ManagerDasboard/>} />
          <Route path="/user/dashboard" element={<UserDashboard/>} />
          <Route path="/footer" element={<Footer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

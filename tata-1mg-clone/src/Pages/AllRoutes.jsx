import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Privateroute from '../Privateroute/Privateroute'
import AyurvedaProducts from './AyurvedaProducts'
import Diabetes from './Diabetes'
import Featured from './Featured'
import HealthcareDevice from './HealthcareDevice'
import HealthCondition from './HealthCondition'
import HealthResource from './HealthResource'
import Homeopathy from './Homeopathy'
import Homepage from './Homepage'
import { Login } from './Login'
// import Login from './Login'
import PageNotfound from './PageNotfound'
import Payment from './Payment'
import PersonalCare from './PersonalCare'
import Products from './Products'
import {SingleProduct} from './SingleProduct'
import VitaminNutrition from './VitaminNutrition'
import AdminLogin from '../Admin/Pages/AdminLogin'
import Dashboard from '../Admin/Pages/Dashboard'
import AdminPrivateroute from '../Admin/Privateroute/AdminPrivateroute'
import Userdetails from '../Admin/Pages/Userdetails'
import Allproduct from '../Admin/Pages/Allproduct'
import Editproudct from '../Admin/Pages/Editproudct'
import Signup from './Signup'
import Cart from './Cart'
import Singleprodcutedit from '../Admin/Pages/Singleprodcutedit'
import About from './About'

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/payment" element={<Privateroute><Payment /></Privateroute>}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<SingleProduct />}/>
        <Route path="*" element={<PageNotfound />}/>
        <Route path='/about' element={<About/>}/>
        {/* Admin */}
        <Route path='/adminlogin' element={<AdminLogin />}/> 
        <Route path='/dashboard' element={ <AdminPrivateroute> <Dashboard /></AdminPrivateroute>}/> 
        <Route path='/dashboard/userdetails' element={<AdminPrivateroute> <Userdetails /></AdminPrivateroute>}/>
        <Route path='/dashboard/editproduct' element={<AdminPrivateroute> <Editproudct /></AdminPrivateroute>}/>
        <Route path='/dashboard/allproducts' element={<AdminPrivateroute> <Allproduct /></AdminPrivateroute>}/>
        <Route path='/dashboard/singleproductedit/:id' element={<AdminPrivateroute><Singleprodcutedit /></AdminPrivateroute>} />

        {/* Admin */}
        {/*  */}
         <Route path='/health-resource' element={<VitaminNutrition/>}/>
        <Route path='/vitamin-nutritiion' element={<VitaminNutrition/>}/>
        <Route path='/diabetes' element={<Diabetes/>}/>
        <Route path='/health-device' element={<HealthcareDevice/>}/>
        <Route path='/personal-care' element={<PersonalCare/>}/>
        <Route path='/health-condition' element={<HealthcareDevice/>}/>
        <Route path='/ayurveda-products' element={<AyurvedaProducts/>}/>
        <Route path='/homeopathy' element={<PersonalCare/>}/>
        <Route path='/featured' element={<AyurvedaProducts/>}/>
        <Route path="/:category/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
         {/*Route for category-wise single product page*/}
    </Routes>
  )
}

export default AllRoutes
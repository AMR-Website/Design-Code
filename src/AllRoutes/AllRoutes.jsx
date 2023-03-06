import React from 'react'
import {Routes,Route} from "react-router-dom"
import CSR from '../Components/CSR'
import Director from '../Components/Director'
import FinacialReport from '../Components/FinacialReport'
import HomePage from '../Components/HomePage'
import MissionPage from '../Components/MissionPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/csr" element={<CSR/>}></Route>
            <Route path="/director" element={<Director/>}></Route>
            <Route path="/financialreport" element={<FinacialReport/>}></Route>
            <Route path="/mission" element={<MissionPage/>}></Route>

        </Routes>
    </div>
  )
}

export default AllRoutes
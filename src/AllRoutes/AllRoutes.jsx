import React from 'react'
import {Routes,Route} from "react-router-dom"
import CompletedProjects from '../Components/CompletedProjects'
import CSR from '../Components/CSR'
import Director from '../Components/Director'
import Equipement from '../Components/Equipments'
import FinacialReport from '../Components/FinacialReport'
import HomePage from '../Components/HomePage'
import MissionPage from '../Components/MissionPage'
import OngoingProjects from '../Components/OngoingProjects'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/csr" element={<CSR/>}></Route>
            <Route path="/director" element={<Director/>}></Route>
            <Route path="/financialreport" element={<FinacialReport/>}></Route>
            <Route path="/mission" element={<MissionPage/>}></Route>
            <Route path="/completedProjects" element={<CompletedProjects/>}></Route>
            <Route path="/ongoingProjects" element={<OngoingProjects/>}></Route>
            <Route path="/equipement" element={<Equipement/>}></Route>

        </Routes>
    </div>
  )
}

export default AllRoutes
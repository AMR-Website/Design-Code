import React from 'react'
import {Routes,Route} from "react-router-dom"
import Carrers from '../Components/Carrers'
import Certificates from '../Components/Certificates'
import CompletedProjects from '../Components/CompletedProjects'
import Construction from '../Components/Construction'
import Contact from '../Components/Contact'
import CSR from '../Components/CSR'
import Director from '../Components/Director'
import Equipement from '../Components/Equipments'
import FinacialReport from '../Components/FinacialReport'
import Gallery from '../Components/Gallery'
import HomePage from '../Components/HomePage'
import Infrastructure from '../Components/Infrastructure'
import MiningPage from '../Components/MiningPage'
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
            <Route path="/gallery" element={<Gallery/>}></Route>
            <Route path="/carrers" element={<Carrers/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/certificates" element={<Certificates/>}></Route>
            <Route path="/mining" element={<MiningPage/>}></Route>
            <Route path="/construction" element={<Construction/>}></Route>
            <Route path="/irrigation" element={<Infrastructure/>}></Route>

        </Routes>
    </div>
  )
}

export default AllRoutes
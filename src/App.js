import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import AllRoutes from './AllRoutes/AllRoutes';
import Footer from './Pages/Footer';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <AllRoutes/>
        <Box mt="100px">
        <Footer/>
        </Box>
        
    </div>
  );
}

export default App;

import { Box, Text } from '@chakra-ui/react';
import Table from 'react-bootstrap/Table';

function Tableboot() {
    return (
        <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"30px",borderRadius:"40px"}}>
            <Box>
                <Text color="red.500" fontSize={"5xl"} as="b">Revenue </Text>
            </Box>

            <Box mt="30px" >
            <Table bordered hover >
                <thead>
                    <tr style={{backgroundColor:"RGB(51,153,102)",color:"Black",fontSize:"27px"}}>
                        <th>S.No</th>
                        <th>Financial Year</th>
                        <th>Revenue (CR)</th>
                        <th>EBIT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{backgroundColor:"RGB(0,128,128)",color:"",fontSize:"25px",fontWeight:"bold"}}>
                        <td>1</td>
                        <td>2021-2022</td>
                        <td>1384.5</td>
                        <td>206.85</td>
                    </tr>
                    <tr style={{backgroundColor:"RGB(0,128,128)",color:"",fontSize:"25px",fontWeight:"bold"}}>
                        <td>2</td>
                        <td>2020-2021</td>
                        <td>871.18</td>
                        <td>125.13</td>
                    </tr>
                    <tr style={{backgroundColor:"RGB(0,128,128)",color:"",fontSize:"25px",fontWeight:"bold"}}>
                        <td>3</td>
                        <td>2019-2020</td>
                        <td>1021.3</td>
                        <td>154.7</td>
                    </tr>
                    <tr style={{backgroundColor:"RGB(0,128,128)",color:"",fontSize:"25px",fontWeight:"bold"}}>
                        <td>4</td>
                        <td>2018-2019</td>
                        <td>1099.24</td>
                        <td>123.19</td>
                    </tr>
                    <tr style={{backgroundColor:"RGB(0,128,128)",color:"",fontSize:"25px",fontWeight:"bold"}}>
                        <td>5</td>
                        <td>2017-2018</td>
                        <td>618.78</td>
                        <td>113.43</td>
                    </tr>
                    <tr style={{backgroundColor:"RGB(0,128,128)",color:"",fontSize:"25px",fontWeight:"bold"}}>
                        <td>6</td>
                        <td>2016-2017</td>
                        <td>745.26</td>
                        <td>111.35</td>
                    </tr>
                </tbody>
            </Table>

            </Box>
            
        </div>
    );
}

export default Tableboot;
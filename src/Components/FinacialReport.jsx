import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Bar } from "react-chartjs-2"
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from "chart.js";

import Tableboot from './Table';

Chart.register(
    CategoryScale,
    BarElement,
    LinearScale,
    Tooltip,
    Legend,

);



const FinacialReport = () => {

    const data = {
        labels: ["2016-2017", "2017-2018", "2018-2019", "2019-2020", "2020-2021", "2021-2022"],

        datasets: [
            {
                label: "Revenue for The Company 2016-2022",
                data: [1384, 871, 1021, 1099, 618, 745],
                backgroundColor: "orangeRed"
            }
        ]

    }



    return (
        <div>

            <Box>
                <Text fontSize="5xl" fontWeight="bold" color="red.500">Financial Higlights</Text>


            </Box>
            <Box mt="40px">

            </Box>
            <Box w="85%" m="auto" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"30px",borderRadius:"40px"}} >
                <Bar data={data} />

            </Box>

            <Box mt="80px">
                <Box w="90%" m="auto">
                    <Tableboot />
                </Box>

            </Box>







        </div>
    )
}

export default FinacialReport
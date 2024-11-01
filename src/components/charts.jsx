
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Charts = () => {

    const data = [
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 500, pv: 2200, amt: 2300 },
        { name: 'Page C', uv: 600, pv: 2000, amt: 2100 },
        { name: 'Page D', uv: 700, pv: 2600, amt: 2500 },
        { name: 'Page E', uv: 800, pv: 2800, amt: 2700 },
        { name: 'Page F', uv: 900, pv: 3000, amt: 2900 },
        { name: 'Page G', uv: 1000, pv: 3200, amt: 3100 },
      ];
      


    const renderLineChart = (
        <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#000000" />
      
        </LineChart>
      );
    return ( 


        <div>
            <h1>Rechart practising </h1>
           <div className="border-2 bg-gray-200 p-4 flex justify-center items-center">
               {renderLineChart}
           </div>
        </div>
     );
}
 
export default Charts;
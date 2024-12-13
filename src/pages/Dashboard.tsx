import  BasicPie  from '../components/BasicPie';
import Card from '../components/Card';
import MonthlyBarChart from '../components/MonthlyBarChart';

const Dashboard = () => {
    return (
      <div className='gap-4 p-2 lg:ml-0'>
          <h2 className="text-center text-lg font-bold mb-5">Dashboard</h2>
          <div className='flex'>
            <Card heading={"Total Users"} value={1200}/>
            <Card heading={"Total Revenue"} value={5000}/>
            <Card heading={"Total Orders"} value={100}/>
            <Card heading={"Total Returns"} value={10}/>
          </div>
          <MonthlyBarChart />
          <BasicPie />
      </div>
    );
  };
  

export default Dashboard

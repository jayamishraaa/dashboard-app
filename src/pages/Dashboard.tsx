import  BasicPie  from '../components/BasicPie';
import MonthlyBarChart from '../components/MonthlyBarChart';
import MonthlyLineChart from '../components/MonthlyLineChart';
import TopCustomers from '../components/TopCustomers';

const Dashboard = () => {
    return (
      <div className='lg:flex gap-4 ml-30 p-2 lg:ml-0'>
        {/* <ul>
          {userDashboardData.map((item) => (
            <li key={item.id}>{item.username}</li>
          ))} */}
          <MonthlyBarChart />
          <BasicPie />
          <MonthlyLineChart />
          <TopCustomers />
        {/* </ul> */}
      </div>
    );
  };
  

export default Dashboard

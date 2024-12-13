import MonthlyLineChart from "../components/MonthlyLineChart"
import TopCustomers from "../components/TopCustomers"

const Analytics = () => {
    return (
        <div>
            <h2 className="text-center text-lg font-bold mb-5">Analytics</h2>
            <div className="lg:flex">
                <MonthlyLineChart />
                <TopCustomers />
            </div>
        </div>
    )
}

export default Analytics

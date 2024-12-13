import { useState, ChangeEvent } from "react";
import Card from "../components/Card";
import { employeeData } from "../data";
import BasicModal from "../components/BasicModal";

interface Employee {
    id: number,
    name: string;
    department: string;
    job_title: string;
}

interface FormData {
    name: string;
    department: string;
    title: string;
}
 
const EmployeePage = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        department: '',
        title: '',
    });
    
    const [isModal, setIsModal] = useState(false);
    const [modalId, setModalId] = useState(0);
 
    const [filteredEmployeeData, setFilteredEmployeeData] = useState<Employee[]>(employeeData);
    const [showAll, setShowAll] = useState<boolean>(false); 

    const handleSmartSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newFormData = { ...formData, [name]: value };
        setFormData(newFormData);
        handleFilter(newFormData);
    };

    const handleFilter = (filters: FormData) => {
        const filteredEmployees = employeeData.filter((employee) => {
            return (
                (filters.name.trim() === "" || employee.name.toLowerCase().includes(filters.name.trim().toLowerCase())) &&
                (filters.department.trim() === "" || employee.department.toLowerCase().includes(filters.department.trim().toLowerCase())) &&
                (filters.title.trim() === "" || employee.job_title.toLowerCase().includes(filters.title.trim().toLowerCase()))
            );
        });
        setFilteredEmployeeData(filteredEmployees);
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const displayedEmployees = showAll
        ? filteredEmployeeData
        : filteredEmployeeData.slice(0, 10);

    const handleModal = (id: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsModal(bool => !bool)
        setModalId(id)
    };
        
    return (
        <div>
            <div className="flex">
                <Card heading={"Total Employees"} value={employeeData.length} />
                <Card heading={"Job Positions"} value={1839} />
                <Card heading={"Total Payroll"} value={98080} />
            </div>

            <div className="card-component p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Employees</h3>

                <div className="mb-6">
                    <div className="grid grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="Employee Name"
                            name="name"
                            value={formData.name}
                            onChange={handleSmartSearch}
                            className="bg-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Department"
                            name="department"
                            value={formData.department}
                            onChange={handleSmartSearch}
                            className="bg-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Job Title"
                            name="title"
                            value={formData.title}
                            onChange={handleSmartSearch}
                            className="bg-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="employee-list space-y-4">
                    {displayedEmployees.map((value, index) => (
                        <ul key={index} className="flex justify-between p-2 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
                            <li className="flex-1 text-gray-700">{value.name}</li>
                            <li className="flex-1 text-gray-600">{value.department}</li>
                            <li className="flex-1 text-gray-600">{value.job_title}</li>
                            <li><button className="bg-gray-300 rounded p-1 text-sm"
                                onClick={handleModal(value.id)}
                            >Details</button></li>
                        </ul>
                    ))}
                </div>
                {isModal && modalId !== null && <BasicModal id={modalId} isModal={isModal} setIsModal={setIsModal} />}
                {filteredEmployeeData.length > 10 && (
                    <button
                        onClick={toggleShowAll}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        {showAll ? 'Show Less' : 'Show More'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default EmployeePage;

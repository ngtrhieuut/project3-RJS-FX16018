import BreadcrumbbarDept from "./BreadcrumbDept";
import { useSelector } from 'react-redux';
import { 
    updateHRDepartment, 
    updateFinaneDepartment,
    updateSaleDepartment, 
    updateMarketingDepartment,
    updateITDepartment } from '../../redux/selectors';

function Department() {

    const newDept = [
        {
            id: "Dept01",
            name: "Sale",   
            numberOfStaff: useSelector(updateSaleDepartment),
        },
        {
            id: "Dept02",
            name: "HR",
            numberOfStaff: useSelector(updateHRDepartment),
        },
        {
            id: "Dept03",
            name: "Marketing",
            numberOfStaff: useSelector(updateMarketingDepartment),
        },
        {
            id: "Dept04",   
            name: "IT",
            numberOfStaff: useSelector(updateITDepartment),
        },
        {
            id: "Dept05",
            name: "Finance",
            numberOfStaff: useSelector(updateFinaneDepartment),
        }];

        console.log(newDept)

    return (
        <div className="container">
            <BreadcrumbbarDept />

            <div className='row container'>
                {newDept.map(dept => (
                    <div className="dept card col-12 col-md-6 col-lg-4 m-1" key={dept.id}>
                        <div className="card-body">
                            <h5 className="card-title">Phòng ban: {dept.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Số lượng nhân viên: {dept.numberOfStaff}</h6>
                        </div>
                    </div>
                ))}                
            </div>
        </div>
    )
}

export default Department;
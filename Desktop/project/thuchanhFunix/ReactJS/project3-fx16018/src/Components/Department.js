import BreadcrumbbarDept from "./BreadcrumbDept";
import { DEPARTMENTS } from './staffs';
import { newDepts } from './UpdateDept';

function Department() {
    
    console.log(newDepts)

    return (
        <div className="container">
            <BreadcrumbbarDept />

            <div className='row container'>
                {DEPARTMENTS.map(dept => (
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
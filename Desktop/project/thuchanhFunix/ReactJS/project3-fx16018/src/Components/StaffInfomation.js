import dateFormat from "dateformat";
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardTitle } from 'reactstrap';
import { useParams } from "react-router-dom";
import {useSelector} from 'react-redux';
import { addStaffSelector } from '../redux/selectors';

function StaffInfomation() {
    const params = useParams()
    const staffList = useSelector(addStaffSelector);
    console.log(staffList)
    const staffInfo = staffList.find(staff => staff.id.toString() === params.staffId)

    return(
        <div className="container">
            <div>
                <Breadcrumb>
                    <BreadcrumbItem>
                    <Card>
                        <CardBody className='p-1'>  
                        <CardTitle tag="h6">
                            <Link to="/" className='Breadcrumb' style={{textDecoration: 'none'}}>
                            Trang chủ
                            </Link>
                        </CardTitle>
                        </CardBody>
                    </Card>          
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                    <Card>
                        <CardBody className='p-1'>  
                        <CardTitle tag="h6">
                            <Link to="/staff" className='Breadcrumb' style={{textDecoration: 'none'}}>
                            Nhân viên
                            </Link>
                        </CardTitle>
                        </CardBody>
                    </Card>          
                    </BreadcrumbItem>

                    <BreadcrumbItem active>
                    <Card>
                        <CardBody className='p-1'>
                        <CardTitle tag="h6">
                            <div className='Breadcrumb' id="changeText">
                            {staffInfo?.name}
                            </div>
                        </CardTitle>
                        </CardBody>
                    </Card>  
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className='row'>
                <div className='col-12 col-md-4 col-lg-3'>
                    <img src={staffInfo?.image} alt={staffInfo?.name} id='imgStaff'/>
                </div>
                <div className='col-12 col-md-8 col-lg-9' id='staffInfomation'>
                    <p><strong>Ngày sinh: </strong>{dateFormat(staffInfo?.doB, "dd/mm/yyyy")}</p>
                    <p><strong>Ngày vào công ty: </strong>{dateFormat(staffInfo?.startDate, "dd/mm/yyyy")}</p>
                    <p><strong>Phòng ban: </strong>{staffInfo?.department.name}</p>
                    <p><strong>Số ngày nghỉ còn lại: </strong>{staffInfo?.annualLeave}</p>
                    <p><strong>Số ngày đã làm thêm: </strong>{staffInfo?.overTime}</p>
                </div>
            </div>
        </div>
    )
}
export default StaffInfomation;

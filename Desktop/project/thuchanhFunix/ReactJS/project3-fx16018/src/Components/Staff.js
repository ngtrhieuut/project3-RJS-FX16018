import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import BreadcrumbbarStaff from './Breadcrumb';
import AddStaff from './AddStaff';
import {useSelector} from 'react-redux';
import { addStaffSelector, searchStaffSelector } from '../redux/selectors';
import { useDispatch } from 'react-redux'
import { searchStaff } from '../redux/actions';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Staff() {
    
    const staffList = useSelector(addStaffSelector);
    const searchStaffshow = useSelector(searchStaffSelector);

    const [inputSearch, setInputSearch] = useState('')

    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(searchStaff(inputSearch))
    }

    return (
        <div>
            <div className='container mt-4'>
                <div className="input-group container" id="searchStaff">
                    <input type="text" className="form-control" placeholder="Nguyễn Văn A" onChange={e => setInputSearch(e.target.value)} ></input>
                    <button className="btn btn-outline-light bg-secondary" type="button" id="button-addon2" onClick={handleSearch}>Tìm Kiếm</button>
                </div>
                <AddStaff />
                <BreadcrumbbarStaff />
            </div>
            <div className='container'>
                <Card
                    body
                    color="secondary"
                    inverse
                >
                    <CardBody className='row'>
                        {staffList.map(staff => (

                            <Card className='col-6 col-md-4 col-lg-2 mb-2 p-2 staffview' key={staff.id}>
                                    <Link to={`/staff/${staff.id}`} style={{textDecoration : 'none'}}>
                                    <button type="button" className="closeBtn">X</button>
                                    <CardImg
                                    alt={staff.name}
                                    src={staff.image}
                                    top
                                    width="100%"
                                    className='mt-1'
                                    />

                                    <CardBody style={{color: 'black'}} className='p-1'>
                                        <CardTitle >
                                            <div className='staffmain'>
                                                {staff.name}
                                            </div>
                                        </CardTitle>
                                    </CardBody>

                                </Link>                       
                            </Card>
                            
                        ))} 
                    </CardBody>
                </Card>
            </div>
            <Outlet />
        </div>
        
    )
}

export default Staff;
import { useSelector } from 'react-redux';
import { 
    updateHRDepartment, 
    updateFinaneDepartment,
    updateSaleDepartment, 
    updateMarketingDepartment,
    updateITDepartment } from '../redux/selectors';



    const Update = {};

    function UpdateDept() {

        Update = {
            Sale: useSelector(updateSaleDepartment),
            HR: useSelector(updateHRDepartment),
            Marketing: useSelector(updateMarketingDepartment),
            IT: useSelector(updateITDepartment),
            Finance: useSelector(updateFinaneDepartment),
        }

        return Update;
    }

    export const newDepts = [
        {
            id: "Dept01",
            name: "Sale",
            numberOfStaff: Update.Sale,
        },
        {
            id: "Dept02",
            name: "HR",
            numberOfStaff: Update.HR,
        },
        {
            id: "Dept03",
            name: "Marketing",
            numberOfStaff: Update.Marketing,
        },
        {
            id: "Dept04",   
            name: "IT",
            numberOfStaff: Update.IT,
        },
        {
            id: "Dept05",
            name: "Finance",
            numberOfStaff: Update.Finance,
        }];
    





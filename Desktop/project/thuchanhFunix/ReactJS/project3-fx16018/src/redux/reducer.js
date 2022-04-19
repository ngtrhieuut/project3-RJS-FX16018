import { STAFFS } from "../Components/staffs";

const initState = {
    filters: {
        search: ''
    },
    staffList: [
        ...STAFFS
    ],
} 

const rootReducer = (state = initState, action) => {
    console.log({state, action})
    switch(action.type) {
        case 'staffList/addStaff':
            return {
                ...state,
                staffList: [
                    ...state.staffList,
                    action.payload
                ]
            }
        
        case 'staffList/searchStaff':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload
                }
            }
        default: return state   
    }
}

export default rootReducer;
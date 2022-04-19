export const addStaffSelector = (state) => {
    const staffRemaining = state.staffList.filter((staff) => {
        return staff.name.toLowerCase().includes(state.filters.search.toLowerCase());
    })
    return staffRemaining;
}

export const searchStaffSelector = (state) => state.filters.search;

export const updateHRDepartment = (state) => {
    const staffRemaining = state.staffList.filter((staff) => {
        return staff.department.includes('HR');
    })
    return staffRemaining.length;
}

export const updateFinaneDepartment = (state) => {
    const staffRemaining = state.staffList.filter((staff) => {
        return staff.department.includes('Finance');
    })
    return staffRemaining.length;
}

export const updateSaleDepartment = (state) => {
    const staffRemaining = state.staffList.filter((staff) => {
        return staff.department.includes('Sale');
    })
    return staffRemaining.length;
}

export const updateMarketingDepartment = (state) => {
    const staffRemaining = state.staffList.filter((staff) => {
        return staff.department.includes('Marketing');
    })
    return staffRemaining.length;
}

export const updateITDepartment = (state) => {
    const staffRemaining = state.staffList.filter((staff) => {
        return staff.department.includes('IT');
    })
    return staffRemaining.length;
}
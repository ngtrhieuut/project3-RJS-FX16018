export const addStaff = (data) => {
    return {
        type: 'staffList/addStaff',
        payload: data,
    }
}

export const searchStaff = (text) => {
    return {
        type: 'staffList/searchStaff',
        payload: text,
    }
}
// Write your solution in this file!
const employee = {
    name: "Jordan",
    streetAddress: "here it is",
}

function updateEmployeeWithKeyAndValue(emp, key, value){
    return {
    ...emp,
    [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value){
    emp[key] = value;
    return emp;
}

function deleteFromEmployeeByKey(emp, key){
    const newEmp = {...emp};
    delete newEmp[key];
    return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(emp, key){
    delete emp[key];
    return emp;
}
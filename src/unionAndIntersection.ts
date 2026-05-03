// Union  | 

type UserRole = 'admin'| 'user'|'guest'

const getDashboard = (role: UserRole) =>{
    if(role === 'admin'){
        return 'Admin Dashboard'
    }
    else if( role === 'user'){
        return 'User Dashboard'
    }
    else {
        return 'guest Dashboard'
    }
}
getDashboard('guest')

// interSection

type Employee = {
    id: string;
    name: string;
    phoneNo: string;

}
type Manager = {
    designation : string;
    teamSize: number;
}
type EmployeeManager = Employee & Manager

const ChowdhurySaheb : EmployeeManager ={
    id: '123',
    name: 'Chowdhury Shaheb',
    phoneNo: '01741412725',
    designation: 'manager',
    teamSize: 12
}
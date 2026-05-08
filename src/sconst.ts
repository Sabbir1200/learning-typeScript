// as const assertion

// enum 
// set of fixed string leteral means collect all data

// type UserRoles = "Admin" | "Editor" | "Viewer";

// enum UserRoles {
//     Admin = 'Admin',
//     Editor = "Editor",
//     Viewer = "Viewer",
// }

const UserRoles = {
      Admin : 'Admin',
    Editor : "Editor",
    Viewer : "Viewer",
} as const;

const canEdit = (role: keyof typeof UserRoles) =>{
    if(role === UserRoles.Admin || role === UserRoles.Editor){
        return true
    }
    else return false;
}

const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible)
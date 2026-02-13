import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Userlist } from './userlist/userlist';
import { AddUser } from './add-user/add-user';
import { EditUser } from './edit-user/edit-user';

export const routes: Routes = [
    {
        path:'',component:Login,title:"Login"
    },
    {
        path:'userlist',component:Userlist,title:"userList"
    },
    {
        path:'adduser',component:AddUser,title:"Add User"
    },
    {
        path:'edituser/:id',component:EditUser,title:"Edit User"
    },

];

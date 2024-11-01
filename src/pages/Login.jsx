

import UserForm from "../components/UserLoginComponents/UserForm";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Login = () => {

        const handelRegisterSubmit = data =>{
        console.log(data)
      
        }

        const handelUpdateProfileSubmit = data=>{
        console.log(data)
           
            }    



    return ( 
    <div className="text-center">
      <Tabs>
    <TabList>
      <Tab >Register</Tab>
      <Tab>Login</Tab>
    </TabList>

    <TabPanel>
    <UserForm formTitle={'Register'} buttonText={'register here'} handleSubmit={handelRegisterSubmit}>
       <div className="bg-orange-400 w-40 rounded-lg border-2 p-2  mx-auto text-2xl"> Register now</div>
          </UserForm>
    </TabPanel>


    <TabPanel>
    <UserForm formTitle={'Update Profile'} buttonText={'Login'} handleSubmit={handelUpdateProfileSubmit}>
    <div className="bg-lime-400 w-40 rounded-lg border-2 p-2 mx-auto text-2xl"> Login now</div>
          </UserForm>
    </TabPanel>
  </Tabs>
   







            {/* <div className="p-2 border-2 text-center  ">
        
          <UserForm formTitle={'Register'} buttonText={'register here'} handleSubmit={handelRegisterSubmit}>
            <div>
                <h1>register now </h1>
            </div>
          </UserForm>
          <UserForm formTitle={'Update Profile'} buttonText={'update now'} handleSubmit={handelUpdateProfileSubmit}>
            Keep updated 
          </UserForm>
           </div> */}
    </div>
     );
}
 
export default Login;
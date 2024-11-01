const UserForm = ({formTitle,buttonText,handleSubmit,children}) => {



const handelLocaleSubmit = (e)=>{
  e.preventDefault();
    const data={
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
     

       }


       handleSubmit(data);

}


 



return (

<div className=""> {children}
<form onSubmit={handelLocaleSubmit} action="/submit-form" method="POST" className="border border-gray-300 shadow-md rounded-lg bg-white max-w-md mx-auto p-6 flex flex-col items-center space-y-4">
      
      <div className="flex flex-col items-center w-full">
        <label htmlFor="name" className="mb-1 text-gray-700 font-semibold">Name:</label>
        <input 
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          type="text" 
          id="name" 
          name="name" 
          required 
          placeholder="Enter your name"
        />
      </div>
      
      <div className="flex flex-col items-center w-full">
        <label htmlFor="email" className="mb-1 text-gray-700 font-semibold">Email:</label>
        <input 
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          type="email" 
          id="email" 
          name="email" 
          required 
          placeholder="Enter your email"
        />
      </div>
      
      <div className="flex flex-col items-center w-full">
        <label htmlFor="password" className="mb-1 text-gray-700 font-semibold">Password:</label>
        <input 
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          type="password" 
          id="password" 
          name="password" 
          required 
          placeholder="Enter your password"
        />
      </div>

      <input 
        type="submit" value={buttonText}
        className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md mt-4 hover:bg-blue-600 transition duration-200"
      >
      
      </input>
      
 </form>
</div>
    );
  };
  
  export default UserForm;
  
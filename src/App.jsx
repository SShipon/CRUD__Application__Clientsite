
import './App.css'
import { ToastContainer, toast,  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Nav from './shared/Nav/Nav';
function App() {
   const handelAddUser = event =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user)

    fetch('http://localhost:5000/users',{
    method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
  
  })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        toast('🦄 Wow so easy!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      form.reset()
      }
      
    })
    
 }

  return (
     <>
     <Nav></Nav>
      <h3 className='text-center'>Simple CRUD Application</h3>
      <div className='form__container'>
           <form onSubmit={handelAddUser} className='d-flex'>
             <input type="text" name="name" />
             <input type="email" name="email" />
            <input type="submit" value="Add User" />
           </form>
      </div>
      <ToastContainer />
     </>
      
   
    
  )
}

export default App

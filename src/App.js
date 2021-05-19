import React,{useState} from "react";

import "./App.css"


function App() {
  const [formStep,setformStep]=useState(0);
  
  const complete=()=>{
    setformStep(cur=>cur+1)
  }
  const renderButton= () =>{
    if(formStep>2){
      return undefined
    }
    else if(formStep===2){
     return( <button
      onClick={complete}
        type="button"
        className="chiki"
      >
        Create Account
      </button>)
    }
  else{
   return( <button
    onClick={complete}
      type="button"
      className="chiki"
    >
      Next step
    </button>)
  }
}
  return (
    <div className="App">
    
      <div >
      <h1>Multi-Step Form</h1>
      </div>
      <div >
        <div className="form" >
          <form >
            {formStep === 0 &&<section>
            <h2 >
              Personal Information
            </h2>
            <label htmlFor="username">First Name</label>
            <input
              type="text"
              id="Firstname"
              name="Firstname"
              className="text-input"
             
            />
            <label htmlFor="username">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="text-input"
            
            />
            <label htmlFor="username">Contact</label>
            <input
              type="tel"
              id="contact"
              name="username"
              className="text-input"
         
            />
            
            </section>}
           {formStep === 1 && <section>
            <h2 >Address Information</h2>
           
            <label htmlFor="address">Address line 1</label>
            <input
              type="text"
              id="address"
              name="address"
              className="text-input"
            />
             <label htmlFor="address">Address line 2</label>
            <input
              type="text"
              id="address"
              name="address"
              className="text-input"
            />
             <label htmlFor="address">Address line 3</label>
            <input
              type="text"
              id="address"
              name="address"
              className="text-input"
            />
             <label htmlFor="address">Country</label>
            <input
              type="country"
              id="address"
              name="address"
              className="text-input"
            />
             <label htmlFor="address">State</label>
            <input
              type="text"
              id="address"
              name="address"
              className="text-input"
            />
             <label htmlFor="address">City</label>
            <input
              type="text"
              id="address"
              name="address"
              className="text-input"
            />
             <label htmlFor="address">Zip code </label>
            <input
              type="text"
              id="address"
              name="address"
              className="text-input"
            />
            </section>}
            {formStep===2 &&<section>
            <h2 >Account Information</h2>
            <label htmlFor="address">Email</label>
            <input
              type="email"
              id="address"
              name="address"
              className="text-input"
            />
             <label htmlFor="address">Password</label>
            <input
              type="password"
              id="address"
              name="address"
              className="text-input"
            />
             <label htmlFor="address">Confirm Password</label>
            <input
              type="password"
              id="address"
              name="address"
              className="text-input"
            /> 
           
            </section>}
            {formStep === 3 &&(<section>
            <h2>
              Account Created....
            </h2>
            </section>)}
           {renderButton()}
          
          </form>
        </div>
      </div>
    </div>
  )
}

export default App

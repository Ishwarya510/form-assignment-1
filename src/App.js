import React from "react";
import "./App.css"

const App = () => {
  const [formStep,setformStep]=React.useState(0);
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
      >
        Create Account
      </button>)
    }
  else{
   return( <button
    onClick={complete}
      type="button"
    >
      Next step
    </button>)
  }
}
  return (
    <div>
    
      <div >
        <h1 >
          Welcome to <span >the Club</span>
        </h1>
        <p >
          Become a new member in 3 easy steps
        </p>
      </div>
      <div >
        <div >
          <form>
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
              type="number"
              id="contact"
              name="username"
              className="text-input"
             
            />
            
            </section>}
           {formStep === 1 && <section>
            <h2 >Billing Information</h2>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="text-input"
            />
            </section>}
            {formStep===2 &&<section>
            <h2 >Legal Information</h2>
            <div >
              <input
                name="toc"
                type="checkbox"
              />
              <span>
                I accept the{" "}
                <a className="text-blue-400 underline" href="/">
                  Terms and Conditions
                </a>
                .
              </span>
            </div>
            <div className="block mt-6">
              <input
                name="pp"
                type="checkbox"
              />
              <span>
                I accept the{" "}
                <a  href="/">
                  Privacy Policy
                </a>
                .
              </span>
            </div>
            </section>}
            {formStep === 3 &&(<section>
            <h2>
              Congratulation
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

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function InfoForm() {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    if (name === "number") {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, "");

    // Apply formatting based on length
    if (cleaned.length <= 3) {
      value = `(${cleaned}`;
    } else if (cleaned.length <= 6) {
      value = `(${cleaned.slice(0, 3)})-${cleaned.slice(3)}`;
    } else if (cleaned.length <= 10) {
      value = `(${cleaned.slice(0, 3)})-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    } else {
      value = `(${cleaned.slice(0, 3)})-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
    }

    if (name === "pin") {
    // Format PIN as ####-####-####-####
    const cleaned = value.replace(/\D/g, "").slice(0, 16); // max 16 digits

    // Group into chunks of 4
    const groups = cleaned.match(/.{1,4}/g);
    value = groups ? groups.join("-") : "";
    }

    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(JSON.stringify(inputs, null, 2));
    console.log(inputs);
    setInputs({});
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh", // full screen height
      textAlign: "center",
    }}>

    <h1>Interested? Fill out this form!</h1>

    <form id="spidrform" onSubmit={handleSubmit}>
      <label>
      First Name:<br />
      <input 
        type="text" 
        name="fname" 
        value={inputs.fname || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <label>
      Last Name:<br />
      <input 
        type="text" 
        name="lname" 
        value={inputs.lname || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <label>
      Phone Number:<br />
      <input 
        type="text" 
        name="number" 
        value={inputs.number || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <label>
      Email Address:<br />
      <input 
        type="text" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <label>Guess the Spidr Air Fryer's Cost ($):<br />
      <input 
        type="number" 
        name="cost" 
        value={inputs.cost || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <label>
      Secret Spidr PIN:<br />
      <input 
        type="text" 
        name="pin" 
        value={inputs.pin || ""} 
        onChange={handleChange}
      />
      </label>

      <br></br>
      <br></br>

      <input type="submit" />

    </form>
    </div>

    
  )
}


export default InfoForm;

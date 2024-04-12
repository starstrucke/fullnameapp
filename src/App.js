import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {




  const [firstname, setfirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [fullname, setFullname] = useState("");
  const [submit, setSubmit] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    setFullname(firstname + " " + secondname);
    setSubmit(true);
  };




  
  return (
    <div className="App">
    <form onSubmit={handlesubmit}>
        <h1>Full Name Display</h1>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstname"
              onChange={(e) => setfirstname(e.target.value)}
              required
            />
          </label>
          <label>
            <br />
            Last Name:
            <input
              type="text"
              name="secondname"
              onChange={(e) => setSecondname(e.target.value)}
              required
            />
          </label>
          <br />
        </div>
        <button type="submit">submit</button>
      </form>
  
      {submit ? <p>Full Name: {fullname}</p> : ""}


    </div>
  );
}

export default App;

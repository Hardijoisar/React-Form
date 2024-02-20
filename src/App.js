import './App.css';
import {useState} from 'react'


function App() {
  const [formData, setFormData] = useState({
    firstname : "", 
    lastname: "",
    email : "", 
    country : "", 
    address : "", 
    city : "", 
    state : "",
    zipcode : "", 
    commentschecked : false, 
    candidateschecked : false, 
    offerschecked : false,
    pushnotifs : "", 
  })


  function changeHandler(event)
  {
    const {name , type, value, checked} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        [name] : type === 'checkbox' ? checked : value
      }
    })
    // console.log(formData.commentschecked);
  }

  function submitHandler(event)
  {
    event.preventDefault(); 
    console.log(formData);
  }


  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>First Name</label>
        <br/>
        <input type='text' name= "firstname" id='firstname' value={formData.firstname} placeholder='Hardi' onChange={changeHandler} ></input>

        <br/><br/>
        <label>Last Name</label><br/>
        <input type='text' name= "lastname" id='lastname' value={formData.lastname} placeholder='Joisar' onChange={changeHandler}></input>
        <br/><br/>

        <label>Mail id</label><br/>
        <input type='text' name= "email" id='email' value={formData.email} placeholder='hardijoisar152@gmail.com'  onChange={changeHandler}></input>
        <br/><br/>

        <label>Country</label><br/>
        <select
        value = {formData.value}
        onChange={changeHandler}
        id='country'
        name='country'
        className='dd'
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Europe">Europe</option>
          <option value="UAE">UAE</option>
        </select>

        <br/><br/>

        <label>Street Address</label><br/>
        <textarea name= "address" id='address' value={formData.address} placeholder='Ramdoot Apartment' onChange={changeHandler}></textarea>

        <br/><br/>

        <label>City</label><br/>
        <input type='text' name= "city" id='city' value={formData.city} onChange={changeHandler} placeholder='Jamnagar' ></input>

        <br/><br/>

        <label>State / Province</label><br/>
        <input type='text' name= "state" id='state' value={formData.state} onChange={changeHandler} placeholder='Gujarat' ></input>

        <br/><br/>

        <label>ZIP / Postal Code</label><br/>
        <input type='number' name= "zipcode" id='zipcode' value={formData.zipcode} onChange={changeHandler} placeholder='361005'></input>

        <br/><br/>

        <label htmlFor='ByEmail'>By Email</label> <br/>
        <input type='checkbox' id='comments' name='commentschecked' value='comments' checked={formData.commentschecked} onChange={changeHandler} ></input>
        <label htmlFor='comments'>Comments</label>
        <br/>
        <input type='checkbox' id='candidates' name='candidateschecked' value='candidates' checked={formData.candidateschecked} onChange={changeHandler} >
        </input>
        <label htmlFor='candidates'>Candidates</label>
        
        <br/>
        <input type='checkbox' id='offers' name='offerschecked' value='offers' checked={formData.offerschecked} onChange={changeHandler}></input>
        <label htmlFor='offers'>Offers</label>

        <br/><br/>

        <label>Push Notifications</label><br/>
        <input type='radio' id='everything' value='everything' name='pushnotifs' onChange={changeHandler} checked={formData.pushnotifs === 'everything'}></input>
        <label htmlFor='everything'>Everything</label> <br/>

        <input type='radio' id='sameasemail' value='sameasemail' name='pushnotifs' onChange={changeHandler} checked={formData.pushnotifs === 'sameasemail'}></input>
        <label htmlFor='sameasemail'>Same as Email</label> <br/>

        <input type='radio' id='nonotifs' value='nonotifs' name='pushnotifs' onChange={changeHandler} checked={formData.pushnotifs === 'nonotifs'}></input>
        <label htmlFor='nonotifs'>No Push Notifications</label> <br/>


        <button type='submit'>Save</button>

        

      </form>
    </div>
  );
}

export default App;

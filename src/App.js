
import './App.css';
import React , {useEffect, useState} from 'react';
import OptionCard from './component/OptionCard.jsx'


function App() {
 const [type, settype] = useState("");
 const [val, setval] = useState([1]);
 const [question, setQuestion]=useState("");
 const [questionDescription, setQuestionDescription]=useState("");

 useEffect(() => {
   
 
   
 }, [type])

 const handleAdd=(e)=>{
  e.preventDefault();
  const arr=[...val,[]];
  setval(arr);

 }
const submitHandler=()=>{

  var Question={
    servey_title:"",
    questionDescription:"",
    aswerType:"",
    val:[]
  }
  
  Question.servey_title=question;
  Question.questionDescription=questionDescription;
  Question.aswerType=type;
  
  val.forEach((data)=>{
   Question.val.push(data);
  })
  console.log(Question);
  alert("Question submitted");
}
 const options=[
  "Text",
  "Textarea",
  "Number",
  "DropDown",
  "Radio",
  "CheckBox",
  "Select",
  "Slider",
  
 ]

  return (
   <div>
    <form onSubmit={submitHandler}>
      <h1>Add Question</h1>
      <div>
        <p>Servey Title</p>
      <input type="text" placeholder='Servey title' onChange={e=>setQuestion(e.target.value)} required/>
      </div>
      <div>
      <p>Question Description</p>
      <input type="text" placeholder='Question Description' onChange={e=>setQuestionDescription(e.target.value)} required/>
      </div>
      <div>
        <p className='comparator'>Answer Type</p>
      <select  onChange={(e)=>{settype(e.target.value);setval([])}} required>
      <option value="">None</option>
        
        {
          options.map((value ,i)=>(
            <option value={value} key ={i}>{value}</option>
          ))
        }
      </select>
    </div>
   
    {val.map((data,i)=>{
      return (<OptionCard 
        index={i} 
        setval={setval}
        val={val}
        type={type}
        key={i}/>)
    })}
      <button onClick={e=>handleAdd(e)} disabled={type!==""?false:true}>+</button>
                    
    <input type="submit" value ="Submit" className='submitbtn'/> 
    </form>


   </div>
  );
}

export default App;

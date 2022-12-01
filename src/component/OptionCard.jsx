import React from 'react'
import './optionCard.css'

const OptionCard = ({index,setval,val,type}) => {
const handleDelete=(i,e)=>{
    e.preventDefault();
    var deleteval= [...val];
    console.log(i);
    deleteval.splice(i,1);
    setval(deleteval);

}
const handleChange=(value ,index)=>{
    const inputdata=[...val];
    inputdata[index].data=value;
    setval(inputdata);

}
    
  return (
    <>
    
    {(type!=="")?(
        <div className='options'> 
        <section>
        <h3>Option {index+1}</h3>
        </section>
        <section>
          <div className='componentWraper '>
            <p className='comparator'>Placeholder</p>
        <input  value={val[index].data} onChange={e=>handleChange(e.target.value,index)} placeholder='PlaceHolder'/>
        </div>
        {
        (type!=="Radio"||
        type!=="CheckBox"||
        type!=="Select")?(
       <> <div className='componentWraper '>
       <p className='comparator'>Min</p>
        <input  value={val[index].min} onChange={e =>val[index].min=e.target.value} placeholder='Min' type="Number" />
        </div>
        <div className='componentWraper '>
            <p className='comparator'>Max</p>
        <input value={val[index].max} onChange={e =>val[index].max=e.target.value}  placeholder='Max' type={"Number"} />
        </div>
        </>):""
      }
        
        
        {(type==="Textarea"||type==="Number")?(
          <div className='componentWraper '>
          <p className='comparator'>{type==="Textarea"?"Row":"Step"} </p>
          <input value={val[index].rows}  onChange={e =>val[index].rows=e.target.value}  type={"Number"} placeholder={type==="Textarea"?"Row":"Step"} />  
        </div>
        ):""
        }

        <button onClick={e=>handleDelete(index,e)}  disabled={val.length===1?true:false}>-</button>
        </section>
    </div>):""
}
</>
  )
}

export default OptionCard
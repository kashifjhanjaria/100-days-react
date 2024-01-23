import React, { useState } from 'react'

const Search = () => {  
    const [toggle , setToggle] = useState(true)

    const handleClickInputToogle = ()=>{
        setToggle(!toggle)
    }
  return (
    <div className='container'>
        <div className="wrapper">
          {
            toggle ?  <input type="text" className='inputbox' style={{width:"0px", border:"none" , outline:"none" ,transition:"width 2s" , display : toggle ? " " : "none" }}  /> :   <input className='inputbox'  type="text" style={{width:"200px" , transition:"width 2s"}} />
          }
            <button className='btn' onClick={handleClickInputToogle}>Search</button>
        </div>
    </div>
  )
}

export default Search
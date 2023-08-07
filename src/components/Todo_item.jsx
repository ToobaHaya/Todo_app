import React from 'react'
import { AiOutlineCheck } from 'react-icons/Ai';
import { AiOutlineDelete } from 'react-icons/Ai';


export default function Todo_item(props) {
  return (
    <>
     <li className="list-item">
        {props.item}
        <span className='icons'  onClick={e=>{
            props.deleteItem(props.index)}}> 
            <AiOutlineCheck className='tick'/>    
            < AiOutlineDelete className='dlt'/>
        
        </span>
    </li>
    </>
  )
}

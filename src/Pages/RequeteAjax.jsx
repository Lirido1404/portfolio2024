import React from 'react'
import { TbArrowBackUp } from "react-icons/tb";
import {Link} from "react-router-dom"
function RequeteAjax() {
  return (
    <div className=''>
        <div className='flex justify-between items-center bg-white border-b-4 border-[#B8FFC7] p-4'>
          <h1 className='text-2xl font-bold'>
            Requêtes Ajax
          </h1>

          <Link to="/">
          <div className='bg-[#303030] border-4 p-1 rounded-lg border-[#B8FFC7]'>
            <TbArrowBackUp size={25} color='white'/>

          </div>
          </Link>
        </div>
    </div>
  )
}

export default RequeteAjax
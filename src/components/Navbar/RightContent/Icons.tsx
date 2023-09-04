import React from 'react'
import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from "react-icons/io5";

type Props = {}

const Icons = (props: Props) => {
  return (
    
   <div className='flex items-center gap-x-2'>
     <div className='flex gap-x-2 text-xl hidden sm:inline-flex'>
     <BsArrowUpRightCircle     className = 'cursor-pointer hover:bg-gray-200' />
     <IoFilterCircleOutline  className = 'cursor-pointer hover:bg-gray-200'/>
     <IoVideocamOutline  className = 'cursor-pointer hover:bg-gray-200'/>
     </div>
     <div className='flex gap-x-2 text-xl'>
        <BsChatDots  className = 'cursor-pointer hover:bg-gray-200'/>
        <IoNotificationsOutline  className = 'cursor-pointer hover:bg-gray-200'/>
        <GrAdd  className = 'cursor-pointer hover:bg-gray-200 hidden sm:block '/>
     </div>
   </div>
  )
}

export default Icons
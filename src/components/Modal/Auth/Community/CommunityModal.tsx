import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { PopoverAnchor, PopoverClose, PopoverPortal } from '@radix-ui/react-popover';
import React from 'react'

type Props = {
    trigger : boolean ;
}

const CommunityModal = (props: Props) => {
  return (
    
    
    <Popover  open = {props.trigger}>
     
     <PopoverAnchor  />
     <PopoverPortal  >
     <PopoverContent className='flex flex-col w-[400px]    '  sideOffset={20}  >
       <div className='flex justify-between'> 
         
          
           <div>
            <h1  className='font-bold text-xl'>LOGIN</h1>
            
            </div>
            <PopoverClose className='font-bold'>X</PopoverClose>   
         
         </div>
        
         
         </PopoverContent>
         
        
     </PopoverPortal>
       

     
   </Popover>
  )
}

export default CommunityModal
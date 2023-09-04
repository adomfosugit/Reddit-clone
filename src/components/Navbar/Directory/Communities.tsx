import CommunityModal from '@/components/Modal/Auth/Community/CommunityModal'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import React, { useState } from 'react'
import { GrAdd } from 'react-icons/gr'

type Props = {}

const Communities = (props: Props) => {
    const [open,setOpen] = useState(false)
  return (
    <div>
        
        <CommunityModal trigger = {open} />
        <p onClick={() => setOpen(true)}>OPEN</p>
    </div>
    
  )
}

export default Communities
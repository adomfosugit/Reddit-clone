import React from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react';


type Props = {}

const SearchInput = (props: Props) => {
  return (
    <div className='w-full relative items-center flex'>
        <Input className=' h-[40px] bg-gray-50 p-6 ' placeholder='Search Reddit...'  />
        <Search  className='absolute bottom-[11px] p-1'/>
    </div>
  )
}

export default SearchInput
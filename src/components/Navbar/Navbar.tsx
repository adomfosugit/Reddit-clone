import Image from 'next/image'
import React from 'react'
import SearchInput from './SearchInput'
import RightContent from './RightContent/RightContent'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/clientApp'
import Directory from './Directory/Directory'

type Props = {}

function Navbar({}: Props) {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className='h-[70px] bg-white flex py-[8px]  px-[6px] items-center justify-even gap-2'>
        <div className='flex'>
            <Image
             src= '/images/redditface.svg' 
             width={50} 
             height={30}
              alt='Reddit Logo' />
            <Image
             className='hidden sm:block'
             src= '/images/redditText.svg' 
             width={70} 
             height={46}
              alt='Reddit Logo'
              />
        </div>
        <div>
          {user && <Directory /> }
        </div>
        <div className='flex flex-1 '>
          <SearchInput />
        </div>
        <div>
          <RightContent user = {user} />
        </div>
      

</div>
  )
}

export default Navbar
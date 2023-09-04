import React from 'react'
import AuthButtons from './AuthButtons'
import AuthModal from '@/components/Modal/Auth/AuthModal'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/clientApp'
import { User, signOut } from 'firebase/auth'
import { Button } from '@/components/ui/button'
import Icons from './Icons'
import UserMenu from './UserMenu'

type Props = {
  user?: User | null;
}

const RightContent = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
  
  return (
    <div  className='flex gap-x-1' >
      
     {user ? <Icons/>  : 
     <>
     <AuthButtons/>
      <div className='absolute  left-10 right-10 mt-3'>
      <AuthModal  />
      </div>
      
      </>
    }
    <UserMenu />
    </div>
  )
}

export default RightContent
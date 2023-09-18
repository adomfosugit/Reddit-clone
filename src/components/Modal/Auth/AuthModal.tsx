"use client"

import { authModalState } from '@/Atoms/AuthModalAtom'
import {useRecoilState} from 'recoil'
import { PopoverContent, Popover } from '@/components/ui/popover'
import { PopoverAnchor, PopoverClose, PopoverPortal, PopoverTrigger } from '@radix-ui/react-popover'
import React, { useEffect } from 'react'
import OauthButtons from './OauthButtons'
import AuthInputs from './AuthInputs'
import ResetPassword from './ResetPassword'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/clientApp'


type Props = {}

const AuthModal = (props: Props) => {
  const [popOverState, setPopOverState] = useRecoilState(authModalState)
  const [user, loading, error] = useAuthState(auth);
  const handleclose = () => {
    setPopOverState((prev) =>
    ({...prev,
      open:false,
    }))
  }
  useEffect(() => {
    if (user) {
      handleclose()
    }
  
    
  }, [user])
  
  return (
    

      <Popover 
       open = {popOverState.open} onOpenChange={handleclose}
       >
        <PopoverTrigger className='hidden' />
        <PopoverAnchor  />
        <PopoverPortal  >
        <PopoverContent  className='flex flex-col w-[400px] mt-10 '   >
          <div className='flex justify-between'> 
            
             
              <div>
               <h1  className='font-bold text-xl'>{popOverState.view === 'login' && 'Login'}</h1>
               <h1 className='font-bold text-xl'>{popOverState.view === 'signup' && 'Sign Up'}</h1>
               <h1 className='font-bold text-xl'>{popOverState.view === 'resetPassword' && 'Reset Password'}</h1>
               </div>
               <PopoverClose className='font-bold'>X</PopoverClose>   
            
            </div>
            {popOverState.view === 'login' || popOverState.view === 'signup' ? 
            <div className='flex flex-col mx-2 mt-4'>
            <OauthButtons />
            <p className='font-bold mx-auto'> OR </p>
            <AuthInputs />
           
            </div> :  <ResetPassword />}
            
            </PopoverContent>
            
           
        </PopoverPortal>
          

        
      </Popover>

    
  )
}

export default AuthModal
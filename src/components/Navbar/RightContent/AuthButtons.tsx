import { authModalState } from '@/Atoms/AuthModalAtom'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useSetRecoilState} from 'recoil'

type Props = {} 

const AuthButtons = (props: Props) => {
    const setPopOverState = useSetRecoilState(authModalState)
  return (
    <div className='flex justify-between gap-1' >
        
        <Button 
        variant= 'outline'
        className='border-blue-600 border-2 rounded-full text-blue-600 w-[70px] sm:w-[110px] 
        hidden  sm:block' 
        onClick={() => setPopOverState({open:true, view : 'login'})}
        >
        Log In</Button>
        <Button 
        className=' rounded-full bg-blue-600 
        w-[70px] sm:w-[110px] hidden  sm:block hover:bg-blue-600'
        onClick={() => setPopOverState({open:true, view : 'signup'})}
        > Sign Up</Button>
    </div>
  )
}

export default AuthButtons
import { authModalState } from '@/Atoms/AuthModalAtom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { auth } from '@/firebase/clientApp'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import { useSetRecoilState } from 'recoil'

type Props = {}

const ResetPassword = (props: Props) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );
  const [password, setPassword] = useState(
    { email : ''
  });
  const [success,setSuccess] = useState(false)
  const onChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setPassword((prev) => ({
      ...prev,
      [event.target.name] : event.target.value
    }))
   

  }
  const onSubmit =  async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendPasswordResetEmail(password.email)
    setSuccess(true)

  }
  return (
    <form onSubmit={onSubmit} className='items-center '>
      <Image  className = 'mx-auto' src= '/images/RedditFace.svg' height={40} width={40} alt='Reddit Image' />
      <p className='font-bold text-center py-2'> Reset your Password</p>
      <p className='text-center mb-2'>Enter the email account associated with your Password and we will send you a reset link</p>

      <Input name='email' type='email' placeholder='Email' required onChange={onChange}/>
      {success ? 'Please Check your email' : <></>}
      {error && <p className='text-red-600'> Invalid Email</p>}
      
      <Button type='submit'  className='w-full bg-blue-600 p-2 my-2 rounded-full  hover:bg-blue-400'> 
        {sending ? <Loader2  className='animate-spin'/> : 'Reset Pasword'}</Button>
        <div className='flex gap-x-1 mx-auto text-sm justify-evenly'>
          <div className='flex gap-x-2'>
        <p className='text-blue-600 font-semibold cursor-pointer'
            onClick={() => setAuthModalState((prev) => ({
                ...prev,
                 view : "login"
            }))} >Login</p>
            <p className='text-blue-600 font-semibold cursor-pointer'
            onClick={() => setAuthModalState((prev) => ({
                ...prev,
                 view : "signup"
            }))} >Signup</p>
            </div>
        
        </div>
    </form>
  )
}

export default ResetPassword
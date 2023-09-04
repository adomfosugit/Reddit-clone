import { authModalState } from '@/Atoms/AuthModalAtom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { auth } from '@/firebase/clientApp'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useSetRecoilState } from 'recoil'

type Props = {}

const Login = (props: Props) => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [LoginForm,setLoginForm] = useState(
        {email: '',
        password: ''}

    )
    // FireBase Logic

    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        signInWithEmailAndPassword(
        LoginForm.email,LoginForm.password)}
    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        // Update form State
        setLoginForm((prev) => ({
            ...prev,
            [event.target.name] : event.target.value }
        ))
    }
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-y-3'>
        <Input 
        name='email' 
        type = 'email' 
        placeholder='Email'
        onChange={onChange} />
        <Input 
        name='password'
        type='password'
        placeholder='Password'
        onChange={onChange}   />
        {error && <p className='text-red-800 text-center'>{error.message}</p>}
        <Button type='submit'  className='bg-blue-600 rounded-full  hover:bg-blue-400'> 
        {loading ? <Loader2  className='animate-spin'/> : 'Login'}</Button>
       <div className='flex gap-x-2 mx-auto'> <p>Forgot your Password?</p>
            <p className='text-blue-800 cursor-pointer underline' onClick={() => setAuthModalState((prev) => ({
                ...prev,
                view : 'resetPassword'
            }))}> Reset</p>
       </div>
        <div className='flex gap-x-1 mx-auto text-sm'>
            <p>New Here?</p>
            <p className='text-blue-600 font-semibold cursor-pointer'
            onClick={() => setAuthModalState((prev) => ({
                ...prev,
                 view : "signup"
            }))} >SIGN UP</p>
        
        </div>
    </form>
  )
}

export default Login
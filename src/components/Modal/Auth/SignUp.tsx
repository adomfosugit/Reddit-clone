import { authModalState } from '@/Atoms/AuthModalAtom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import {useState} from 'react'
import { useSetRecoilState } from 'recoil'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp'
import {Loader2} from 'lucide-react'
type Props = {}

const SignUp = (props: Props) => {
  const setAuthModalState = useSetRecoilState(authModalState)
   const [signup, setSignup] = useState(
    {
        email : '',
        password: '',
        confirmPassword: ''
    
    }
    
   ); 
   const [error, setError] =  useState('');
   const [
    createUserWithEmailAndPassword,
    user,
    loading,
    userError,
  ] = useCreateUserWithEmailAndPassword(auth);
   const onSubmit = (event:React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    if (error) setError('')
    if ( signup.password !== signup.confirmPassword){
        setError('Passwords Do not much')
        return;
    }
    createUserWithEmailAndPassword(signup.email,signup.password)}
   const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSignup((prev) => ({
       ...prev,
       [event.target.name]:event.target.value 
    }))
   
   } 
  return (
    <form  onSubmit = {onSubmit} className='flex flex-col gap-y-2'>
        <Input
         name='email' 
         type='email'
          placeholder='Email'
          onChange={onChange}
          required/>
        <Input 
        name='password' 
        type = 'password'
        placeholder='Password'
        onChange={onChange} 
        required />
        <Input 
        name='confirmPassword' 
        type = 'password' 
        placeholder='Confirm Password'
        onChange={onChange} 
        required/>
        {error || userError &&
         <p className='text-sm text-red-800 text-center'> {error || 'A user with the email Provided exist'}</p>}
        
        <Button type='submit' className='rounded-full bg-blue-600 hover:bg-blue-600'>
          {loading ? <Loader2  className='animate-spin'/> : 'Sign Up'}
          </Button>
        <div className='flex gap-x-1 mx-auto text-sm'>
            <p>Already a Redditer?</p>
            <p className='text-blue-600 font-semibold cursor-pointer'
            onClick={() => setAuthModalState((prev) => ({
                ...prev,
                 view : "login"
            }))} >Login</p>
        
        </div>
    </form>
  )
}

export default SignUp

import { Button } from '@/components/ui/button'
import { auth, firestore } from '@/firebase/clientApp'
import { User } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'


type Props = {}

const OauthButtons = (props: Props) => {
  const [signInWithGoogle, userCred, loading, error] = useSignInWithGoogle(auth);
  const createUserDocument = async (user:User) => {
      const userDocRef = doc(firestore,'users',user.uid);
      await setDoc(userDocRef, JSON.parse(JSON.stringify(user)))
  }
  useEffect(() => {
   if(userCred){
    createUserDocument(userCred.user)
   }
  }, [userCred])
  
  return (
    <div className='gap-y-2 flex flex-col mb-2 '>
      <Button className='flex gap-x-2 w-full bg-white text-black border-2 rounded-full hover:bg-white' 
      onClick={() => signInWithGoogle()}>
        <Image src= '/images/googlelogo.png' width={20} height={20} alt='Google Logo' />
        {loading ? <Loader2 className='animate-spin'/> : 'Continue with Google'}
        </Button>
      <Button className='flex gap-x-2 w-full bg-white text-black border-2 rounded-full hover:bg-white'>
       
        Some Other Provider
        </Button>
        {error && <p className='text-red-800'>{error.message}</p>}
       
    </div>
  )
}

export default OauthButtons
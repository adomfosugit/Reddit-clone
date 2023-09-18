import { Dialog } from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { GrAdd } from 'react-icons/gr'
import { TiHome } from 'react-icons/ti'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { BsEyeFill, BsFillPersonFill } from 'react-icons/bs'
import { HiLockClosed } from 'react-icons/hi'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, firestore } from '@/firebase/clientApp'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Loader2 } from 'lucide-react'

type Props = {}

const CommunityModal = (props: Props) => {
    const [user] = useAuthState(auth)
    const [error,setError] = useState('')
    const [communityName, setCommunityName] = useState("")
    const [char, setChar] = useState(21);
    const [communityType,setCommunityType] = useState('public')
    const [loading,setLoading] = useState(false)
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 21) return;
        setCommunityName(event.target.value )
        setChar(21-event.target.value.length)

    }
   
    const onCommunityTypeChange  = (event:React.ChangeEvent<HTMLInputElement>) => {
      
        setCommunityType(event.target.name)
    }
   // Funciton for contacting with the firestore database
   const handleCreateCommunity = async() => {
    // Validate Community name  (3-21 characters ) and unique Community name 
    const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(communityName) || communityName.length < 3) {
      setError(`Sorry r/${communityName} is invalid please try another `)
      return
    }
    setLoading(true);
    // create community document in firestore 
    // check that community does not exist in the firestore already
    try {
      const communityDocRef = doc(firestore, 'communities' , communityName )
      const communityDoc = await getDoc(communityDocRef)

      if (communityDoc.exists()){ 
        setError(' Community Name Already Exist')
        setLoading(false)
        setCommunityName('')
        return;
      }
  // setDoc updates documents in the firebase database
  // specify the fields you want 
  // server time stamp is a function from firebase data

  // many to many relationships  subcollection 
      await setDoc(communityDocRef, {
      creatorId:user?.uid,
      createdAt: serverTimestamp(),
      numberOfMembers: 1,
      privacyType: communityType,  
      })
      
    } catch (error:any) {
      console.log(error)
      setError(error.message)

      
    }
   
   
   }
  return (
    <Dialog>
  <DialogTrigger ><div className='flex p-2'><TiHome  size = {20}/><GrAdd size = {20}/> </div></DialogTrigger>
  <DialogContent >
    <DialogHeader>
      <DialogTitle className='font-bold'>Create a Community</DialogTitle>
      
      <DialogDescription>
        <div className='flex flex-col'>
            <p>Community names including capitalization cannot be changed.</p>

            <div className=' p-2 mb-2'> 
              
                <Input  placeholder='r/' type='text' value={communityName}  onChange={handleChange}/>
                <p> {char} Characters remaining</p>
                <p className='text-red-800'>{error}</p>
            </div>
            <h1 className='text-black font-bold'>Community type </h1>
            <div className='flex flex-col gap-y-1   '>
                <div className='flex items-center gap-x-2'><Input type='checkbox' name='public' checked = {communityType === 'public'} onChange={onCommunityTypeChange} className='w-[10px]'/> <BsFillPersonFill /> <p className='font-bold'> Public</p>  <span  className='text-[12px]'>Anyone can view, post, and comment to this community </span></div>
                <div className='flex items-center gap-x-2'><Input type='checkbox' name='restricted' checked = {communityType === 'restricted'} onChange={onCommunityTypeChange}  className='w-[10px]'/>  <BsEyeFill  /> <p className='font-bold'>Restricted</p>  <span className='text-[12px]'>Anyone can view this community, but only approved users can post </span>  </div>
                <div className='flex items-center gap-x-2'><Input type='checkbox' name='private' checked = {communityType === 'private'} onChange={onCommunityTypeChange}   className='w-[10px]'/> < HiLockClosed />  <p className='font-bold'>Private</p>  <span  className='text-[12px]'>Only approved users can view and submit to this community</span></div>
                
               
                
            </div>
            
        </div>
      </DialogDescription>
      
            <Button className='bg-blue-800 hover:bg-blue-700' onClick={handleCreateCommunity}>{loading ? <Loader2 className='animate-spin'/>:'Create Community'} </Button>
          
    </DialogHeader>
  </DialogContent>
  
</Dialog>

  )
}

export default CommunityModal
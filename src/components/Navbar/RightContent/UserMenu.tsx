import { DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { auth } from '@/firebase/clientApp';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItemIndicator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { ChevronDownIcon, User2Icon, UserCircle } from 'lucide-react';
import react from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaRedditSquare } from 'react-icons/fa'
import {CgProfile} from 'react-icons/Cg'
import {MdOutlineLogin } from 'react-icons/md'
import { signOut } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/Atoms/AuthModalAtom';
type Props = {}

function UserMenu({}: Props) {
    const [user, loading, error] = useAuthState(auth);
    const setAuthModalState = useSetRecoilState(authModalState);
    const openModal = () => {
        setAuthModalState((prev) => ({
            ...prev,
            open : true,
            view : 'login'
        }))
    }
  return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild >{user? <div className='flex items-center'><FaRedditSquare size={30} className = 'text-gray-300' /> <ChevronDownIcon size={20} /></div>  : <UserCircle />}
            
            </DropdownMenuTrigger>
            
            <DropdownMenuContent  className='bg-white w-[190px] p-2 mt-[25px] font-semibold '>
            <DropdownMenuLabel className='text-center'><p>{user?.displayName || user?.email?.split('@')[0]}</p></DropdownMenuLabel>
            <DropdownMenuSeparator />
                {user? <>
                    <DropdownMenuGroup >
                    <DropdownMenuItem className='gap-x-3 hover:bg-blue-800 hover:text-white'>
                        <CgProfile size={20} /> 
                        <p> Profile </p>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='gap-x-3 hover:bg-blue-800 hover:text-white'>
                        <MdOutlineLogin size={20} /> 
                        <p onClick={() => signOut(auth)}> Logout </p>
                    </DropdownMenuItem>
                  
                </DropdownMenuGroup></> : <><DropdownMenuGroup >
                   
                    <DropdownMenuItem className='gap-x-3 hover:bg-blue-800 hover:text-white'>
                        <MdOutlineLogin size={20} /> 
                        <p onClick={openModal}> Login/Signup </p>
                    </DropdownMenuItem>
                  
                </DropdownMenuGroup></>}
                
            </DropdownMenuContent>
        </DropdownMenu>
  )
}

export default UserMenu
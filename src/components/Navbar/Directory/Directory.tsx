import { DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { TiHome } from 'react-icons/ti'
import Communities from './Communities';
type Props = {}

function Directory({}: Props) {
   
  return (
        <DropdownMenu >
            <DropdownMenuTrigger  > <TiHome size={30} /></DropdownMenuTrigger>
            
            <DropdownMenuContent  className= ' bg-white w-[250px] p-2 mt-[25px] font-semibold mx-auto '>
           
            <DropdownMenuSeparator />
                
                    <DropdownMenuGroup  >
                    <DropdownMenuItem className='gap-x-3 hover:bg-blue-800 hover:text-white'>
                        
                        <Communities />
                    </DropdownMenuItem>
                    
                 
                </DropdownMenuGroup>  
            </DropdownMenuContent>
        </DropdownMenu>
  )
}

export default Directory
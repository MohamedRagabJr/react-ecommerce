import { Button } from "@/components/ui/button"
import { FaRegUserCircle } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from "next-auth/react";
import Link from "next/link"

export function Profile() {
   const handleSignout = () => {
     void signOut({callbackUrl: "/login" , redirect: true})
   }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-green-900 text-white">
          <FaRegUserCircle />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
             <Link href="/account">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
             <Link href="/allorders">Orders</Link>
          </DropdownMenuItem>
          
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          
          <button onClick={handleSignout}> 
            Log out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

'use client'
import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from '@nextui-org/react'
import { logo } from '../../public/assets'
import Image from 'next/image'
import { Link } from '@nextui-org/react'
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='w-full'>
        <Navbar className='flex w-full justify-around items-center md:py-6 md:px-6' isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBordered maxWidth='full'>
            <NavbarBrand>
                <Link href='/'>
                    <Image src={logo} alt='logo' width={300} className='pr-9'/>
                </Link>
            </NavbarBrand>
            <NavbarMenu className='flex items-center'>
                <NavbarMenuItem className='mb-5 mt-5'>
                    <Link href='/'>Home</Link>
                </NavbarMenuItem>
                <NavbarMenuItem className='mb-5'>
                    <Link href='/recipelist'>Recipe List</Link>
                </NavbarMenuItem>
                <NavbarMenuItem className='mb-5'>
                    <Link href='/projects'>Create Recipe</Link>
                </NavbarMenuItem>
            </NavbarMenu>
            <NavbarContent className='sm:flex hidden ' justify='end' >
                <NavbarItem>
                    <Link href='/' className='md:text-xl sm:text-xl tracking-wide hover:text-red-600'>Homehh</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='/recipelist' className='md:text-xl sm:text-xl tracking-wide ml-9 hover:text-red-600'>Recipe List</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='/projects' className='md:text-xl sm:text-xl tracking-wide ml-9 hover:text-red-600'>Create Recipe</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className='sm:hidden flex' justify='end'>
                <NavbarMenuToggle aria-label={isMenuOpen ? "close menu" : "Open menu"}/>
            </NavbarContent>

        </Navbar>

    </div>
  )
}

export default NavBar
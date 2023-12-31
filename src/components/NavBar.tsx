'use client'
import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from '@nextui-org/react'
import { logo } from '../../public/assets'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { Link } from '@nextui-org/react'
import { usePathname } from 'next/navigation'

const NavBar = () => {
    const path = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
  return (
    <div className='w-full'>
        <Navbar className='flex w-full justify-around items-center md:py-6 md:px-6' isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBordered maxWidth='full'>
            <NavbarBrand>
                <motion.div
                    animate={{x: [0, 100, 0]} }
                >
                <Link href='/'>
                    <Image src={logo} alt='logo' width={300} className='pr-9'/>
                </Link>
                </motion.div>
            </NavbarBrand>
            <NavbarMenu className='flex items-center'>
                <NavbarMenuItem className='mb-5 mt-5'>
                    <Link href='/'>Home</Link>
                </NavbarMenuItem>
                <NavbarMenuItem className='mb-5'>
                    <Link href='/recipe'>Recipe List</Link>
                </NavbarMenuItem>
                <NavbarMenuItem className='mb-5'>
                    <Link href='/create'>Create Recipe</Link>
                </NavbarMenuItem>
            </NavbarMenu>
            <NavbarContent className='sm:flex hidden ' justify='end' >
                <NavbarItem>
                    <motion.div
                        whileHover={{scale: 1.2}}
                    >
                        <Link href='/' className={`${'/' === path ? "md:text-xl sm:text-xl font-bold tracking-wide scale-125 ml-9 text-red-600" : "md:text-xl sm:text-xl font-bold  tracking-wide ml-9 text-black"}`}>Home</Link>
                    </motion.div>
                </NavbarItem>
                <NavbarItem>
                    <motion.div
                        whileHover={{scale: 1.2}}
                    >
                       <Link href='/recipe' className={`${'/recipe' === path ? "md:text-xl sm:text-xl font-bold tracking-wide scale-125 ml-9 text-red-600" : "md:text-xl sm:text-xl font-bold  tracking-wide ml-9 text-black"}`}>Recipe List</Link>
                    </motion.div>
                </NavbarItem>
                <NavbarItem>
                    <motion.div
                        whileHover={{scale: 1.2}}
                    >
                        <Link href='/create' className={`${'/create' === path ? "md:text-xl sm:text-xl font-bold tracking-wide scale-125 ml-9 text-red-600" : "md:text-xl sm:text-xl font-bold  tracking-wide ml-9 text-black"}`}>Create Recipe</Link>
                    </motion.div>
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
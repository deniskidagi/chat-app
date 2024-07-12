import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import React from 'react'
import { GiMatchTip } from 'react-icons/gi'
import NavLink from './NavLink'

export default function TopNav() {
  return (
    <div>
        <Navbar
        maxWidth='xl'
        className='bg-gradient-to-r from-purple-400 to-purple-900'
        classNames={{
            item:[
                'text-xl',
                'text-white',
                'uppercase',
                'data-[active=true]:text-yellow-200'
            ]
        }}
        >
            <NavbarBrand as={Link} href={'/'}>
                <GiMatchTip size={40} className='text-gray-200'/>
                <div className='font-bold text-2xl flex'>
                    <span className='text-gray-900'>Next</span>
                    <span className='text-gray-200'>Match</span>
                </div>
            </NavbarBrand>
            <NavbarContent justify='center'>
                <NavLink href={'/members'} label={'Matches'}/>
                <NavLink href={'/lists'} label={'Lists'}/>
                <NavLink href={'/messages'} label={'Messages'}/>
    
            </NavbarContent>
            <NavbarContent justify='end'>
                <Button as={Link} href='/login' variant='bordered' className='text-white'>login</Button>
                <Button as={Link} href='/register' variant='bordered' className='text-white'>register</Button>
            </NavbarContent>
        </Navbar>
    </div>
  )
}

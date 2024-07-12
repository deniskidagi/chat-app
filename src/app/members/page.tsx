import Link from 'next/link'
import React from 'react'

export default function MembersPage() {
  return (
    <div>
        <p className='text-3xl'>welcome to members page</p>
        <Link href={'/'}>Home</Link>
    </div>
  )
}

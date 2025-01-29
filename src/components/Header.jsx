import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
    return (
        <>
            <div className='flex bg-teal-600 flex-1 text-white px-10 py-3'>
                <h1 className='text-white font-bold text-2xl'>PTPI API WORK</h1>
            </div>

            <div className='flex flex-1 mt-10 px-[10%] gap-4'>
                <NavLink to="/subject" className="bg-red-600 text-white px-3 py-2 rounded">View All Subjects</NavLink>
                <NavLink to="/skills" className="bg-blue-600 text-white px-3 py-2 rounded">View All Skills</NavLink>
            </div>
        </>
    )
}

export default Header
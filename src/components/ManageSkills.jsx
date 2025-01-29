import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Header from './Header';

const ManageSkills = () => {

    const navigate = useNavigate();
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        // if token not exist
        if(!localStorage.getItem("token")){
            navigate("/login");
        }

        async function callingSkills(){
            await fetch("https://ptpi.tech/api/admin/skill/", {
                method:"get",
                headers:{
                    "Authorization" : `Token ${localStorage.getItem("token")}`
                }
            }).then(resp => resp.json()).then(resp => setSkills(resp))
        }

        callingSkills();
    }, []);
  return (
    <div className='w-full'>
        <Header/>
       <div className="flex flex-col px-[10%]">
        <div className="flex my-5">
                <h2 className='text-3xl font-semibold'>Manage Skills</h2>
            </div>
            <table className='w-full border mt-3'>
                <thead>
                    <tr>
                        <th className='p-3 border'>Id</th>
                        <th className='p-3 border'>Name</th>
                        <th className='p-3 border'>description</th>
                        <th className='p-3 border'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {skills.map((skill, index) => {
                        return (
                            <tr key={index}>
                                <td className='p-3 border'>{skill.id}</td>
                                <td className='p-3 border'>{skill.name}</td>
                                <td className='p-3 border'>{skill.description}</td>
                                <td className='p-3 border'>

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
       </div>

    </div>
  )
}

export default ManageSkills
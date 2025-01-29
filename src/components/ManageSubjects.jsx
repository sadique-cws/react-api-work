import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router';

const ManageSubjects = () => {
    const [subjects, setSubjects] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        //if not login
        if(!localStorage.getItem("token")){
            navigate("/login");
        }

        async function fetchSubject(){
            await fetch("https://ptpi.tech/api/admin/subject/",{
                method:"get",
                headers:{
                    "Authorization" : `Token ${localStorage.getItem("token")}`
                }
            }).then(resp => resp.json()).then(resp => setSubjects(resp));
        }

        fetchSubject();
    }, []);
  return (
    <div className='w-full'>
        <Header/>
       <div className="flex flex-col px-[10%]">
        <div className="flex my-5">
                <h2 className='text-3xl font-semibold'>Manage Subjects</h2>
            </div>
            <table className='w-full border mt-3'>
                <thead>
                    <tr>
                        <th className='p-3 border'>Id</th>
                        <th className='p-3 border'>Name</th>
                        <th className='p-3 border'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map((subject, index) => {
                        console.log(subject);
                        return (
                            <tr key={index}>
                                <td className='p-3 border'>{subject.id}</td>
                                <td className='p-3 border'>{subject.subject_name}</td>
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

export default ManageSubjects
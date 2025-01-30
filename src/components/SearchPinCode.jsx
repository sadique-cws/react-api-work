import React, { useState } from 'react'
import Header from './Header'
import "./loader.css"
const SearchPinCode = () => {
    const [postOffice, setPostOffice] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const handleForm = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        let formdata = new FormData(e.currentTarget);
        let pincode = formdata.get("pincode")

        await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
            .then(resp => resp.json())
            .then(resp => setPostOffice(resp[0].PostOffice))

        setIsLoading(false);

    }
    return (
        <div className='w-full'>
            <Header />
            <div className="flex flex-col px-[10%]">
                <div className="flex my-5 flex-col">
                    <h2>Search PostOffce Details By Pincode</h2>
                    <form onSubmit={handleForm} method='post' className='flex p-4 bg-slate-200 rounded-lg mt-5'>
                        <input type="text" name='pincode' placeholder='enter pincode for search' className="border w-full px-3 py-2 rounded" />
                        <input type="submit" value="Go" className="bg-teal-700 text-white px-3 py-2" />
                    </form>
                </div>


                {/* calling resp.PostOffice */}

                <div className="grid grid-cols-3 gap-5">

                    {postOffice && !isLoading && postOffice.map((po, index) => (
                        <table key={index} className='flex-1'>
                            <thead>
                                <tr>
                                    <th colSpan={2} className='border p-2 bg-teal-100 text-lg font-semibold'>{po.Name}</th>
                                </tr>
                            </thead>
                            <tbody className='bg-red-50'>
                                <tr>
                                    <th className='border p-3'>Name</th>
                                    <td className='border p-3'>{po.Name}</td>
                                </tr>
                                <tr>
                                    <th className='border p-3'>BranchType</th>
                                    <td className='border p-3'>{po.BranchType}</td>
                                </tr>
                                <tr>
                                    <th className='border p-3'>District</th>
                                    <td className='border p-3'>{po.District}</td>
                                </tr>
                                <tr>
                                    <th className='border p-3'>State</th>
                                    <td className='border p-3'>{po.State}</td>
                                </tr>
                            </tbody>
                        </table>
                    ))}



                    {isLoading && (
                        //    <div className='w-full justify-center flex items-center h-[400px]'>
                        //      <div class="loader">
                        //     <span></span>
                        //     <span></span>
                        //     <span></span>
                        //     <span></span>
                        //     <span></span>
                        //     <span></span>
                        //   </div>   
                        //     </div>   



                        <>
                            <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse">
                                <span class="text-slate-400">Loading...</span>
                            </div>
                            <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse">
                                <span class="text-slate-400">Loading...</span>
                            </div>
                            <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse">
                                <span class="text-slate-400">Loading...</span>
                            </div>
                            <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse">
                                <span class="text-slate-400">Loading...</span>
                            </div>
                            <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse">
                                <span class="text-slate-400">Loading...</span>
                            </div>
                            <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse">
                                <span class="text-slate-400">Loading...</span>
                            </div>
                            <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse">
                                <span class="text-slate-400">Loading...</span>
                            </div>
                        </>

                    )}

                </div>

            </div>
        </div>
    )
}

export default SearchPinCode
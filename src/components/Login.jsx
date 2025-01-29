import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Login = () => {
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState("");
    const redirect = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData(e.currentTarget);
    let email = data.get("email");
    let password = data.get("password");

    await fetch(`https://ptpi.tech/api/login/`, {
        method:"POST",
        body: JSON.stringify({email, password}),
        headers:{
            "Content-type":"application/json"
        }
    }).then(resp => resp.json()).then(resp => localStorage.setItem("token", resp.access_token));

    setIsLoading(false);
    redirect("/");

}
  return (
    <div className='flex justify-center w-full items-center h-screen bg-slate-100'>

    <div className='bg-white px-3 py-4 w-3/12 rounded border border-slate-300'>
    <div className="flex flex-1">
        <h2 className='border-b text-lg mb-3 w-full font-semibold text-red-600'>Teacher Login</h2>
    </div>
     <form onSubmit={handleSubmit} method="post" className='flex flex-col gap-3'>
        
            <div className="mb-3 flex flex-col">
                <label htmlFor="">email</label>
                <input type="email" className='border py-2 px-3 rounded' name='email' />
            </div>
            <div className="mb-3 flex flex-col">
                <label htmlFor="">password</label>
                <input type="password" className='border py-2 px-3 rounded' name='password' />
            </div>
            <input type="submit" className={`bg-red-600 px-3 py-2 rounded text-white ${isLoading && "cursor-not-allowed"}`} value={isLoading ? "Please Wait.." : "Login"} disabled={isLoading}/>
        </form>
{
    error && <p className='text-sky-500 bg-sky-50 px-3 py-2 rounded border border-red-500 mt-5 w-full'>{error}</p>
}
</div>
</div>
  )
}

export default Login
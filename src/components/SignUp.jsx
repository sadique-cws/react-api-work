import React, { useState } from 'react'
import { redirect } from 'react-router';



const SignUp = () => {

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState("");

    const handleSubmit  = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let data = new FormData(e.currentTarget);
        let Fname = data.get("Fname");
        let Lname = data.get("Lname")
        let email = data.get("email")
        let password = data.get("password");

        try{
            await fetch("https://ptpi.tech/api/register/",{
                method:"POST",
                body:JSON.stringify({Fname, Lname, email, password}),
                headers:{
                    "content-type":"application/json"
                }
            }).then(resp => resp.json()).then(resp => setError(resp.message))
            setIsSubmitted(true);

        }

        catch(error){
            setError(error.message)
            throw new Error(error)
        }
        finally{
            setIsLoading(false);
            setEmail(email);
        }
        
        
    }

    const handleVerify = async (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        let otp = data.get("otp");
        setIsLoading(true);
        await fetch("https://ptpi.tech/api/verify/",{
            method:"POST",
            body:JSON.stringify({otp, email}),
            headers:{
                "content-type":"application/json"
            }
        }).then(resp => resp.json()).then(resp => setError(resp.message))
        setIsLoading(false);
        redirect("/login");

    }
  return (
    <div className='flex justify-center w-full items-center h-screen bg-slate-100'>

    <div className='bg-white px-3 py-4 w-3/12 rounded border border-slate-300'>
        <div className="flex flex-1">
            <h2 className='border-b text-lg mb-3 w-full font-semibold text-red-600'>{isSubmitted ? "Verify Email" : "Create An Account" }</h2>
        </div>
        {
            !isSubmitted && (<form onSubmit={handleSubmit} method="post" className='flex flex-col gap-3'>
                <div className="mb-3 flex flex-col">
                    <label htmlFor="">First Name</label>
                    <input type="text" className='border py-2 px-3 rounded' name='Fname' />
                </div>
                <div className="mb-3 flex flex-col">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className='border py-2 px-3 rounded' name='Lname' />
                </div>
                <div className="mb-3 flex flex-col">
                    <label htmlFor="">email</label>
                    <input type="email" className='border py-2 px-3 rounded' name='email' />
                </div>
                <div className="mb-3 flex flex-col">
                    <label htmlFor="">password</label>
                    <input type="password" className='border py-2 px-3 rounded' name='password' />
                </div>
                <input type="submit" className={`bg-red-600 px-3 py-2 rounded text-white ${isLoading && "cursor-not-allowed"}`} value={isLoading ? "Sending Email..." : "Create an Account"} disabled={isLoading}/>
            </form>)
        }

        {
            isSubmitted && (
            <form onSubmit={handleVerify} method="post" className='flex flex-col gap-3'>
                <div className="mb-3 flex flex-col">
                    <label htmlFor="">Enter OTP</label>
                    <input type="text" className='border py-2 px-3 rounded' name='otp' />
                </div>
                
                <input type="submit" className={`bg-red-600 px-3 py-2 rounded text-white ${isLoading && "cursor-not-allowed"}`} value={isLoading ? "Verifing OTP..." : "Verify Now"} disabled={isLoading}/>
            </form>
            )
        }
        
    {
        error && <p className='text-sky-500 bg-sky-50 px-3 py-2 rounded border border-red-500 mt-5 w-full'>{error}</p>
    }
    </div>
    </div>
  )
}

export default SignUp
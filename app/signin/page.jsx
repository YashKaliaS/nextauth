'use client'
import {signIn} from 'next-auth/react';
export default function SignIn(){


    return (
        <div>
            <h1>Welcomeee user</h1>
            <button className=" btn btn-google border-4 bg-red-400" onClick={()=>{signIn('google')}}>Sigin with google </button>
            <button className=" btn btn-discord border-4 bg-blue-400" onClick={()=>{signIn('discord')}}>Sigin with Discord</button>
        </div>
    )




}
import { useContext, useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { Auth } from 'firebase/auth';

export function Authprovider({children})
{
    const [user, SetUser]= useState(null);
    const [login, SetLogin] = useState(false);
    const [loading, SetLoading] = useState(true);

    useEffect(()=> {
       
    },[])

    async function initializeUser(user)
    {
        if(user){
            SetUser({...user});
            SetLogin(true);
        }
        else{
            SetUser(null);
            SetLogin(false);
            
        }
        SetLoading(false);
    }

    const value = 
    {
        user,
        login, 
        loading
    }
    return
    (
        <>
        
        
        
        </>
    )
}
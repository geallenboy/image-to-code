"use client"
import { useAuthContext } from '@/app/provider'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Credits() {

    const { user } = useAuthContext();
    const [userData, setUserData] = useState<any>();
    useEffect(() => {
        user && GetUserCredits();
    }, [user])

    const GetUserCredits = async () => {
        const result = await axios.get('/api/user?email=' + user?.email);
        console.log(result.data)
        setUserData(result.data);
    }

    return (
        <div>
            <h2 className='font-bold text-2xl'>积分</h2>

            <div className='p-5 bg-slate-50 rounded-xl border
             flex justify-between items-center mt-6'>
                <div>
                    <h2 className='font-bold text-xl'>我的积分:</h2>
                    {userData?.credits && <p className='text-lg text-gray-500'>{userData?.credits} Credits left</p>}
                </div>
                <Button>购买积分</Button>
            </div>
        </div>
    )
}

export default Credits
"use client"
import { useAuthContext } from '@/app/provider'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DesignCard from './_components/DesignCard';
import { RECORD } from '@/app/view-code/[uid]/page';

function Designs() {

    const { user } = useAuthContext();
    const [wireframeList, setWireframeList] = useState([]);
    useEffect(() => {
        user && GetAllUserWireframe();
    }, [user])

    const GetAllUserWireframe = async () => {

        const result = await axios.get('/api/images-to-code?email='+ user?.email);
        setWireframeList(result.data);
    }

    return (
        <div>
            <h2 className='font-bold text-2xl'>图片 & 代码</h2>

            <div className='grid grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
                {wireframeList?.map((item: RECORD, index) => (
                    <DesignCard key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Designs
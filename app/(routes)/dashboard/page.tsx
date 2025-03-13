import React from 'react'
import ImageUpload from './_components/ImageUpload'

function Dashboard() {
    return (
        <div className='xl:px-20'>
            <h2 className='font-bold text-3xl'>图片转代码</h2>
            <ImageUpload />
        </div>
    )
}

export default Dashboard
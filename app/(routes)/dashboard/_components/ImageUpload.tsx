"use client"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { CloudUpload, Loader2Icon, WandSparkles, X } from 'lucide-react'
import Image from 'next/image'
//@ts-ignore
import uuid4 from "uuid4";
import React, { ChangeEvent, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/configs/firebaseConfig'
import axios from 'axios'

import { useAuthContext } from '@/app/provider'
import { useRouter } from 'next/navigation'
import Constants from '@/data/Constants'
import { toast } from 'sonner'

function ImageUpload() {

    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [file, setFile] = useState<any>();
    const [model, setModel] = useState<string>();
    const [description, setDescription] = useState<string>();
    const { user } = useAuthContext();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const OnImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            console.log(files[0])
            const imageUrl = URL.createObjectURL(files[0]);
            setFile(files[0]);
            setPreviewUrl(imageUrl);
        }
    }

    const OnConverToCodeButtonClick = async () => {
        if (!file || !model || !description) {
            console.log("请选择所有字段");
            return;
        }
        setLoading(true);
        // 保存图像到 Firebase
        const fileName = Date.now() + '.png';
        const imageRef = ref(storage, "Images_To_Code/" + fileName);
        await uploadBytes(imageRef, file).then(resp => {
            console.log("图像已上传...")
        });

        const imageUrl = await getDownloadURL(imageRef);
        console.log(imageUrl);

        const uid = uuid4();
        console.log(uid);
        // 将信息保存到数据库
        const result = await axios.post('/api/images-to-code', {
            uid: uid,
            description: description,
            imageUrl: imageUrl,
            model: model,
            email: user?.email
        });
        if (result.data?.error) {
            console.log("积分不足");
            toast('积分不足！');
            setLoading(false);
            return;
        }
        setLoading(false);
        router.push('/view-code/' + uid);
    }

    return (
        <div className='mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {!previewUrl ? <div className='p-7 border border-dashed rounded-md shadow-md
                flex flex-col items-center justify-center
                '>
                    <CloudUpload className='h-10 w-10 text-primary' />
                    <h2 className='font-bold text-lg'>上传图像</h2>

                    <p className='text-gray-400 mt-2'>点击按钮选择线框图像</p>
                    <div className='p-5 border border-dashed w-full flex mt-4 justify-center'>
                        <label htmlFor='imageSelect'>
                            <h2 className='p-2 bg-blue-100 font-bold text-primary  rounded-md px-5'>选择图像</h2>
                        </label>

                    </div>
                    <input type="file" id='imageSelect'
                        className='hidden'
                        multiple={false}
                        onChange={OnImageSelect}
                    />

                </div> :
                    <div className='p-5 border border-dashed'>
                        <Image src={previewUrl} alt='预览' width={500} height={500}
                            className='w-full h-[250px] object-contain'
                        />
                        <X className='flex ite justify-end w-full cursor-pointer'
                            onClick={() => setPreviewUrl(null)}
                        />

                    </div>
                }
                <div className='p-7 border shadow-md rounded-lg'>

                    <h2 className='font-bold text-lg'>选择 AI 模型</h2>
                    <Select onValueChange={(value) => setModel(value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="选择 AI 模型" />
                        </SelectTrigger>
                        <SelectContent>
                            {Constants?.AiModelList.map((model, index) => (
                                <SelectItem value={model.name} key={index} >
                                    <div className='flex items-center gap-2'>
                                        <Image src={model.icon} alt={model.name} width={25} height={25} />
                                        <h2> {model.name}</h2>
                                    </div>

                                </SelectItem>

                            ))}

                        </SelectContent>
                    </Select>

                    <h2 className='font-bold text-lg mt-7'>输入关于您网页的描述</h2>
                    <Textarea
                        onChange={(event) => setDescription(event?.target.value)}
                        className='mt-3 h-[150px]'
                        placeholder='写下关于您网页的内容' />
                </div>
            </div>

            <div className='mt-10 flex items-center justify-center'>
                <Button onClick={OnConverToCodeButtonClick} disabled={loading}>
                    {loading ? <Loader2Icon className=' animate-spin' /> : <WandSparkles />}
                    转换为代码</Button>
            </div>
        </div>
    )
}

export default ImageUpload
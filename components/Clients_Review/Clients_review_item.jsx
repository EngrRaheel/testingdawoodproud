import Image from 'next/image'
import React from 'react'
// import styles from './Chat_icon.module.css'
function Client_Review({ name, img, role, review }) {
    return (
        <div className='w-full mx-auto flex items-center justify-center text-[#878B8C] font-Inter'>
            <div className="flex flex-col rounded-2xl  max-w-sm  max-h-[400px]  relative shadow-lg shadow-[#01b88d]/20">
                <div className='flex min-h-[150px] bg-white p-6 items-center justify-start shadow-xl shadow-[gray]/30'>
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                        <Image src={img} alt="Avatar" fill className="object-contain" />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-0'>
                        <h3 className="text-xl font-bold mb-2 ">{name}</h3>
                        <div className='italic font-normal text-[12.8px]'>
                            {role}
                        </div>
                    </div>

                </div>
                <div className="triangle ml-16"></div>
                <div className="min-h-[220px] bg-white/40 p-4  overflow-y-auto custom-scroll">
                    <div className="text-lg text-left">{review}</div>
                </div>
            </div>

        </div>
    )
}

export default Client_Review
import React from 'react'

export default function Card1() {
    return (
        <div className="h-screen bg-black w-screen grid place-content-center">
        <div className='max-w-sm md:max-h-52 md:max-w-2xl bg-slate-700 p-1 rounded-lg  md:flex-row flex flex-col gap-2 hover:opacity-75 duration-300 opacity-100 group-hover:opacity-80 transition-opacity inset-0'>
            <img
            className='md:max-w-xs max-h-full object-cover'
            src="https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835_1280.jpg" alt="" />


            <div className='flex flex-col gap-5 md:justify-start md:mt-2 ps-1 pb-5'>
                <div className='text-2xl font-bold'>Lorem ipsum dolor sit amet.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequuntur maiores suscipit dolores? Eaque accusantium, nesciunt ullam necessitatibus reprehenderit minus.</div>
            </div>
        </div>
        </div>
    )
}

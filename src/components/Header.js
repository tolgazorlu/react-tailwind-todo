import React from "react";
import { TbCircleTriangle } from 'react-icons/tb'
import { BsMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

export default function Header(){
    return(
        <div className="h-14 flex items-center border-b px-16 border-slate-800 justify-between mt-1 relative">
            <div className="flex items-center p-2">
                <div className="text-blue mr-2 text-2xl animate-moebius">
                    <TbCircleTriangle />
                </div>
                <h1 className="text-light text-xl font-medium">tolgtodo</h1>
            </div>
            <div className="flex items-center">
                <a href="https://tailwindcss.com/docs/border-color" className="text-sm font-semibold text-light">Docs</a>
                <a href="https://tailwindcss.com/docs/border-color" className="text-sm font-semibold text-light ml-8">Components</a>
                <a href="https://tailwindcss.com/docs/border-color" className="text-sm font-semibold text-light ml-8">Blog</a>
                <a href="https://tailwindcss.com/docs/border-color" className="text-sm font-semibold text-light ml-8">Showcase <span className="text-xs text-blue bg-darkBlue rounded-xl px-2 py-1">New</span></a>
                <div className="h-6 w-0.5 bg-slate-800 ml-8"></div>
                <div className="text-blue ml-8">
                <BsMoonStarsFill />
                </div>
                <div className="text-gray text-2xl ml-8">
                <AiFillGithub />
                </div>
            </div>
        </div>
    )
}
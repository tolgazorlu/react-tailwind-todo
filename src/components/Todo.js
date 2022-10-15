import React from 'react';
import { TiDelete } from 'react-icons/ti'
import { CgEditFlipH } from 'react-icons/cg'

function Todo(props){

    return(
        <div className="h-10 w-full flex justify-center relative">
            <div className="h-8 w-2/6 bg-bgdark rounded-md mt-5 flex justify-between items-center ">
                <div className="ml-2">
                    <span className="ml-2 text-light">{props.text}</span>
                </div>
                <div className="text-xl mr-2 mt-1">
                    <button className=" text-blue">
                        <CgEditFlipH />
                    </button>
                    <button className="text-pink">
                        <TiDelete />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todo;
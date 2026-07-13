import React from 'react'
import { Link } from 'react-router-dom'

function BoxTwo({ name, explain, btn }) {
    return (
        <div className="bg-white mb-[10px]">
            <div className='h-[180px] flex flex-col justify-between'>
                <h2 className=" text-[27px] font-bold text-blue-500 mb-3">
                    {name}
                </h2>

                <p className="text-gray-500 text-base md:text-lg mb-3">
                    {explain}
                </p>
                <Link to={"/product"}>
                    <button className="mb-3 inline-flex items-center gap-2 bg-transparent border border-blue-500 text-blue-500 font-medium px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                        {btn}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default BoxTwo

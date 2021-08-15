import React from 'react'

function OutputBox({value}) {
    console.log(value)
    return (
        <div className="p-4 h-24 text-white bg-gray-700 rounded-t-xl relative">
            <h1 className="font-bold max-w-xs overflow-x-scroll text-5xl absolute bottom-0 right-0">{value}</h1>
        </div>
    )
}

export default OutputBox

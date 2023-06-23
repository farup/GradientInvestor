import React from 'react'


type Props = {

    text: string
    onClick: () => void
    active: boolean
}


export const ChartFilter: React.FC<Props> = ({ text, onClick, active }) => {
    return (
        <button
            onClick={onClick}
            className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer
    ${active ? "bg-indigo-600 border-indigo-700 text-gray-100" :
                    "border-indigo-300 text-indigo-300"}
    `}>{text}</button>
    )
}

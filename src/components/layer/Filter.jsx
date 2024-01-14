import React from 'react'


const Filter = ({ CategoryName, plus, className }) => {
    return (
        <>
            <div>

                <li className={`flex justify-between py-5 border-b border-[#F0F0F0] font-sans text-[#767676] text-base ${className}`}><p>{CategoryName}</p>{plus}</li>

            </div>
        </>
    )
}

export default Filter
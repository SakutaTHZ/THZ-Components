import React from 'react'

const DropDownSubNav = ({index,link='/#',label='-',subCustomClassName})=>{
    return (
        <li key={index} className={`sub-item text-sm pl-4 py-2 cursor-pointer hover:bg-neutral-800 ${subCustomClassName}`}>
            <a href={link}>{label}</a>
        </li>
    ) 
}

export default DropDownSubNav
import React from 'react'

export default function Input({ className, type, ...props }, ref) {
    return (
        <>
            <input
                type={type}
                className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1'
                {...props}
                ref={ref}
            />

        </>
    )
}

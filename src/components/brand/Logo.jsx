import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Logo() {
    return (
        <>
            <div className='inline-flex items-center gap-2'>
                <div className='grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-brand to-brand-muted shadow-glow'>
                    <GraduationCap className='h-4 w-4 text-brand-foregorund' strokeWidth={2.5} />
                </div>
                <span className='text-[15px] font-semibold tracking-tight text-foreground'>CampusFlow</span>
            </div>
        </>
    )
}

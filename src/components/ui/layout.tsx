import clsx from 'clsx';
import { ReactNode } from 'react';

export function Layout({
    children,
    className
}: {
    children: ReactNode,
    className?: string
}){
    return(
        <div 
            id={`Component_${Layout.name}`} 
            className={
                clsx(
                    "m-auto font-serif",
                    className
                )
            }
        >
            {children}
        </div>  
    )
}
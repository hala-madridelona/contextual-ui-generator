const getGridGap = (gap: any) => {
    switch(gap) {
        case 'none': return "gap-0";
        case 'sm': return "gap-2";
        case 'md': return "gap-4";
        case 'lg': return "gap-8";
    }
}

export const GridBridge = ({ children, ...props }) => {
    const noColumns = props.columns ?? 4;
    const gap = props.gap ?? 'none';
    const gridClasses = `grid grid-cols-${noColumns} ${getGridGap(gap)}`;

    return (
        <div className={gridClasses}>
            {children}
        </div>
    )
}
const getTextComponent = (size, variant) => {
    let sizeClasses = "";
    switch (variant) {
        case 'heading': 
            sizeClasses = size === 'small' ? 'text-xl' : size === 'large' ? 'text-4xl': 'text-2xl';
            return (value: string) => <h2 className={sizeClasses}>{value}</h2>;
        case 'subheading': 
            sizeClasses = size === 'small' ? 'text-md' : size === 'large' ? 'text-2xl': 'text-xl';
            return (value: string) => <h4 className={sizeClasses}>{value}</h4>;
        case 'body': 
            sizeClasses = size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg': 'text-md';
            return (value: string) => <p className={sizeClasses}>{value}</p>
        case 'caption': 
            sizeClasses = size === 'small' ? 'text-xs' : size === 'large' ? 'text-md': 'text-sm';        
            return (value: string) => <small className={sizeClasses}>{value}</small>
        default: 
            return (value: string) => <p className="text-md">{value}</p>
    }
}

export const TextBridge = ({ size, variant, value }) => {
    const renderThisComponent = getTextComponent(size, variant);
    return renderThisComponent(value);
}
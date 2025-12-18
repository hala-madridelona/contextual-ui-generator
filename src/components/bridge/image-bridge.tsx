export const ImageBridge = (props: Record<string, any>) => {
    const {alt = 'Image', src, width, height} = props;
    return (
        <img alt={alt} src={src} width={width} height={height} />
    )
}
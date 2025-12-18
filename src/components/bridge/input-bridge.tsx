import { Input } from "../ui/input"

export const InputBridge = (props: Record<string, any>) => {
    if (props.type === 'range'){
        return <Input type="range" placeholder={props.placeholder} name={props.name} min={props.min || 0} max={props.max || 10} />
    }

    return (
        <Input type={props.type} placeholder={props.placeholder} name={props.name} />
    )
}
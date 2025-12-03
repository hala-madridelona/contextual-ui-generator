/**
 * This component takes a UI Schema, extracts information and renders ShadCN component using that info
*/
import { Button } from "../ui";
import { getIcon } from "./utils";

const sizeMap = {
    small: "sm",
    default: "default",
    large: "lg",
    icon: "icon",
    "small-icon": "icon-sm",
    "large-icon": "icon-lg"
}

const variantMap = {
    primary: "default",
    secondary: "secondary",
    outline: "outline",
    danger: "destructive",
    subtle: "ghost",
    text: "link"
}

export const ButtonBridge = (props: Record<string, any>) => {
    console.log('INSIDE BUTTON BRIDGE => ', props);
    let buttonLabel = props.label;
    let size = sizeMap[props.size] || "default";
    const variant = variantMap[props.color] || "default";
    let Icon = null;
    const hasIcon = !!props.icon

    if (hasIcon){
        Icon = getIcon(props.icon)
        if (!size.endsWith("icon")){
            size = "icon";
        }
        if (props.iconOnly){
            buttonLabel = "";
        }
    }


    return (
        <Button variant={variant} size={size}>
            {hasIcon && <Icon />}
            {buttonLabel}
        </Button>
    )
}



/**
 * 
 * {
    "type": "Page",
    "props": {},
    "children": [
        {
            "type": "Section",
            "props": {},
            "children": [
                {
                    "type": "Button",
                    "props": {
                        "color": "danger",
                        "icon": "refresh"
                    },
                    "children": []
                }
            ]
        }
    ]
}
 * 
 * 
 */
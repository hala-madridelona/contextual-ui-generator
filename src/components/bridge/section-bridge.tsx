import { cn } from "@/lib/utils";

const layoutMap = {
    vertical: "flex flex-col",
    horizontal: "flex flex-row",
    twoColumn: "grid grid-cols-2",
    threeColumn: "grid grid-cols-3"
}

const spacingMap = {
    small: "gap-2",
    medium: "gap-4",
    large: "gap-6"
}

export const SectionBridge = ({ children, ...props }) => {
    const layout = props?.["layout"] || "vertical";
    const spacing = props?.["spacing"] || "small";

    return (
        <section className="w-full">
            {props.title && <h2 className="text-lg font-semibold mb-4">{props.title}</h2>}
            <div className={cn(layoutMap?.[layout], spacingMap?.[spacing])}>
                {children}
            </div>
        </section>
    )
}
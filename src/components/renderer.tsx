import { UISchemaType, UISchema } from "@/lib/schema/ui-schema"
import { COMPONENT_MAP  } from "./util";

export const Renderer = ({ schema }: { schema: UISchemaType }) => {
    const schemaValidationResult = UISchema.safeParse(schema);
    if (!schemaValidationResult.success){
        return (
            <>
                <span>There is something wrong!!</span>
            </>
        )
    }
    
    const Component = COMPONENT_MAP[schema.type];
    
    console.log('Rendering tpye => ', schema.type, ' with props => ', schema.props);
    return (
        <Component {...schema.props}>
            {
                schema.children?.map((child, index) => <Renderer key={index} schema={child} />)
            }
        </Component>
    )
}
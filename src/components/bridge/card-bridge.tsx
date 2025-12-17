import { Renderer } from '../renderer';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

export const CardBridge = (props: Record<string, any>) => {

    const { title = "", description = "", sections } = props;
    const { headerActions = [], content, footerActions = [] } = sections; 

    console.log(`HA: `, headerActions);
    console.log('FA: ', footerActions);
        
    const renderThisElems = (arrayOfElems, parentCompName) => arrayOfElems?.map((comp, index) => 
        <Renderer key={`${parentCompName}_${index}`} schema={comp} />)

    return (
        <Card className='w-full'>
            <CardHeader>
                {title && <CardTitle>{title}</CardTitle>}
                {description && <CardDescription>{description}</CardDescription>}
                {headerActions &&
                    <CardAction>
                        {
                            renderThisElems(headerActions, `card_action`)
                        }
                    </CardAction>
                }
            </CardHeader>
            <CardContent>
                {
                    renderThisElems(content, `card_content`)
                }
            </CardContent>
            <CardFooter>
                {footerActions &&
                    renderThisElems(footerActions, `card_footer`)
                }
            </CardFooter>

        </Card>
    )

}
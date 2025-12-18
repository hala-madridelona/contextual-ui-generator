import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export const TableBridge = (props: Record<string, any>) => {

    const { title, columns, rows } = props;

    return (
        <Table>
            <TableCaption>{title}</TableCaption>
            <TableHeader>
                <TableRow>
                    {columns.map((column, index) => {
                        return (
                            <TableHead key={`t_h_${index}`}>{column}</TableHead>
                        )
                    })}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map((row, index) => {
                    return (
                        <TableRow key={`t_r_${index}`}>
                            {
                                Object.keys(row).map((columnName) => {
                                    return(
                                        <TableCell key={`t_c_${columnName}_${index}`}>{row[columnName]}</TableCell>
                                    )
                                })
                            }
                        </TableRow>    
                )})}
            </TableBody>
        </Table>
    )
}
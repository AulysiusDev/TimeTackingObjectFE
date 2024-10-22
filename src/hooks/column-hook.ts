import { useState } from "react";

export default function useColumns(initialColumns, defaultWidth:number){
    const [columns, setColumns] = useState(initialColumns);

    const handleResize = (name:string, width: number) => {
        console.log("resize: " + name + " " + width)
        const updatedColumns = [...columns];
        const foundColumnIndex = updatedColumns.findIndex(({name: columnName}) => columnName === name);
        if(foundColumnIndex === -1){
            return
        }
        updatedColumns[foundColumnIndex].width = Math.floor(width);
        console.log(updatedColumns[foundColumnIndex])
        setColumns(updatedColumns)
    }
    const getColumnWidth = (name: string):number => {
        const foundColumn = columns.find(({name: columnName}) => columnName === name);
        console.log({foundColumn})
        if(foundColumn){
            return foundColumn.width
        }
        return defaultWidth
    }
    return {columns, setColumns, handleResize, getColumnWidth}
}
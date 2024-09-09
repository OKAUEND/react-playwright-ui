import {TextField} from "@mui/material"
import {useState,useMemo} from "react"

export const Mui = () =>{
    const [text,setText] = useState<string>("")

    const isError = useMemo(() => text.length > 0, [text])


    return (
        <div>
            <h1>Material UI</h1>
            <TextField
                error={isError}
                aria-label="input-field"
                value={text}
                onChange={(e) => setText(e.target.value)}
                helperText={isError ? "入力内容が不正です" : ""}
            />
        </div>
    )
}
import Day from "./Day"
import React from "react"

export default function Month( {month} ){
    return (
        <div className="flex-1 grid grid-cols-7 grid-rows-5">
            {month.map((row, i) => {
                return (
                    <React.Fragment key={i}>
                        {row.map((day,idx)=>{
                            return (<Day day={day} key={idx} rowIdx={i}/>)
                        })}
                    </React.Fragment>
                )
            })}
        </div>
    )
}
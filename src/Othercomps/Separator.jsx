import React from "react";

function Separator()
{
    return (
        <div className="grid grid-cols-1 bg-white justify-center">
            {/* <div className="p-4 bg-blue-50/80 flex w-screen"></div> */}
            <div className="p-1 bg-zinc-100 flex"></div>
            <div className="p-2 bg-zinc-100 flex"></div>
        </div>
    )
}

export default Separator;
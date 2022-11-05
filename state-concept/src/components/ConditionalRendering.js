
import { useState } from "react";
export default function ConditionalRendering()
{   
    const [display,setcon1]=useState(false);
    if(display)
    {
        return <h3>Heading1</h3>
    }
    else
    {
        return (
            <div>
                <h3>Heading2</h3>
            </div>
           
        )
        
        
    }
    
    
}
// export default ConditionalRendering;
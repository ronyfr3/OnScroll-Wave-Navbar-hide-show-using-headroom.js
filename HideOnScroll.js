import React from 'react'
import Headroom from 'react-headroom'

function HideOnScroll() {
    return (
        <div>
            <Headroom>
                <nav>
                    <ul>
                      <li>Home</li>
                    </ul>
                    <ul>
                       <li>About</li>
                    </ul>
                    <ul>
                       <li>Project</li>
                    </ul>
                    
                </nav>
           </Headroom>
        </div>
    )
}

export default HideOnScroll

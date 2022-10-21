import React from 'react'
import { useParams } from 'react-router-dom'

export const Output = () => {
    const {arg,font,bgc} = useParams()

    return (
        <div>
            {
                isNaN(arg)?
                    <h2 style={font?{color: font, backgroundColor: bgc}:null}>
                        The word is: {arg}
                    </h2>
                    :
                    <h2>
                        The number is: {arg}
                    </h2>
            }
        </div>
    )
    }

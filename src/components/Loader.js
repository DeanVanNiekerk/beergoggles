import React from 'react'

const Loader = ({text = 'loading...', margins = true}) => {

    let classNames = "lead text-center"

    if(margins)
        classNames += " mt-5 mb-5"

    return <p className={classNames}>
         {text}
    </p>
}

export default Loader
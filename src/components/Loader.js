import React from 'react'

const Loader = ({text = 'loading...'}) => (
    <p className="lead mt-5 mb-5 text-center">
         {text}
    </p>
)

export default Loader
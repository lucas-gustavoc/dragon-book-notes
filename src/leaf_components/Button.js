import React from 'react'

const Button = React.forwardRef(function Button(props, ref) {
    return <button {...props} style={{ padding: '10px' }} ref={ref}></button>
})

export default Button
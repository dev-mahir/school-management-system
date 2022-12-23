import React from 'react'

const Button = () => {
    return (
        <div className='max-w-[1140px] mx-auto flex gap-5 items-center'>

            <button className="btn">Default</button>

            <button className="btn btn-outline-primary">Primary</button>

            <button className="btn btn-outline-success">Success</button>

            <button className="btn btn-outline-danger ">Danger</button>

        </div>
    )
}

export default Button
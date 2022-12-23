import React from 'react'
import { Link } from 'react-router-dom'

const ViewCardHeader = ({ title, link, btnName, icon }) => {
    return (
        <div className="card">
            <div className='card-header'>
                <h3 className="card-title">{ title}</h3>
                <div className='flex gap-x-4 items-center'>
                    <Link to={link} className='btn btn-success btn-icon px-3'> { icon}{btnName}</Link>
                </div>
            </div>
        </div>

    )
}

export default ViewCardHeader
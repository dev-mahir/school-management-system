import React from 'react'


const Toast = ({ type, msg }) => {

  return (
    <>


      <div className="fixed top-10 right-14 z-10">

        {
          type === "error" && <div className="bg-danger px-6 py-2 rounded-md">
            <span className="text-white">{msg}</span>
          </div>
        }

        {
          type === "success" && <div className="bg-green-400/75 px-6 py-2 rounded-md">
            <span>{msg}</span>
          </div>
        }
      </div>


    </>
  )




}

export default Toast
import React from 'react'
import { useRef } from 'react';
import ReactToPrint from 'react-to-print'
import GenerateMarksheet from '../components/View/ReportsManagment/GenerateMarksheet'

const Test = () => {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <GenerateMarksheet ref={componentRef} />
    </div>
  )
}

export default Test
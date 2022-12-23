import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineEye, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';




const AssignSubjectAndMarks = () => {


    const [input, setInput] = useState({
        subject: "",
        marks: {
        fullMarks: "",
        passMarks: "",
        subMarks: ""
        }
   
    })

    const handleInputChange = (e) => { 
        setInput((prevState) => ({
            ...prevState, 
            [e.target.name] : e.target.value
        }))
    }


    console.log(input);




    return (
        <div>


            <div className="card">
                <div className='card-header'>
                    <h3 className="card-title">Assign Subject And Marks</h3>
                    <div className='flex gap-x-4 items-center'>
                        <Link to='/setup/fee/amount/view' className='btn btn-success btn-icon px-3'> <AiOutlineEye />View Fee Amount</Link>
                    </div>
                </div>
            </div>
            <div className="card mt-5 p-5">
                <form>
                    <div className="space-y-3">
                        <div className='mb-5'>
                            <h3 className='text-gray-300 text-xl'>Class: One</h3>
                        </div>

                        <div id='subjectList'>

                                    <div className='flex items-end  gap-x-3 mb-5'>
                                        <div className='w-full'>
                                            <label htmlFor="">Subject Name</label>
                                            <input type="text" value="English" />
                                        </div>
                                        <div className='w-full'>
                                            <label htmlFor="status"> Full Marks</label>
                                    <input type="number" onChange={() => setInput()}  value={input.marks.fullMarks}   />
                                        </div>
                                        <div className='w-full'>
                                            <label htmlFor="status"> Pass Marks</label>
                                    <input type="number" onChange={handleInputChange} name='passMarks' value={input.marks.passMarks} />
                                        </div>
                                        <div className='w-full'>
                                            <label htmlFor="status"> Subjective Marks</label>
                                    <input type="number" onChange={handleInputChange} name='subMarks' value={input.marks.subMarks} />
                                        </div>
                                    </div>




                        </div>

                    </div>


                    <div className='mt-5'>
                        <button type='submit' className='btn btn-primary py-2'>Add Group</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AssignSubjectAndMarks;





















// const AssignSubjectAndMarks = () => {

//     const [input, setInput] = useState([
//         {
//             bangla: {
//                 fullMarks: "",
//                 passMarks: "",
//                 subMarks: ""
//             }
//         }
//     ]);

//     console.log(input[0].bangla.fullMarks);
    




//     const [addField, setAddField] = useState([
//         { field: "" }
//     ]);



//     const handleSubjectChange = (e) => {

//     }



//     const handleAddNewField = () => {
//         setAddField([...addField, { field: "" }])
//     }

//     const handleDeleteField = (index) => {
//         const list = [...addField]
//         list.splice(index, 1)
//         console.log(index);
//         setAddField(list)
//     }






//     return (
//         <div>


//             <div className="card">
//                 <div className='card-header'>
//                     <h3 className="card-title">Assign Subject And Marks</h3>
//                     <div className='flex gap-x-4 items-center'>
//                         <Link to='/setup/fee/amount/view' className='btn btn-success btn-icon px-3'> <AiOutlineEye />View Fee Amount</Link>
//                     </div>
//                 </div>
//             </div>
//             <div className="card mt-5 p-5">
//                 <form>
//                     <div className="space-y-3">
//                         <div className='mb-5'>
//                             <label htmlFor="">Fee Category</label>
//                             <select name="" id="" className='w-1/2'>
//                                 <option value="">Registrtion Fee</option>
//                                 <option value="">Monthly Fee</option>
//                             </select>
//                         </div>

//                         <div id='subjectList'>

//                             {
//                                 addField.map((item, i) =>

//                                     <div key={i} className='flex items-end  gap-x-3 mb-5'>
//                                         <div className='w-full'>
//                                             <label htmlFor="">Subject Name</label>
//                                             <select name="" id="" onChange={handleSubjectChange}>
//                                                 <option value="Bangla">Bangla</option>
//                                                 <option value="English">English</option>
//                                                 <option value="Math">Math</option>
//                                             </select>
//                                         </div>
//                                         <div className='w-full'>
//                                             <label htmlFor="status"> Full Marks</label>
//                                             <input type="number" id='status'   />
//                                         </div>
//                                         <div className='w-full'>
//                                             <label htmlFor="status"> Pass Marks</label>
//                                             <input type="number" id='status' />
//                                         </div>
//                                         <div className='w-full'>
//                                             <label htmlFor="status"> Subjective Marks</label>
//                                             <input type="number" id='status' />
//                                         </div>

//                                         <div className='mr-20 flex'>
//                                             <button type='button' onClick={handleAddNewField} className="bg-success mb-1 h-8 w-8 text-sm flex justify-center items-center rounded-sm  text-white"> <AiOutlinePlus /> </button>
//                                             <button type='button' onClick={() => handleDeleteField(i)} className="bg-danger ml-2 mb-1 h-8 w-8 text-sm flex justify-center items-center rounded-sm  text-white"> <AiOutlineMinus /> </button>
//                                         </div>
//                                     </div>

//                                 )}







//                         </div>

//                     </div>


//                     <div className='mt-5'>
//                         <button type='submit' className='btn btn-primary py-2'>Add Group</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default AssignSubjectAndMarks;
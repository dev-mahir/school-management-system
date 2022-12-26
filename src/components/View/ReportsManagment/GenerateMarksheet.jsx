import React from 'react'
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';

const GenerateMarksheet = () => {
    const componentRef = useRef();
    return (
        <>      <ReactToPrint
            trigger={() => <button className='btn btn-primary mb-5'>Print</button>}
            content={() => componentRef.current}
        />

    
            <div className='bg-white p-10 generate-marksheet ' ref={componentRef}>
                <div className='border-dashed border-2 p-4 h-[1035px] '>
                    <div className='flex justify-center items-center gap-x-3'>
                        <div>
                            <img className='w-10' src="https://seeklogo.com/images/B/bangladesh-govt-logo-A2C7688845-seeklogo.com.png" alt="" />
                        </div>
                        <h2 className='font-semibold text-2xl'>Aushnara High School</h2>
                    </div>

                    <div className='flex items-center flex-col gap-y-2'>
                        <span className='text-sm'> Madhupur, Tangail </span>
                        <span className='text-base font-medium'> 1st Terminal Examination - 2014 </span>
                    </div>

                    <div className='mt-4 flex justify-between'>
                        <div>
                            <ul className='space-y-2'>
                                <li className='flex items-center'><p className='min-w-[120px]'>Name of Student</p>: <p className='pl-2 font-medium italic text-[15px]'>Md. Mahir Uddin</p></li>

                                <li className='flex items-center'><p className='min-w-[120px]'>Father's Name</p>: <p className='pl-2 font-medium italic text-[15px]'>Md. Abu Taher</p></li>

                                <li className='flex items-center'><p className='min-w-[120px]'>Mother's Name</p>: <p className='pl-2 font-medium italic text-[15px]'>Khadiza Begum</p></li>

                                <li className='flex items-center'><p className='min-w-[120px]'>Roll No.</p>: <p className='pl-2 font-medium italic text-[15px]'>02</p></li>

                                <li className='flex items-center'><p className='min-w-[120px]'>ID No.</p>: <p className='pl-2 font-medium italic text-[15px]'>20221001</p></li>

                                <li className='flex items-center'><p className='min-w-[120px]'>Group</p>: <p className='pl-2 font-medium italic text-[15px]'>Science</p></li>

                                <li className='flex items-center'><p className='min-w-[120px]'>Year</p>: <p className='pl-2 font-medium italic text-[15px]'>2014</p></li>

                            </ul>
                        </div>
                        <div className=''>
                            <div>
                                <table className='table-auto'>
                                    <thead>
                                        <th className='text-[12px] font-normal w-[30px]'>Letter   Grade</th>
                                        <th className='text-[12px] font-normal w-[30px]'>Class   Interval(%)</th>
                                        <th className='text-[12px] font-normal w-[30px]'>Grade   Point</th>
                                    </thead>
                                    <tbody>
                                        <tr className=''>
                                            <td>A+</td>
                                            <td>80-100</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>A-</td>
                                            <td>70-79</td>
                                            <td>4</td>
                                        </tr>
                                        <tr>
                                            <td>A-</td>
                                            <td>60-69</td>
                                            <td>3.5</td>

                                        </tr>
                                        <tr>
                                            <td>B</td>
                                            <td>50-59</td>
                                            <td>3</td>

                                        </tr>
                                        <tr>
                                            <td>C</td>
                                            <td>40-49</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>D</td>
                                            <td>33-39</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>F</td>
                                            <td>00-32</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 grade-table'>

                        <table className='table-auto w-full'>
                            <thead>
                                <tr>
                                    <th className='!font-semibold'>Sl. No.</th>
                                    <th className='!font-semibold'>Name of Subjects</th>
                                    <th className='!font-semibold'>Letter Grade </th>
                                    <th className='!font-semibold'> Grade Point</th>
                                    <th className='!font-semibold'>GPA</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Bangla</td>
                                    <td>A+</td>
                                    <td>5</td>
                                    <td rowSpan="9">5</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Bangla</td>
                                    <td>A+</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Bangla</td>
                                    <td>A+</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Bangla</td>
                                    <td>A+</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Bangla</td>
                                    <td>A+</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Bangla</td>
                                    <td>A+</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Bangla</td>
                                    <td>A+</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Bangla</td>
                                    <td>A+</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Bangla</td>
                                    <td>A+</td>
                                    <td>5</td>
                                </tr>
                            </tbody>
                        </table>





                    </div>


                </div>
            </div>
        </>




    )
}

export default GenerateMarksheet;
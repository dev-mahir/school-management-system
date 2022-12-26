import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { month } from '../../../utlility/date';
import ViewCardHeader from '../../ViewCardHeader/ViewCardHeader';

const Marksheet = () => {




    return (
        <div>

            <ViewCardHeader
                title="Marksheet"
            />

            <div className="card mt-4 p-5">
                <form action="">

                    <div className="grid grid-cols-4 gap-5 items-end">

                        <div>
                            <label htmlFor="">Year</label>
                            <select name="" id="">
                                <option value="">Select class</option>
                                <option value="">One</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="">Class</label>
                            <select name="" id="">
                                <option value="">Select class</option>
                                <option value="">1st Semister</option>
                                <option value="">2nd  Semister</option>
                                <option value="">Final</option>
                            </select>
                        </div>


                        <div>
                            <label htmlFor="">Exam Type</label>
                            <select name="" id="">
                                <option value="">Select month</option>

                                {month.map((item, i) =>
                                    <option value={item}>{item}</option>
                                )}

                            </select>
                        </div>

                        <div>
                            <label htmlFor="">ID No</label>
                            <select name="" id="">
                                <option value="">Select month</option>

                                {month.map((item, i) =>
                                    <option value={item}>{item}</option>
                                )}

                            </select>
                        </div>


                        <div>
                            <button className='btn btn-success'>Search</button>
                        </div>
                    </div>



                </form>
            </div>






        </div>
    )
}


export default Marksheet;
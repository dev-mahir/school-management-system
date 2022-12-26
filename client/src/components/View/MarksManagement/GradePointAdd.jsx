import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import ViewCardHeader from '../../ViewCardHeader/ViewCardHeader';

const GradePointAdd = () => {
    return (
        <div>

            <ViewCardHeader
                title="Grade Point"
                btnName="Grade Point"
                link="/marks/grade-point/view"
                icon={<AiFillEye />}
            />


            <div className="card mt-4 p-5">
                <form action="">
                    <div className="grid grid-cols-4 gap-5">
                        <div>
                            <label htmlFor="">Grade Name</label>
                            <input type="number" />
                        </div>
                        <div>
                            <label htmlFor="">Start Marks</label>
                            <input type="number" />
                        </div>
                        <div>
                            <label htmlFor="">End Marks</label>
                            <input type="number" />
                        </div>
                        <div>
                            <label htmlFor="">Point</label>
                            <input type="number" />
                        </div>
                    </div>
                    <div className='mt-[26px]'>
                        <button className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default GradePointAdd;
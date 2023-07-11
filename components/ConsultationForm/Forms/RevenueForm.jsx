import React from 'react'
import { FiArrowRight } from "react-icons/fi"
import { FiArrowLeft } from "react-icons/fi"
import RevSelect from '../SelectMui/RevenueSelect'
function FormStep4({ formData, onChange, nextStep, prevStep, setFormData }) {
    const isNextDisabled = !formData.revenue || formData.revenue === "";
    return (
        <div className='flex flex-col justify-center items-center mx-w-[600px] mx-auto space-y-5'>
            <div className='flex flex-col justify-between items-center gap-12  '>
                {/* <h1 className='text-[14px] sm:text-[16px] md:text-[18px] font-medium text-center '>Thank you for Showing Interest in Dawood Proud Services <br /> to take your YouTube Channel to New Heights</h1> */}
                <h2 className='text-[14px] sm:text-[16px] md:text-[18px] font-medium text-center text-[#139dff]'>Give us a peek into your channel&#39; earning potential!</h2>
                <h2 className='text-[14px] sm:text-[16px] md:text-[18px] font-medium text-center '>What is your Average Monthly YouTube Channel revenue?</h2>
            </div>
            <label htmlFor="Subs"></label>
            <div>

                <RevSelect value={formData.revenue} setFormData={setFormData} formData={formData} />
            </div>

            <div className='flex justify-center items-center gap-4'>
                <button type="button" onClick={prevStep} className="bg-[#139dff] px-6 py-1 rounded-2xl text-white">
                    <FiArrowLeft size={30} />
                </button>
                <button type="button" onClick={nextStep} disabled={isNextDisabled} className="bg-[#139dff] px-6 py-1 rounded-2xl  text-white">
                    <FiArrowRight size={30} />
                </button>

            </div>

        </div >
    )
}

export default FormStep4
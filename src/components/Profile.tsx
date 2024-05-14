import React, { ChangeEvent, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { MdVerified } from "react-icons/md";
import { BiSolidImageAdd } from "react-icons/bi";

const Profile = () => {
    const [values, setValues] = useState({
        "price": "",
        "noofrelease": "",
        "eventname": "",
        "eventtype": "",
        "eventdate": "",
        "description": "",
        "vrstreaminglink":"",
        "streaminglink":""
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        console.log(values)
    }
    return (
        <div className='flex w-full'>
            <div className='w-1/6'></div>
            <div className='w-5/6'>
                <div className='w-[90%] ml-2 mb-20'>
                    <div className='mt-5'>
                        <button className='flex items-center font-inter font-normal text-base text-textLight'><IoIosArrowBack className='mr-4' />Back</button>
                    </div>
                    <div className="isVerified flex w-[80%] mt-6 border-2 border-solid border-textLight bg-secondary rounded-sm px-6 py-5">
                        <div className="relative profile-image h-16 w-16 ">
                            <MdVerified className='absolute right-0 top-2 z-30 text-verified' />
                            <img src="https://s3-alpha-sig.figma.com/img/7081/d82b/13eaba07f4f5769915288bce7c28ba4f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AYHR5TVokwgjldhZ6iFDIq8i1J62u8oNMinFFO4fLceB~nskwon7GQCqE50BPON7DKb0wohKwayP55fflwD4PEd~bzfw-hHd9jHMjnVDfyRnfD6Lu4xsve5B-5aCNAODMXr5adUp7ARXiS0g-rmPVAUrPZZ7QYlYw52G3Fm~lPIsrECi8CZhUu~XR2iMFZf41ZUadpeTwqlZfoev41JawXjRe2gb9fo4LA2e3bFwLNW3Rcdza7S7K8iVtsq6UBDMfDVIEMNEzjmLqaN-X528hb3cNjmKxiHsoD78EDnOR5rkMFoi0s1tjnImL5Y8LO1nd-fCSx4uiyPkHE1xttz0Rg__" alt="" className='object-cover h-16 w-16 rounded-full' />
                        </div>
                        <div className=" message w-[70%] ml-6">
                            <h2 className='font-urbanist text-2xl font-bold'>Your artist account is under review!</h2>
                            <p className='font-workSans font-normal font-sm mt-4'>Once you create songs, events, merch, and backstage passes, we will include this information as well to verify. Once your account is verified, your items will be visible on the My Store page.</p>
                        </div>
                    </div>
                    <div className="active flex mt-10">
                        <div className='h-5 w-5 rounded-full mr-2 my-2 bg-textSecondary-100'></div>
                        <div className='h-5 w-8 rounded-[50px] m-2 bg-accent'></div>
                        <div className='h-5 w-5 rounded-full m-2 bg-textSecondary-100'></div>
                        <div className='h-5 w-5 rounded-full m-2 bg-textSecondary-100'></div>
                    </div>
                    <div className="form w-[80%] mt-6">
                        <form>
                            <div className="pricing ">
                                <p className='text-textLight text-2xl font-semibold font-urbanist'>Pricing Details</p>
                                <div className='pricing-input flex mt-4'>
                                    <div className='flex flex-col w-1/2'>
                                        <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Choose Pricing</p>
                                        <input type="number" pattern='\$\d+(?:\.\d{1,2})?' name='price' className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm required:border-accent required:border-[1px]' placeholder='$45.99' onChange={(e) => handleChange(e)} required/>
                                    </div>
                                    <div className='flex flex-col ml-4 w-1/2'>
                                        <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>How many to release?</p>
                                        <input type="number" name='noofrelease' className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' placeholder='@yukta.sh' onChange={(e) => handleChange(e)} pattern='\d+' required/>
                                    </div>
                                </div>
                            </div>
                            <div className="upload mt-6">
                                <p className='text-textLight text-2xl font-semibold font-urbanist'>Upload your file</p>
                                <p className='font-workSans font-normal text-xs text-textLight mt-3'>Upload thumbnail.</p>
                                <p className='font-workSans font-normal text-xs text-textLight'>PNG,GIF,WEBP Max=30MB.</p>
                                <div className='w-[60%] relative'>
                                    <BiSolidImageAdd className='absolute top-0 left-0 bottom-0 right-0 m-auto w-full text-2xl text-textSecondary-200' />
                                    <button className='bg-accent absolute top-7 right-4 font-workSans font-normal text-base rounded-[50px] px-2'>Upload</button>
                                    <input type="photo" name='photo' className='w-full h-52 mt-3 rounded-md bg-formInput ' />
                                </div>
                            </div>
                            <div className="event details mt-6">
                                <p className='text-textLight text-2xl font-semibold font-urbanist'>Event Details</p>
                                <div className='pricing-input flex mt-4'>
                                    <div className='flex flex-col w-1/2'>
                                        <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Event name</p>
                                        <input type="text" name='eventname' className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' placeholder='Album name' onChange={(e) => handleChange(e)} pattern='[A-Za-z0-9\s\-_]+' required/>
                                    </div>
                                    <div className='flex flex-col ml-4 w-1/2'>
                                        <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Event type</p>
                                        {/* <input type="text" name='eventtype' className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' placeholder='Jazz' /> */}
                                        <select name="eventtype" className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' onChange={(e)=>handleChange(e)} required>
                                            <option value="" disabled>Choose event type</option>
                                            <option value="jazz">Jazz</option>
                                            <option value="pop">Pop</option>
                                            <option value="rock">Rock</option>
                                            <option value="indie">Indie</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex flex-col  w-full'>
                                    <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Event date</p>
                                    <input type="date" name='eventdate' className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' onChange={(e)=>handleChange(e)} required/>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Description</p>
                                    <textarea name="description" id="" cols="30" rows="10" className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm resize-y' placeholder='Event description' onChange={(e)=>handleChange(e)} required>
                                    </textarea>
                                </div>
                            </div>
                            <div className="event-links mt-6">
                                <p className='text-textLight text-2xl font-semibold font-urbanist'>Event Links</p>
                                <div className='pricing-input flex mt-4'>
                                    <div className='flex flex-col w-1/2'>
                                        <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Live VR streaming</p>
                                        <input type="text" name='vrstreaminglink' className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' placeholder='Live VR link' onChange={(e)=>handleChange(e)} pattern='^(?:https?|ftp):\/\/[^\s\/$.?#].[^\s]*$'/>
                                    </div>
                                    <div className='flex flex-col ml-4 w-1/2'>
                                        <p className='font-workSans font-normal text-xs text-textSecondary-100 my-1'>Live streaming</p>
                                        <input type="text" name='streaminglink' className='bg-formInput border-2 border-solid border-borderColor px-4 py-2 text-textSecondary-200 rounded-lg font-urbanist font-medium text-sm' placeholder='Live video link' onChange={(e)=>handleChange(e)} pattern='^(?:https?|ftp):\/\/[^\s\/$.?#].[^\s]*$' required/>
                                    </div>
                                </div>
                            </div>
                            <button className='px-4 py-2 bg-accent rounded-3xl font-workSans mt-4'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
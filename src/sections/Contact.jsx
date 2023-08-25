import React, { useRef } from 'react';

const Contact = () => {

    const ref = useRef(null);

    const handleBtnClick = () => {
        ref.current.value = ''
    }

    return (
        <div id='contact' className='mt-[70px] max-w-[1020px] flex flex-col justify-center items-center mx-auto px-4'>
            <h1 className='text-[35px] sm:text-[45px] font-bold mx-auto w-full text-center mb-8'>Subscribe to our latest news</h1>
            <div className='w-full border-2 border-blue-500 rounded-[50px] overflow-hidden flex justify-between'>
                <input type='email' ref={ref} placeholder='email@gmail.com' className='outline-none py-[10px] pl-[30px] text-[20px]'/>
                <button className='mx-[20px] my-2 py-2 px-5 rounded-2xl bg-blue-500 border-2 border-blue-500 text-white font-bold hover:text-blue-500 hover:bg-white'
                onClick={handleBtnClick}
                >Subscribe</button>
            </div>
        </div>
    );
}

export default Contact;

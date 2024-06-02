import React from 'react'

export const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className="container mx-auto">
        <h2 className='font-primary font-bold uppercase w-36 lg:w-full mb-4'>Let's work Together!!!</h2>
        <form action="#">

          <div className='border rounded-xl p-5 border-white/50 flex flex-col gap-y-4 mb-4'>
            <div className='w-full'>
              <input className='bg-white/0 w-full border-b outline-none' type="text" placeholder='Your Name'/>
            </div>
          
            <div className='w-full'>
              <input className='bg-white/0 w-full border-b outline-none' type="text" placeholder='Your Email' />
            </div>

            <div className='w-full'>
              <textarea className='bg-white/0 w-full border-b outline-none h-48' type="text" placeholder='Your Comments' />
            </div>
          </div>
          <button className="btn btn-sm" type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

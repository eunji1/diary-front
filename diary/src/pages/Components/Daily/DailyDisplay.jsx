import React from 'react'
import RoundLine from '../RoundLine'

const DailyDisplay = () => {
    const [year, month, date] = ["2023", "01", "31"]
  return (
    <div>
        <div className='border-2 mx-20 my-10 border-black'> 
            <div className='flex my-5 border-2 border-gray-200'>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
                <RoundLine/>
            </div>
            <div className='flex text-center text-base'>
                <div className='font-bold basis-1/2'>
                   {year} / {month} / {date} 
                </div>
                <div className='basis-1/2'>
                    M T W T F S S
                </div>
            </div>
            <div className='h-[230px]'></div>
            <div className='h-[380px] border-2 border-gray-200'>
                <textarea className='w-full h-full bg-[#ececec] border-2 border-black text-xl leading-loose underline underline-offset-8' placeholder='글 작성'></textarea>
            </div>


        </div>
    </div>
  )
}

export default DailyDisplay
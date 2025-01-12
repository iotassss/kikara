import React from 'react'
import NewsList from '../../../data/news.json'

const NewsSection = () => {
  return (
    <div className="flex justify-around p-20 bg-news-color">
      <div>
        <div className='flex items-center -rotate-90 translate-y-full gap-2'>
          <p className='text-sm tracking-wide'>News</p>
          <div className="w-16 h-0.1 bg-text-color"></div>
        </div>
      </div>
      <div className='w-full'>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm tracking-wider">News</p>
          <h1 className="tracking-wide text-3xl">お知らせ</h1>
          <div className="w-12 h-0.1 bg-text-color"></div>
        </div>
        <div className='my-10 mx-auto p-10 bg-main-color max-w-4xl'>
          {NewsList.map((news, index) => (
            <div key={index} className='cursor-pointer py-4 border-b transition ease-in-out hover:bg-text-color hover:text-main-color'>
              <div className='border-l-4 border-accent-color p-2 text-start'>
                <p className='text-sm font-thin'>{news.date}</p>
                <p className='tracking-wide'>{news.newsTitle}</p>
              </div>
            </div>
          ))}    
        </div>
      </div>
      <div className='mt-auto -translate-y-full'>
        <div className='flex items-center -rotate-90 translate-y-full gap-2'>
          <p className='text-sm tracking-wide'>News</p>
          <div className="w-16 h-0.1 bg-text-color"></div>
        </div>
      </div>
    </div>
  )
}

export default NewsSection

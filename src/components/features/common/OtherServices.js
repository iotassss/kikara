import React from 'react'
import otherServices from '@/data/otherServices.json'
import ServiceCard from './ServiceCard'

const OtherServices = () => {
  return (
    <div className='py-24 bg-sub-color md:tracking-wider'>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm">others</p>
        <h2 className="text-2xl md:text-3xl">その他のサービス</h2>
        <div className="w-12 h-0.1 bg-text-color"></div>
      </div>
      <div className="mt-24 max-w-[90%] md:max-w-5xl mx-auto">
        <div className='flex flex-col gap-8 grow md:flex-row'>
          {otherServices.map((service) => (
            <ServiceCard
              key={service.service}
              service={service.service}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OtherServices

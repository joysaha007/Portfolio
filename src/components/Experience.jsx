import React from 'react'
import experience from './data/experience.json'
const Experience = () => {
  return (
    <>
      <div className="container ex my-5 ">
        <h1>EXPERIENCE</h1>
        {
            experience.map((data)=>{
                return(
                    <>
                    <div key={data.id} className='ex-items text-center my-5' id='experience'
                    data-aos='zoom-in'
                    data-aos-duration='1000'
                    >
                     <div className="left">
                     <img src={`/assets/${data.imageSrc}`} alt=" ex-photo" style={ { width: '80px', height: '80px', border: '2px solid wheat', borderRadius:'30%' } }  />
                     </div>
                     <div className="right ml-3">
                        <h2>{data.role}</h2>
                        <h4>
                         <span style={{color:"yellow"}}>{data.location}</span>
                         <h6 style={{color:"wheat"}}>{data.experiences}</h6>
                        </h4>
                
                     </div>
                    </div>
                    </>
                )
            })
        }
      </div>
    </>
  )
}

export default Experience

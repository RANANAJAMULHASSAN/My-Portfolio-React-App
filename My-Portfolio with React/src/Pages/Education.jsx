import React from 'react'
import './Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import EducationData from '../Education.json'
export const Education = () => {
  return (
    <>

      <section className="education" id="education">
        <h2 align="center" className="heading"><FontAwesomeIcon icon={faGraduationCap} /> My <span>Education</span></h2>
        <p className="qoute">Education is not the learning of facts, but the training of the mind to think.</p>
        <div className="box-container">


          {EducationData.map((v, i) => {
            return (
              <div className="box" key={i}>
                <div className="image">
                  <img draggable="false" src={require(`../${v.thumbnail}`)} alt="Education Thumbnail" />
                </div>
                <div className="content">
                  <h3>{v.title}</h3>
                  <p>{v.university}</p>
                  <h4>{v.duration}</h4>
                </div>
              </div>
            )
          })}

        </div>
      </section>
    </>
  )
}

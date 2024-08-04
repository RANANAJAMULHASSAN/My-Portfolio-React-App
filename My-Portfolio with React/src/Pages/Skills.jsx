import React from 'react'
import skillsData from '../Skill.json'
import './Skills.css'
export const Skills = () => {

  return (
    <>
      <section style={{ marginBottom: '5rem' }} id="skills" className="skills-section">
        <h2><i className="fa fa-bar-chart"></i> My<span> Skills </span></h2>
        <div className="text">
          Interpersonal Skills: Communication, Team management ,Time management,Adaptability
          Technical skills: Proficient in HTML, CSS ,Javascript and React.js.
        </div>
        <div className="cells">
          {skillsData.map((v, i) => (
            <div className="cell" key={i}>
              <img src={require(`../${v.img}`)} alt="Skills Thumbnail" />
              <span style={{ marginRight: v.margin }}>{v.title}</span>
              <div className="container">
                <div className={`${v.class} ${v.classes}`}>{v.percent} </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}

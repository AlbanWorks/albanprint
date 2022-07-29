import React from 'react'
import classes from './About.module.css'

const About = ({title, subtitle}) => {
  return (
    <div className={classes.Container}>
        <p className={classes.About}>
            {title} <br/><br/>
            {subtitle}
        </p>
    </div>
  )
}

export default About
import { Typography } from '@mui/material'
import React from 'react'
import './Profile.css'
import CustomTimeline from '../Timeline/Timeline'
/*used rafce code snippet, creates a functional component
A functional component is an element returned from a JavaScript function*/

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name>'>
        <Typography className='name'>Name</Typography>
        <Typography className='name'>Title</Typography>
      </div>

        <figure className='profile_image'>
          <img src={require('../../assets/images/picofme.jpg')} alt=""/>
        </figure>

        <div className='profile_information'>
          <CustomTimeline />
          <br/>
          <button>my Button</button>
        </div>
    </div>
  )
}

export default Profile
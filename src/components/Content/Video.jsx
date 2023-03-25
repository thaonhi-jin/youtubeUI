import React from 'react'
import './Video.css'

function Video(props) {
    const {video} = props
    const {thumbnail, title, length, link, channel, viewCount, uploadedAt} = video
  return (
    <div className="video">
        <div className="thumbnail">
            <img src={thumbnail} />
            <span className='length'>{length}</span>
        </div>
        <h4 className='title'>
            <a href={link}>{title}</a>
        </h4>
        <p className='channel'>
            <a href={channel.link}>{channel.name}</a>
        </p>
        <p className='video-info'>
            <span className='view-count'>{viewCount}</span>
            <span className='point-divider'></span>
            <span className='uploaded-at'>{uploadedAt}</span>
        </p>
    </div>
  )
}

export default Video
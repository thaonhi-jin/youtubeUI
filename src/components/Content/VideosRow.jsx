import React from 'react'
import Video from './Video'
import './VideosRow.css'

function VideosRow(props) {
    const {label, videos} = props
  return (
    <div className="videos-row-container">
        <div className="row">
            <div className="videos-label-container">
                <h3 className="videos-row-label">{label}</h3>
            </div>
            <div className="videos-row-item">
                {
                    videos.map(video => (
                        <Video video = {video}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default VideosRow
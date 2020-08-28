import React from 'react'
import './VideoItem.css'

const VideoItem = (props) =>{
    const handleSelect=()=>{
        props.select(props.video)
    }

    console.log(props.select)
    return(
        <div onClick={handleSelect} className="video-item">
        
        <img alt='youtubeicon' src = {props.video.snippet.thumbnails.medium.url}/>
       
        <div className=" txt ">{props.video.snippet.title}</div>
       
        </div>
    )}


export default VideoItem;
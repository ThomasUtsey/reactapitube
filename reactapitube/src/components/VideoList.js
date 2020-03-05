import React from 'react'
import VideoItem from './VideoItem'
import './VideoItem.css'

const VideoList = (props) =>{
    const listed = props.list.map(e =><VideoItem select = {props.select} video = {e}/>)
return <div className = "ui relaxed divided list video-list">{listed}</div>
   
}
export default VideoList
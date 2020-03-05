import axios from 'axios'

const KEY = 'AIzaSyCs3OK3jQfrDCwCmjbm6wEsAsYiMJH4MVQ'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        key:KEY
    }
})
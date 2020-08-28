import React from 'react'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import Youtube from '../components/api/youtube'

class App extends React.Component {
    state = {
        videos:[],
        sVid:null
    }
componentDidMount(){
this.onSearchSubmit("js cardio");
}

onSearchSubmit = async (term) =>{
   const response = await Youtube.get('/search',{
    params:{
        q:term
    }})
    this.setState({
        videos:response.data.items,
        sVid:response.data.items[0]
    })
}
onVidSelect = (video) =>{
    
    this.setState({sVid:video})
}

render(){
 return <div className="app"> 
 <h1 style={{textAlign:'center'}}>Youtube Search Engine</h1>
<SearchBar
onSubmit = {this.onSearchSubmit}
/>
<div className='ui stackable grid'>

<div className='ui row'>

<div className='eleven wide column'>
<VideoDetail
video = {this.state.sVid}
/>
</div>
<div className='five wide column'>
<VideoList
select = {this.onVidSelect}
list = {this.state.videos}
/>
</div>
</div>
</div>
</div> 
}
}
export default App;
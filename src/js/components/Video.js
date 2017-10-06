import React from "react"
import { connect } from 'react-redux'
import Header from './Header'
import VidList from './VidList'
import { Switch, Route, Link } from 'react-router-dom'
var GifPlayer = from 'react-gif-player'

class ViewVideo extends React.Component {
  render() {
    
    let { vidid, allVids } = this.props
    
    let video = allVids.find((vid) => { return vid._id === vidid })
    video = video || {
      title: 'Video Not Found',
      video: "#"
    }
    
    return (
      <div className="h-100">
        <Header />
        <div className="container h-100">
          
          <div className="row h-100 align-items-center justify-content-center">
            <div className="">
              <div className="col-12">
                <h2 className="list-title">{video.title}</h2>
              </div>
              // <blockquote class="imgur-embed-pub" lang="en" data-id={video.video}>
              //   <a href={"//imgur.com/"+video.video}>{video.title}</a>
              // </blockquote>
              // <script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
                <img className="" src={video.video} />
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allVids: state.allVids
  }
}

const ViewVid = connect(
  mapStateToProps
)(ViewVideo)

export default ViewVid

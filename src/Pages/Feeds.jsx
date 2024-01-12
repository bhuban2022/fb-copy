
import { useState } from "react";
import axios from "axios";
import "./feed.css"
function Feeds (){
 const [color, setColor]=useState("")
 const [backgroundImage, setBackgroundImage]=useState("")
 const [backgroundColor, setBackgroundColor]=useState("")
 const [padding, setPadding]=useState("")
 const [post, setPost]=useState("")

const changecolor = (color)=>{
setColor("white")
setPadding("50px")
setBackgroundImage("")
setBackgroundColor(color)
}
const changebackImag = (color)=>{
  setBackgroundImage(`url(${color})`)
  setPadding("50px")
  setBackgroundColor("")
  }
  
  const postdata =()=>{
    if(!post){
      alert("please fill the post")
      return
    }
      try {
        axios.post("https:/vercel.app/post",{
      post:post,
      color:color,
      backgroundImage:backgroundImage,
      padding:padding,
      color:color
    })
    .then(res=>{
      console.log("post posted")
      alert("this post is been posted")
    })
      } catch (error) {
        console.log(error)
        alert("Something went Wrong")
      }
    
    }
    
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 story_section">
                    <div className="story_cover d-flex">
          <div className="plus_circle">
          <i class="fa-solid fa-plus"></i>
          </div>
          <div className="story_text">
            <span className="story_create">
                Create Story
            </span><br></br>
            <span className="story_des">
              Share a Photo or write a something
            </span>
          </div>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-head">
        <h5 class="modal-title text-center" id="exampleModalLabel">Create Post</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
   <div className="post area">
    <input type="text" style={{color,backgroundImage,backgroundColor,padding}} className="post_input" placeholder="What is in your mind"></input>
    <button className="btn btn-danger p-3" onClick={()=>{changecolor("red")}}></button>
    <button className="btn btn-primary p-3" onClick={()=>{changecolor("blue")}}></button>
    <button className="btn btn-success p-3" onClick={()=>{changecolor("green")}}></button>
    <button className="btn btn-warning p-3" onClick={()=>{changecolor("yellow")}}></button>
    <button className="btn btn-secondary p-3" onClick={()=>{changebackImag("https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.10873-6/18853681_319468578483337_7702795447605133312_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=427b5c&_nc_eui2=AeHfTDJ-FPaLyOeAmqsFRG10lG5kT-UFjFyUbmRP5QWMXEMAFEM5wE7ftvllF2jpZXfIWEdHFbjIioll8HjGPxIZ&_nc_ohc=oqc2sa1wGrcAX-fqcEI&_nc_ht=scontent.fkhi8-1.fna&oh=00_AfC5ne8fj3r_qXSiLIr6vMk26zF3Bw4d2GB0qZ91M_cu4w&oe=65A332E5&quot")}}></button>
   </div>
      </div>
      <div class="modal-footer">
      <button className="btn btn-primary" onClick={postdata}>Post</button>
      </div>
    </div>
  </div>
</div>
       </>
    )
}
export default Feeds
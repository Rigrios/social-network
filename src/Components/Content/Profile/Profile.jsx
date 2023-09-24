import React from "react";
import ReactDOM from 'react-dom/client';
import style from "./Profile.module.css";

function Profile(props) {
  
  return (
    <div className={style.Profile}>
      <div className={style.profilKard}>
        <div className={style.profilPhoto}>
          <img
            src="https://sun4-18.userapi.com/impg/c857036/v857036507/caba1/ZbgcOe8cZHw.jpg?size=1439x2160&quality=96&sign=23f880a7a122db33309c436e47039295&type=album"
            alt=""
          />
        </div>
        <div className={style.profilInfo}>
          <div className={style.info}>
            <h5>Alexandrov Igor</h5>
            <p>JavaScript Frontend-Developer</p>
          </div>
        </div>
      </div>
      <Posts posts={props.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
    </div>
  );
}

export default Profile;

function Posts (props) {

    const input = React.createRef()
    const postRender = props.posts.posts.map(post => <Post text={post.text} />)
    
    function addPost () {
      let text = input.current.value
      props.addPost(text)
      
    }
    let onPostChange = () => {
      let text = input.current.value
      props.updateNewPostText(text)

    }
    return (
        <div className={style.Posts}>
            <div className={style.PostsInput}>
                <textarea type="text" onChange={onPostChange} value={props.posts.newPostText}  className={style.input}  ref={input} placeholder="Что у вас нового????" />
                <button className={style.button} onClick={addPost}  >Отправить</button>
            </div>
            <div className={style.postBox}>
                {postRender}
            </div>
        </div>
    )
    
}


function Post(props) {
  
    return (
        <div className={style.post}>
            <div className={style.postText}>
                {props.text}
            </div>
        </div>
    )
}
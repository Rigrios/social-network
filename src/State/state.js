
let store = {
_state: {
    posts: [
        {
            id: 1,
            text: 'My Post number 1',
        },
        {
             id: 2,
            text: 'My post number 2',
        },
         
    ],
    newPostText: ''
},
getState() {
    return this._state
},
 renderPage() {
    console.log('State')
},
addPost(text) {
    let newPost = {
        id: 10,
        text: text
    }
    this._state.posts.push(newPost) 
    this.renderPage(store.getState())
},
updateNewPostText(newText) {
    this._state.newPostText = newText
    this.renderPage(store.getState())

},

subscribe(observer){
    this.renderPage = observer
},

}




export default store

window.store = store

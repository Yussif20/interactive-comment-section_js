const commentsContainer = document.querySelector(".comments__container")

const displayComment =(commentData)=>{
    const comment =`
        <div class="comment"> 
            <div class="comment__header">
               <div class="user">
                  <img src="${commentData.user.image.png}" />
                  <p>${commentData.user.username}</p>
                  <p>${commentData.createdAt}</p>
                </div>
                <button class="reply-btn">reply</button>
            </div>
            <div class="comment__text">
            <p>${commentData.content}</p>
            </div>
        </div>
        ${commentData.replies && displayReplies(commentData.replies) }`
    return comment
}
const displayComments =(comments)=>{
    comments.map((comment)=>{
        console.log(comment)
        commentsContainer.insertAdjacentHTML("afterbegin",displayComment(comment))
    })
}

fetch("data.json").then(res=>{
    return res.json()
}).then((data)=>{

      displayComments(data.comments);
})
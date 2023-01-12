var post = document.getElementById('post')
var cnt = 1
var height = 6000

function loadPosts(){
    $.get(`https://edyoda-instagram-data-sourav-4erf.vercel.app/posts/${cnt}`, function(res){
        console.log(res)
        for(var i=0;i<res.length;i++){
            var tagString = ''
            for(var j=0;j<res[i].tags.length;j++){
                tagString += '#'+res[i].tags[j]+' '
            }
            post.innerHTML += 
            `
                <div class='postBody'>
                    <div class='postHeader'>
                        <div class='profilePic'>
                            <img src=${res[i].user.photo}>
                        </div>
                        <div class='userName'>
                            <span>${res[i].user.name}</span>
                        </div>
                    </div>
                    <div class='postImage'>
                        <img src=${res[i].postPic}
                    </div>
                    <div class='reactions'>
                        <div>
                            <i class="far fa-heart"></i>
                            <i class="fa fa-comment-o"></i>
                            <i class="fa fa-send-o"></i>
                        </div>
                        <div class='likes'>
                            <p>${res[i].reactions} likes</p>
                        </div>
                    </div>
                    <div class='content'>
                        <span class='name'>${res[i].user.name}</span>
                        <span class='body'>${res[i].body}</span>
                    </div>
                    <div class='tags'>
                        <span>${tagString}</span>
                    </div>
                    <div class="comment">
                        <input type='text' placeholder='Add a comment...'>
                    </div>
                </div>
            `
        }
    })
    cnt = cnt === 10 ? 1 : cnt + 1;
}

$(document).ready(function(){
    loadPosts()
    window.addEventListener('scroll', function(){
        if(window.scrollY >= height){
            loadPosts()
            height+=6000
        }
    })
})
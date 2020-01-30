
let navShrinker = () => {
    if(document.body.scrollTop > 75) {
        $('nav').css('height', 50)
        $('nav').find('a').css('font-size', 20)
        $('nav').find('.logo').addClass('hide')
        $('nav').find('.vl').addClass('hide')
    }
    else {
        $('nav').css('height', 75)
        $('nav').find('a').css('font-size', 30)
        $('nav').find('.logo').removeClass('hide')
        $('nav').find('.vl').removeClass('hide')

    }
}
window.onscroll = function(){navShrinker()}

let username =localStorage.getItem('username')
console.log(username)

$(document).ready(function(){

    let imageBox = `
        <div class = "feed-box">
            <img class = "feed-images">
            
            <div class = "like-box">
                <div class = "button-list">
                    <div class ="left-button">
                        <button class = 'buttons'>
                            <i class="heart fa fa-heart-o"></i>
                        </button>

                        <button class = 'buttons'>
                            <i class="fa fa-comment-o"></i>
                        </button>

                        <button class = 'buttons'>
                            <i class="fa fa-upload"></i>
                        </button>
                    </div>
                    

                    <div class = "right-button">
                        <button class = 'buttons'>
                            <i class="fa fa-bookmark-o"></i>
                        </button>
                    </div>

                    

                </div>
                <div class = 'comments-go-here'>
                    <p class = "like-count">replace this text with random likes</p>
                </div>
                
                <div>
                    <form method = "post" onsubmit="return false" name ="comment-form" class = "comment-form">
                        <input type="text" name="comment-input" class="comment-input"
                            placeholder = "Add a comment..."/>
                        <input type="submit" name = "post-comment" class='post-comment' value="Post">
                    </form>
                </div>
            </div>
        </div>`

    let onSubmitComment = function(){
        $(this).closest('.feed-box').find('.comments-go-here').append('<p class="comments"></p>')
        let inputVal = $(this).find('.comment-input').val()
        $(this).closest('.feed-box').find('.comments').last().text(`${username} says ${inputVal}`)
        $(this).find("input[type=text]").val('');
    }

    let likeIncrementer = function() {
        //toggle the heart color
        $(this).closest('.feed-box').find('.heart').toggleClass('heart fa fa-heart-o heart fa fa-heart')

        //increment the like count underneath
        let likeCount = parseInt($(this).closest('.feed-box').find('.like-count').attr('value'))
        let currText = $(this).closest('.feed-box').find('.like-count').text().replace(/\D/g,"")
        if (parseInt(currText) === likeCount) {
            $(this).closest('.feed-box').find('.like-count').text(`Liked by ${(likeCount+1).toLocaleString()} bots`)
        }
        else {
            $(this).closest('.feed-box').find('.like-count').text(`Liked by ${(likeCount).toLocaleString()} bots`)
        }
    }

    let storage;
    let randomLikes = []

    let retrieveData = function() {
        $.get('https://image-server-codesmith.firebaseapp.com/images',
        function(data, status){
            if(status == "success") {
                storage = data
                for (var i=0; i<storage.length; i++) {
                    randomLikes.push(Math.floor(Math.random()*10001))
                    $('#feed').append(imageBox)
                    $('#feed > div > img').last().attr('id', "image" + i)
                    $('#feed > div > img').last().attr('src', storage[i])
                    $('.feed-box').last().find('.like-count').text(`Liked by ${randomLikes[i].toLocaleString()} bots`)
                    $('.feed-box').last().find('.like-count').attr('value', randomLikes[i])


                    //double click functionality
                    $('#feed > div > img').last().on('dblclick', likeIncrementer)
                    $('.feed-box').last().find('.buttons').on('dblclick', likeIncrementer)

                    //remove images on error
                    $('.feed-box').last().find('.feed-images').on('error', function(){
                        $(this).parent().remove()
                    })
                    
                    //resubmit the submit functionality
                    $('.feed-box').last().find('.comment-form').on('submit', onSubmitComment)
                    
                }
            }
            if(status == "error") {
                alert("Error: " + status + ": " + status);
            }
        });
        }
        
    retrieveData()

})

$(document).ready(function(){
  $(renderCommentList)

  function renderCommentList(){
  var list = new CommentList()
  $('form#note-form').submit(function(event){
    event.preventDefault()
    const $input = $(event.target).find('input[type=text],select')
    const text = $input.val()
    list.addComment(text)
    $('#comment-list').html(list.renderComments())
    $input.val('')
    })
  } // not sure why there are 2 bullet points
})

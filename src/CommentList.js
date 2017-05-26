class CommentList {
  constructor (){
    this.comments = []
  }

  renderComments (){
    const maps = this.comments.map(comment => comment.render() )
    return maps.join('')
  }

  addComment (content){
    const comment = new Comment (content)
    this.comments.push(comment)
  }

}

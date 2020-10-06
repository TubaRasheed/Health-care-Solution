import React from 'react'
import CommentSummary from './commentSummary';

const CommentList = ({comments}) => {
    return(
        <div>
                       { comments && comments.map( comment=> {
               return(
                   <CommentSummary comment={comment} key={comment.id} />
               )
           })}
        </div>
    )
}


export default CommentList;

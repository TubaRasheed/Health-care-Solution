import React from 'react'
import CommentSummary5 from './commentSummary5';

const CommentList5 = ({comments5}) => {
    return(
        <div>
                       { comments5 && comments5.map( comment5 => {
               return(
                   <CommentSummary5 comment5={comment5} key={comment5.id} />
               )
           })}
        </div>
    )
}


export default CommentList5;

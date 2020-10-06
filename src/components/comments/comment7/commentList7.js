import React from 'react'
import CommentSummary7 from './commentSummary7';

const CommentList7 = ({comments7}) => {
    return(
        <div>
                       { comments7 && comments7.map( comment7=> {
               return(
                   <CommentSummary7 comment7={comment7} key={comment7.id} />
               )
           })}
        </div>
    )
}


export default CommentList7;

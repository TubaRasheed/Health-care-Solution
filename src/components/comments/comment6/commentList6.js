import React from 'react'
import CommentSummary6 from './commentSummary6';

const CommentList6 = ({comments6}) => {
    return(
        <div>
                       { comments6 && comments6.map( comment6=> {
               return(
                   <CommentSummary6 comment6={comment6} key={comment6.id} />
               )
           })}
        </div>
    )
}


export default CommentList6;

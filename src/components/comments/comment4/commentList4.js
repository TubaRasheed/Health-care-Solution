import React from 'react'
import CommentSummary4 from './commentSummary4';

const CommentList4 = ({comments4}) => {
    return(
        <div>
                       { comments4 && comments4.map( comment4=> {
               return(
                   <CommentSummary4 comment4={comment4} key={comment4.id} />
               )
           })}
        </div>
    )
}


export default CommentList4;

import React from 'react'
import CommentSummary2 from './commentSummary2';

const CommentList2 = ({comments2}) => {
    return(
        <div>
                       { comments2 && comments2.map( comment2=> {
               return(
                   <CommentSummary2 comment2={comment2} key={comment2.id} />
               )
           })}
        </div>
    )
}


export default CommentList2;

import React from 'react'
import CommentSummary3 from './commentSummary3';

const CommentList3 = ({comments3}) => {
    return(
        <div>
                       { comments3 && comments3.map( comment3=> {
               return(
                   <CommentSummary3 comment3={comment3} key={comment3.id} />
               )
           })}
        </div>
    )
}


export default CommentList3;

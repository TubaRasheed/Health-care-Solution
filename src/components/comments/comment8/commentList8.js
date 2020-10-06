import React from 'react'
import CommentSummary8 from './commentSummary8';

const CommentList8 = ({comments8}) => {
    return(
        <div>
                       { comments8 && comments8.map( comment8=> {
               return(
                   <CommentSummary8 comment8={comment8} key={comment8.id} />
               )
           })}
        </div>
    )
}


export default CommentList8;

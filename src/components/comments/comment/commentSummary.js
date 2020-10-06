import React from 'react';
import moment from 'moment';

const CommentSummary = ({ comment }) => {
    // console.log(props);
    // const { comment } = props;
     if (comment) {
        return(
            <div>
                <p><strong>{comment.authorFirstName} {comment.authorLastName}:</strong> {comment.comment}
                <br /> 
                {moment(comment.createAt.toDate()).calendar()}</p>
           </div>
    )
    }
     else{
         return(
             <div>
                <p>Loading Comment...</p>
             </div>
         )
     }
} 

export default CommentSummary;
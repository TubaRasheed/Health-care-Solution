import React from 'react';
import moment from 'moment';

const CommentSummary6 = ({ comment6 }) => {
    // console.log(props);
    // const { comment } = props;
     if (comment6) {
        return(
            <div>
                <p><strong>{comment6.authorFirstName} {comment6.authorLastName}:</strong> {comment6.comment}
                <br />
                {moment(comment6.createAt.toDate()).calendar()}</p>
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

export default CommentSummary6;
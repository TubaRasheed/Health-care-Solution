import React from 'react';
import moment from 'moment';

const CommentSummary4 = ({ comment4 }) => {
    // console.log(props);
    // const { comment } = props;
     if (comment4) {
        return(
            <div>
                <p><strong>{comment4.authorFirstName} {comment4.authorLastName}:</strong> {comment4.comment}
                <br />
                {moment(comment4.createAt.toDate()).calendar()}</p>
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

export default CommentSummary4;
import React from 'react';
import moment from 'moment';

const CommentSummary2 = ({ comment2 }) => {
    // console.log(props);
    // const { comment } = props;
     if (comment2) {
        return(
            <div>
                <p><strong>{comment2.authorFirstName} {comment2.authorLastName}:</strong> {comment2.comment}
                <br />
                {moment(comment2.createAt.toDate()).calendar()}</p>
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

export default CommentSummary2;
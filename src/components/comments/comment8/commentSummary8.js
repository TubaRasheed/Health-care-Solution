import React from 'react';
import moment from 'moment';

const CommentSummary8 = ({ comment8 }) => {
    // console.log(props);
    // const { comment } = props;
     if (comment8) {
        return(
            <div>
                <p><strong>{comment8.authorFirstName} {comment8.authorLastName}:</strong> {comment8.comment}
                <br />
                {moment(comment8.createAt.toDate()).calendar()}</p>
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

export default CommentSummary8;


import React from 'react';
import moment from 'moment';

const CommentSummary5 = ({ comment5 }) => {
    // console.log(props);
    // const { comment } = props;
     if (comment5) {
        return(
            <div>
                <p><strong>{comment5.authorFirstName} {comment5.authorLastName}:</strong> {comment5.comment}
                <br />
                {moment(comment5.createAt.toDate()).calendar()}</p>
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

export default CommentSummary5;
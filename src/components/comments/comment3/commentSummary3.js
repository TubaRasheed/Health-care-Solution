import React from 'react';
import moment from 'moment';

const CommentSummary3 = ({ comment3 }) => {
    // console.log(props);
    // const { comment } = props;
     if (comment3) {
        return(
            <div>
                <p><strong>{comment3.authorFirstName} {comment3.authorLastName}:</strong> {comment3.comment}
                <br />
                {moment(comment3.createAt.toDate()).calendar()}</p>
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

export default CommentSummary3;
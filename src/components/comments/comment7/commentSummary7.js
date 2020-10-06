import React from 'react';
import moment from 'moment';

const CommentSummary7 = ({ comment7 }) => {
    // console.log(props);
    // const { comment } = props;
     if (comment7) {
        return(
            <div>    
                <p><strong>{comment7.authorFirstName} {comment7.authorLastName}:</strong> {comment7.comment}
                <br />
                {moment(comment7.createAt.toDate()).calendar()}</p>
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

export default CommentSummary7;
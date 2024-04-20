import { useState } from 'react';

function Commentslist() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);
    const handleDeleteComment = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    };
    return (
        <div>
            <h1>Comments List</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        {comment.text}
                        <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Commentslist;
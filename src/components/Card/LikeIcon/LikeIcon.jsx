import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLike } from '../../../store/slices/cardSlices';

function LikeIcon({id}) {
    const [liked, setLiked] = useState(false);
    const dispatch = useDispatch()

    const handleToggleLike = () => {
        setLiked(!liked)
        dispatch(toggleLike(id))
    }

    return (
        <button
            onClick={handleToggleLike}
            aria-pressed={liked}
            aria-label={liked ? 'Убрать лайк' : 'Поставить лайк'}
            style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                outline: 'none',
            }}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={liked ? 'red' : 'none'}
                stroke="red"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        </button>
    );
}

export default LikeIcon;
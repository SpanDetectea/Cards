import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../../../store/slices/cardSlices';

function LikeIcon({id}) {
    const isLiked = useSelector(s => s.cards.data.find(card => card.id === id)?.like)
    const dispatch = useDispatch()

    const handleToggleLike = () => {
        dispatch(toggleLike(id))
    }

    return (
        <button
            onClick={handleToggleLike}
            aria-pressed={isLiked}
            aria-label={isLiked ? 'Убрать лайк' : 'Поставить лайк'}
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
                fill={isLiked ? 'red' : 'none'}
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
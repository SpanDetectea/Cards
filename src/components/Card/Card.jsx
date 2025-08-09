import { getData, onLoadOn } from '../../store/slices/cardSlices'
import { fetchData } from '../../api/fetchData'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePagination } from '../../hooks/usePagination';
import Pagination from '../Pagination/Pagination';
import "./Card.css"
import defaultImage from '../../images/not-found.svg'
import { getImages } from '../../store/slices/imagesSlices';
import { fetchImage } from '../../api/fetchImage';
import { getRandomImage } from '../../utils/getRandomImage';

const Card = () => {
    const dispatch = useDispatch();
    const data = useSelector(s => s.cards.data)
    const images = useSelector(s => s.images.images)
    const { currentPage, setCurrentPage, totalPages, currentCards } = usePagination(data)
    useEffect(() => {
        const getFetchData = async () => {
            if (data && data.length > 0) return;
            dispatch(onLoadOn());
            try {
                const response = await fetchData();
                dispatch(getData(response));
            } catch (err) {
                console.error("Ошибка загрузки карточек");
            }
        };
        const getImagesData = async () => {
            try {
                const response = await fetchImage();
                dispatch(getImages(response.images));
            } catch (err) {
                console.error("Ошибка загрузки карточек");
            }
        }

        getFetchData();
        getImagesData();
    }, []);

    const handleError = (e) => {
        const image = getRandomImage(images);
        e.target.src = image;
        e.target.onerror = null;
    }

    return (
        <>
            <div className="card">
                {currentCards && currentCards.map(card => {
                    return (
                        <div key={card.id} className="product-card">
                            <img
                                className="product-card__image"
                                src={card.url}
                                alt=""
                                onError={handleError}
                            />
                            <div className="product-card__content">
                                <h3 className="product-card__title">{card.title}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            /></>

    );
}

export default Card;

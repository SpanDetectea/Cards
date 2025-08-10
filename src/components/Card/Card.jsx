import { addNewImage, deleteCard, getData, onLoadOn } from '../../store/slices/cardSlices'
import { fetchData } from '../../api/fetchData'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePagination } from '../../hooks/usePagination';
import Pagination from '../Pagination/Pagination';
import "./Card.css"
import deleteBasket from '../../images/delete.svg'
import { getImages } from '../../store/slices/imagesSlices';
import { fetchImage } from '../../api/fetchImage';
import { getRandomImage } from '../../utils/getRandomImage';
import LikeIcon from './LikeIcon/LikeIcon';
import LikesFilter from './LikesFilter/LikesFilter';

const Card = () => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);

    const {data, loading} = useSelector(s => s.cards)
    const images = useSelector(s => s.images.images)
    const { currentPage, setCurrentPage, totalPages, currentCards } = usePagination(active ? data.filter(card => card?.like) : data)
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
            if (images && images.length > 0) return
            try {
                const response = await fetchImage();
                dispatch(getImages(response.images));
            } catch (err) {
                console.error("Ошибка загрузки резервных изображений");
            }
        }

        getFetchData();
        getImagesData();
    }, []);
    useEffect(() => {
        setCurrentPage(1)        
    }, [active]);
    const handleError = (e, id) => {
        const image = getRandomImage(images);
        e.target.src = image;
        e.target.onerror = null;
        dispatch(addNewImage({
            id,
            image
        }))
        
    }
    const handleDelete = (id) => dispatch(deleteCard(id))
    
    if (loading) {
        return <p>Загружаем карточки...</p>
    }
    return (
        <>
            <LikesFilter active={active} setActive={setActive} />
            <div className="card">
                {currentCards && currentCards.map(card => {
                    return (
                        <div key={card.id} className="product-card">
                            <img
                                className="product-card__image"
                                src={card.url}
                                alt=""
                                onError={(e) => handleError(e, card.id)}
                            />
                            <div className="product-card__content">
                                <h3 className="product-card__title">{card.title}</h3>
                            </div>
                            <div className="product-card__buttons">
                                <button className="product-card__basket"
                                    onClick={() => handleDelete(card.id)}
                                ><img src={deleteBasket} className="product-card__basket__image" alt='' /></button>
                                <LikeIcon id={card.id} />
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

import "./LikesFilter.css"

const LikesFilter = ({active, setActive}) => {
    return (
        <button
            className={`filter-button ${active ? 'filter-button--active' : ''}`}
            onClick={() => setActive(!active)}
        >
            Фильтр лайков: {active ? "Применен" : "Неприменен"}
        </button>
    );
}

export default LikesFilter;

import './Pagination.css'

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    return (
        <div className="pagination">
            <button
                className="pagination__button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                Назад
            </button>
            <span className="pagination__info">
                Страница {currentPage} из {totalPages}
            </span>
            <button
                className="pagination__button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                Вперед
            </button>
        </div>
    );
}

export default Pagination
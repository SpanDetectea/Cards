import { useState } from "react";

export function usePagination(data, itemsPerPage = 10) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const currentCards = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    return { currentPage, setCurrentPage, totalPages, currentCards };
}
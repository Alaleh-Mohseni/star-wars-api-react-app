const Pagination = ({ pageNumber, updatePageNumber }) => {

    const changePage = (type, number) => {
        switch (type) {
            case "next":
                if (pageNumber < 9) updatePageNumber(prevPageNumber => prevPageNumber + 1);
                break;
            case "previous":
                if (pageNumber > 1) updatePageNumber(prevPageNumber => prevPageNumber - 1);
                break;
            default:
                updatePageNumber(number);
                break;
        }
    }

    const pages = 9;
    const counted = [];
    for (let i = 1; i <= pages; i++) {
        counted.push(
            <button onClick={() => changePage("number", i)} className={`btn btn-warning ms-1`} type="button" key={i}>
                {i}
            </button>
        );
    }


    return (
        <nav aria-label="..." className="d-flex flex-column align-items-center justify-content-center m-2">
            {/* <h4 className="py-2">Page: {pageNumber}</h4> */}
            <ul className="pagination">
                <li className="page-item disabled">
                    <button onClick={() => changePage("previous")} className="btn btn-danger" disabled={pageNumber === 1} type="button">
                        Previous
                    </button>
                </li>
                <li className="page-item">{counted}</li>
                <li className="page-item">
                    <button onClick={() => changePage("next")} className="btn btn-danger ms-1" disabled={pageNumber === 9} type="button">
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination
import { Pagination } from '@mui/material';

// Как затипизировать onPageChange?
function BasePagination(props: {
    pageCount: number;
    page: number;
    onPageChange: any;
}) {
    return props.pageCount > 0 ? (
        <Pagination
            count={props.pageCount}
            color="primary"
            onChange={props.onPageChange}
            page={props.page}
        />
    ) : null;
}

export default BasePagination;
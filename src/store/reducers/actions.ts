import { Repository } from '../../api';
// Доступные экшны
export type SetQ = {
    type: 'SET_Q';
    payload: {
        q: string;
    };
};

export type SetTotalCount = {
    type: 'SET_TOTAL_COUNT';
    payload: {
        totalCount: number;
    };
};

export type SetRepositoriesCards = {
    type: 'SET_REPOSITORIES_CARDS';
    payload: {
        repositoriesCards: Repository[];
    };
};

export type SetPage = {
    type: 'SET_PAGE';
    payload: {
        page: number;
    };
};

export type SetErrorMessage = {
    type: 'SET_ERROR_MESSAGE';
    payload: {
        errorMessage: string | null;
    };
};

export type SetIsLoading = {
    type: 'SET_IS_LOADING';
    payload: {
        isLoading: boolean;
    };
};

export type Search = {
    type: '*SEARCH';
    payload: {
        q: string;
        page: number;
    };
};

export type SetPageCount = {
    type: 'SET_PAGE_COUNT';
    payload: {
        pageCount: number;
    };
};

type Action =
    | SetQ
    | SetTotalCount
    | SetRepositoriesCards
    | SetPage
    | SetErrorMessage
    | SetIsLoading
    | Search
    | SetPageCount

export default Action;

import { Repository } from '../../api';
import Action from './actions';
// Что делать при вызове экшнов
export type State = {
    q: string;
    totalCount: number;
    repositoriesCards: Repository[];
    page: number;
    errorMessage: string | null;
    isLoading: boolean;
    pageCount: number;
};

export const defaultState: State = {
    q: '',
    totalCount: 0,
    repositoriesCards: [],
    page: 0,
    errorMessage: null,
    isLoading: false,
    pageCount: 0,
};

export default (state: State | undefined, action: Action): State => {
    state = state || defaultState;

    switch (action.type) {
        case 'SET_Q':
            return {
                ...state,
                q: action.payload.q,
            };

        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: action.payload.totalCount,
            };

        case 'SET_REPOSITORIES_CARDS':
            return {
                ...state,
                repositoriesCards: action.payload.repositoriesCards,
            };

        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload.page,
            };

        case 'SET_ERROR_MESSAGE':
            return {
                ...state,
                errorMessage: action.payload.errorMessage,
            };

        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        
        case 'SET_PAGE_COUNT':
            return {
                ...state,
                pageCount: action.payload.pageCount,
            };

        default:
            return state;
    }
};

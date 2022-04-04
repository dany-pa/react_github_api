import { Repository } from '../api';
// TODO: Упростить импорт. МОжет импортировать что-то одно, внутри чего все все остальное?
import Action, { Search, SetErrorMessage, SetIsLoading, SetPage, SetPageCount, SetQ, SetRepositoriesCards, SetTotalCount } from './reducers/actions';
// Вызов экшнов
export type Dispatcher<T> = (action: Action) => T

export class ActionsDispatcher<T = void> {
    constructor(
        private dispatch: Dispatcher<T>
    ) {}

    setQ(q: string){
        const action: SetQ = { type: "SET_Q", payload: { q } }
        return this.dispatch(action)
    }
    
    setTotalCount(totalCount: number){
        const action: SetTotalCount = { type: "SET_TOTAL_COUNT", payload: { totalCount } }
        return this.dispatch(action)
    }
    
    setRepositoriesCards(repositoriesCards: Repository[]){
        const action: SetRepositoriesCards = { type: "SET_REPOSITORIES_CARDS", payload: { repositoriesCards } }
        return this.dispatch(action)
    }
    
    setPage(page: number){
        const action: SetPage = { type: "SET_PAGE", payload: { page } }
        return this.dispatch(action)
    }
    
    setErrorMessage(errorMessage: string | null){
        const action: SetErrorMessage = { type: "SET_ERROR_MESSAGE", payload: { errorMessage } }
        return this.dispatch(action)
    }
    
    setIsLoading(isLoading: boolean){
        const action: SetIsLoading = { type: "SET_IS_LOADING", payload: { isLoading } }
        return this.dispatch(action)
    }
    
    search(q: string, page: number){
        const action: Search = { type: "*SEARCH", payload: { q, page } }
        return this.dispatch(action)
    }
    
    setPageCount(pageCount: number){
        const action: SetPageCount = { type: "SET_PAGE_COUNT", payload: { pageCount } }
        return this.dispatch(action)
    }
}

import { call, put, takeEvery, debounce, select } from 'redux-saga/effects';
import api, { Response } from '../../api';
import { MAX_PAGES, PER_PAGE } from '../../const';
import { ActionsDispatcher, Dispatcher } from '../actions';
import { State } from '../reducers';
import { SetQ, Search, SetPage, SetErrorMessage } from '../reducers/actions';
// ВОПРОС: Что если нам нужен putResolve, или put(channel, action)? Просто создаем еще один экземпляр класса?
const actions = new ActionsDispatcher(put as Dispatcher<void>);

function* setQ(action: SetQ) {
    yield actions.setTotalCount(0);
    yield actions.setPage(1);
    yield actions.setQ(action.payload.q);
    yield actions.search(action.payload.q, 0);
}

function* search(action: Search) {
    // ВОПРОС: Как лучше делать очистку каких-то значений при старте поиска?

    yield actions.setRepositoriesCards([]);
    yield actions.setIsLoading(true);

    try {
        const result: Response = yield api.search(
            action.payload.q,
            action.payload.page
        );

        yield actions.setTotalCount(result.total_count);

        const totalCount = result.total_count;
        const pages = Math.ceil(totalCount / PER_PAGE);
        const pageCount = pages > MAX_PAGES ? MAX_PAGES : pages;
        yield actions.setPageCount(pageCount);

        yield actions.setRepositoriesCards(result.items);
    } catch (error) {
        yield actions.setErrorMessage((error as Error).message);
    } finally {
        yield actions.setIsLoading(false);
    }
}

function* setPage(action: SetPage) {
    yield actions.setPage(action.payload.page);

    const q: string = yield select((state: State): string => state.q);
    yield actions.search(q, action.payload.page);
}

function* setErrorMessage(action: SetErrorMessage) {
    yield actions.setErrorMessage(action.payload.errorMessage);
}

export default function* defaultSaga() {
    yield takeEvery('*SET_Q', setQ);
    yield debounce(300, '*SEARCH', search);
    yield takeEvery('*SET_PAGE', setPage);
    yield takeEvery('*SET_ERROR', setErrorMessage);
}

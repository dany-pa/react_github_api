import { call, put, takeEvery, debounce, select } from 'redux-saga/effects';
import api, { Response } from '../../api';
import { ActionsDispatcher, Dispatcher } from '../actions';
import { State } from '../reducers';
import {SetQ, Search, SetPage, SetErrorMessage} from '../reducers/actions';
const actions = new ActionsDispatcher(put as Dispatcher<void>);


function* setQ(action: SetQ) {
    yield put({
        type: 'SET_TOTAL_COUNT',
        payload: { totalCount: 0 },
    });
    yield put({ type: 'SET_PAGE', payload: { page: 1 } });
    yield actions.setQ(action.payload.q);
    yield put({ type: '*SEARCH', payload: action.payload });
}

function* search(action: Search) {
    // ВОПРОС: Как лучше делать очистку каких-то значений при старте поиска?

    yield put({
        type: 'SET_REPOSITORIES_CARDS',
        payload: { repositoriesCards: [] },
    });

    // ВОПРОС: Может есть какой-то лучший способ делать индикатор загрузки?
    yield put({
        type: 'SET_IS_LOADING',
        payload: { isLoading: true },
    });

    try {
        const result: Response = yield call(
            api.search,
            action.payload.q,
            action.payload.page
        );

        yield put({
            type: 'SET_TOTAL_COUNT',
            payload: { totalCount: result.total_count },
        });

        yield put({
            type: 'SET_REPOSITORIES_CARDS',
            payload: { repositoriesCards: result.items },
        });
    } catch (error) {
        yield put({
            type: 'SET_ERROR_MESSAGE',
            payload: { errorMessage: (error as Error).message },
        });
    } finally {
        yield put({
            type: 'SET_IS_LOADING',
            payload: { isLoading: false },
        });
    }
}

function* setPage(action: SetPage) {
    yield put({ type: 'SET_PAGE', payload: action.payload });

    const q: string = yield select((state: State): string => state.q);
    yield put({
        type: '*SEARCH',
        payload: {
            q,
            page: action.payload.page,
        },
    });
}

function* setErrorMessage(action: SetErrorMessage) {
    yield put({
        type: 'SET_ERROR_MESSAGE',
        payload: action.payload,
    });
}

export default function* sagaSetQ() {
    yield takeEvery('*SET_Q', setQ);
    yield debounce(300, '*SEARCH', search);
    yield takeEvery('*SET_PAGE', setPage);
    yield takeEvery('*SET_ERROR', setErrorMessage);
}
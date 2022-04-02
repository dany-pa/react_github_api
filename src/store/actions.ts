import Action, { SetQ } from './reducers/actions';

export type Dispatcher<T> = (action: Action) => T

export class ActionsDispatcher<T = void> {
    constructor(
        private dispatch: Dispatcher<T>
    ) {}

    setQ(q: string){
        const action: SetQ = { type: "SET_Q", payload: { q } }
        return this.dispatch(action)
    }
}

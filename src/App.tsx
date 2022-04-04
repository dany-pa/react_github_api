import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from './store/reducers';
import { Repository } from './api';
import RepositoryCard from './components/RepositoryCard';
import CardSkeleton from './components/CardSkeleton';
import BasePagination from './components/BasePagination';
import { Container, Card, TextField, Typography } from '@mui/material';
import RepositoryCardList from './components/RepositoryCardsList';

function App() {
    const dispatch = useDispatch();

    const q = useSelector((state: State): string => state.q);
    const onQChange = useCallback(
        (e) => {
            dispatch({ type: '*SET_Q', payload: { q: e.target.value } });
        },
        [dispatch]
    );

    const isLoading = useSelector((state: State): boolean => state.isLoading);
    const errorMessage = useSelector(
        (state: State): string | null => state.errorMessage
    );
    const totalCount = useSelector((state: State): number => state.totalCount);
    const page = useSelector((state: State): number => state.page);
    const repositoriesCards = useSelector(
        (state: State): Repository[] => state.repositoriesCards
    );

    const pageCount = useSelector((state: State): number => state.pageCount);

    // Вопрос: Типы со звездочкой тоже надо типизировать в store/actions?
    const onPageChange = useCallback(
        (e, page) => {
            dispatch({ type: '*SET_PAGE', payload: { page } });
        },
        [dispatch]
    );

    const getSadMessage = () => {
        if (page == 100)
            return (
                <Typography color="red">
                    Гитхаб больше не разрешает :(
                </Typography>
            );
        return null;
    };

    const TOP_HEIGHT = 120;
    const PAGINATION_HEIGHT = 50;
    const SAD_MESSAGE_HEIGHT = 20;
    const CARDS_PADDING = 20;
    // const [topHeight, setTopHeight] = useState(TOP_HEIGHT);
    const topHeight = 250;

    // useEffect(() => {
    //     const paginationHeight = pageCount > 0 ? PAGINATION_HEIGHT : 0;
    //     const sadMessageHeight = page == 100 ? SAD_MESSAGE_HEIGHT : 0;

    //     setTopHeight(TOP_HEIGHT + paginationHeight + sadMessageHeight);
    // }, [pageCount, page]);

    return (
        <Container
            sx={{ my: 4, paddingTop: `${topHeight + CARDS_PADDING}px` }}
            maxWidth="sm"
        >
            {
                // ВОПРОС: Нужно <Card> оборачивать в <Box> ?
                // Со стилями я не стал заморачиваться и просто записал их везде прямо в компоненте. Какой подход стоит использовать в реальных проектах?
            }
            <Card
                sx={{
                    my: 2,
                    padding: '10px',
                    position: 'fixed',
                    width: '530px',
                    backgroundColor: '#fff',
                    zIndex: 9,
                    height: topHeight,
                    top: 0,
                }}
            >
                <TextField
                    value={q}
                    onChange={onQChange}
                    helperText="Введи название репозитория"
                    label="Поиск"
                    fullWidth
                />
                <h3>Найдено репозиториев: {totalCount}</h3>

                <BasePagination
                    pageCount={pageCount}
                    page={page}
                    onPageChange={onPageChange}
                />

                {page == 100 ? (
                    <Typography color="red">
                        Гитхаб больше не разрешает :(
                    </Typography>
                ) : null}
            </Card>

            <RepositoryCardList
                isLoading={isLoading}
                repositoriesCards={repositoriesCards}
            />

            {errorMessage ? (
                <Typography color="red">Ошибка: {errorMessage}</Typography>
            ) : null}
        </Container>
    );
}

export default App;

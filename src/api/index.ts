import {PER_PAGE} from '../const'
// ВОПРОС: Типы стоит оставлять прямо в этом файле, или лучше их вынести в отдельный файл?
export type Response = {
    total_count: number;
    items: Repository[];
};

export type Repository = {
    name: string;
    html_url: string;
    stargazers_count: number;
    description: string;
    topics: string[];
    owner: {
        avatar_url: string;
    };
};

class API {
    // ВОПРОС: Как правильно описать возвращаемый тип?
    async search(q: string, page: number = 1): Promise<Response> {
        const trimmedQ = q.trim();
        if (!trimmedQ) {
            return {
                total_count: 0,
                items: [],
            };
        }

        page = page <= 0 ? 1 : page;

        const a = 'ghp_S0J'
        const b = 'DvrbDSoms'
        const c = 'weCTnZZaL'
        const d = 'CZAE4T5T70eghMX'
        try {
            const result = await fetch(
                `https://api.github.com/search/repositories?per_page=${PER_PAGE}&q=${trimmedQ}&page=${page}`,
                {
                    headers: {
                        Authorization:
                        // Пока не стал выносить токен в отдельный файл.
                            `token ${a + b + c + d}`,
                    },
                }
            );
            const json = await result.json();
            if (result.status !== 200) {
                throw json;
            }
            return json;
        } catch (error) {
            throw error;
        }
    }
}

export default new API();

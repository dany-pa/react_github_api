import { Box } from "@mui/material";
import { Repository } from "../api";
import CardSkeleton from "./CardSkeleton";
import RepositoryCard from "./RepositoryCard";

function RepositoryCardList(props: {isLoading: boolean, repositoriesCards: Repository[]}){
    return (
        <Box>
            {
            props.isLoading  
            ? <CardSkeleton />
            : props.repositoriesCards.map((card: Repository, index: number) => (
                <RepositoryCard
                    name={card.name}
                    html_url={card.html_url}
                    avatar_url={card.owner.avatar_url}
                    stargazers_count={card.stargazers_count}
                    description={card.description}
                    topics={card.topics}
                    key={index}
                />
                ))
            }
        </Box>
    )
}

export default RepositoryCardList
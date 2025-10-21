
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import { getTrendingThisWeekMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const TrendingThisWeekPage = () => {
    const {data: movies, isLoading, error} = useQuery({
        queryKey: ["trendingThisWeekMovies"],
        queryFn: getTrendingThisWeekMovies
    });

    if (isLoading) return <Spinner />;
    if (error) return <p>Something Went wrong: {error.message}</p>

    const toDo = () => true;

    return (
        <PageTemplate 
          title="Trending This Week"
          movies={movies}
          action={toDo}
        />
    );
};

export default TrendingThisWeekPage;
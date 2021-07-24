import Item from "./Item"

const Movies = ({movies}) => {
    return (
        <div id='moviesSection'>
          {movies.map(movie => (
            <Item movie={movie} key={movie.id} />
          ))}
        </div>
    )
}
export default Movies
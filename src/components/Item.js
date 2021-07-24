const Item = ({movie}) => {
    const imgPath = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className='movie'>
            <img src={imgPath + movie.poster_path} alt="" />
            <h4>{movie.title}</h4>
            <h4>RATING: {movie.vote_average}/{movie.vote_count} (vote count)</h4>
            <h4>Release date: {movie.release_date}</h4>
        </div>
    )
}
export default Item
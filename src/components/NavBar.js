const NavBar = (props) => {
    return (
        <div id="container">
            <h1>Movie</h1>
            <form id="form">
                <input 
                    value={props.value}
                    onChange={(event) => props.setSearch(event.target.value)}
                    type="text" 
                    id="search"  
                    placeholder="Enter a movie" 
                    >
                </input>
            </form>
        </div>
    )
}
export default NavBar
import classes from "../../styles/home/search_bar.module.css"

function SearchBar(props: any) {
    return <div className={classes.container}>
        <input placeholder="Search for anything..." className={classes.searchBar} type="text" spellCheck="false" />
        <button className={classes.searchButton}>
            Search
        </button>
    </div>
}


export default SearchBar;
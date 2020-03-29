import React,{useState} from 'react';
import Nav from "./components/Nav";
import SearchBox from "./components/SearchBox";
import './index.css'
import MovieLists from './components/MovieLists'
import $ from 'jquery'


//const apiKey="http://www.omdbapi.com/?i=tt3896198&apikey=165bbc9b";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={};


        this.performSearch("")

    }

performSearch(searchTerm){
        const urlString ='https://api.themoviedb.org/3/search/movie?api_key=b906337d1552ee7c39e869eafd4cde73&query='+ searchTerm;

$.ajax({
url:urlString,
    success:(searchResults) =>{
    console.log("Feteched succesfully");
    console.log(searchResults);
    const results = searchResults.results
        //console.log(results[0])
    const movieRows = [];

        results.forEach((movie) =>{
           // console.log(movie.title);
            //console.log(movie.poster_path)
           // console.log(movie.id)
            const movieRow =   <MovieLists key={movie.id}
                                           id={movie.id}

                                           movie={movie}/>
            movieRows.push(movieRow);
        })

        this.setState({rows:movieRows})
    },
    error:(xhr,status,err) =>{
    console.error("Failed to fetch");
    }
})
}

searchChange(e){
        console.log(e.target.value);
        const searchTerm = e.target.value;
        this.performSearch(searchTerm);
}


    render() {


        return (
            <div className="App">
                <Nav/>
                <SearchBox
                    // searchItem={this.state.searchItem}
                        searchChange={this.searchChange.bind(this)}
                   />


                {this.state.rows}


            </div>
        );

    }
}

export default App;

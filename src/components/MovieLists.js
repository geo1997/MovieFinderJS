import React from 'react'
import Movie from "./Movie";


const MovieLists = (props) =>{
 return(
     <div className="container">
         <div className="card -content grey lighten-4 -panel hoverable" >
         <div className="row">
             <div className="col s12">

                     <Movie key ={props.movie.id} image={props.movie.poster_path}
                     title={props.movie.title} overview={props.movie.overview}
                            id={props.movie.id}
                            rel_date={props.movie.release_date}
                     pop={props.movie.popularity}/>
                <td>
                    <h2>
                        {props.movie.title}
                    </h2>

                    <p>{props.movie.overview}</p>
                </td>


            </div>
             </div>
         </div>

     </div>
 )




}

export default MovieLists;
import React from "react";
import '../card.css'
import '../hover'


class Movie extends React.Component {


    viewMovie()
    {

        const url = "https://www.themoviedb.org/movie/" + this.props.id;

        window.location.href = url;
    }

    render() {


        return (


            <div className="col s12 m6 l3">

                <div className="card">


                    <div className="card-image waves-effect waves-block waves-dark">
                        {
                            this.props.image == null ?
                                <img className="activator"
                                     src={'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6'}
                                     alt="card image"
                                     style={{width: "100%", height: 300}}/>
                                :
                                <img className="activator" src={`http://image.tmdb.org/t/p/w185${this.props.image}`}
                                     alt="card image"
                                     style={{width: "100%", height: 300}}/>
                        }
                    </div>
                    <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{this.props.title}<i
                    className="material-icons right">more_vert</i></span>

                        <p><a onClick={this.viewMovie.bind(this)} >More Details</a></p>
                    </div>
                    <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{this.props.title}<i
                    className="material-icons right">close</i></span>
                        <h4>Release Date</h4>
                        <p>{this.props.rel_date}</p>
                        <h4>Popularity</h4>
                        <p>{this.props.pop}</p>
                    </div>

                </div>


            </div>


        )


    }
}

export default Movie;
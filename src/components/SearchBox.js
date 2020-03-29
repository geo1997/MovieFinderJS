import React from "react";


const SearchBox = (props) => {

    const {handleSubmit,searchChange,searchItem} = props;


    return(
        <div className={"container"} style={{marginTop:30}}>
            <div className={"row"}>
                <section className={"col s8  offset-s2 "}>
                    <div className="card-panel hoverable">

                        <div className={"input-field"}>
                            <input placeholder="search movie" type="text" onChange={searchChange} onKeyPress={handleSubmit}  />

                        </div>


                    </div>

                </section>


            </div>


        </div>

    )



};

export default SearchBox;
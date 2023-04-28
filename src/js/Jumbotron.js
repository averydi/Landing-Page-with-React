import React from 'react';

function Jumbotron(){
    return <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">Is Lord of the Rings the best trilogy ever made?</p>
            <hr className="my-4"></hr>
            <p>“It’s a dangerous business, Frodo, going out your door. You step onto the road, and if you don’t keep our feet, there’s no knowing where you might be swept off to.” –Bilbo Baggins</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Read more</a>
        </div>    
    </div>
}

export default Jumbotron;
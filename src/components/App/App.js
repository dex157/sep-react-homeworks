import React, { Component } from 'react';

class App extends Component {
    render(){
        return(
            <div className="App">
                <p className="description">
                    Миру-мир, студентам - beer.
                </p>
            </div>
        );
    }
}


// // 1. Расширить класс Component

// class HelloWorld extends React.Component {
//     render() {
//         return <div>Hello!</div>;
//     }
// }

// // 2. Расширить класс PureComponent
// class HelloWorld extends React.PureComponent {
//     render() {
//         return <div>Hello!</div>;
//     }
// }

// // 3. Написать функцию возвращающую jsx

// function HelloWorld() {
//     return <div>Hello!</div>
// }

export default App;
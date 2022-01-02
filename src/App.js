import {Component} from 'react';
import './App.css';

const Header = () => {
    return <h2>Header</h2>
};

// const Field = () => {
//     const holder = 'Type';
//     const styledField = {
//         width: '300px',
//         lineHeight: '30px',
//         paddingLeft: '10px',
//         paddingRight: '10px'
//     };
//     return <input
//         type="text"
//         placeholder={holder}
//         style={styledField}/>
// }

class Field extends Component {
    render() {
        const holder = 'Type';
        const styledField = {
            width: '300px',
            lineHeight: '30px',
            paddingLeft: '10px',
            paddingRight: '10px'
        };

        return <input
                type="text"
                placeholder={holder}
                style={styledField}/>
    }
}

function Btn() {
    const text = 'Start';
    // const res = () => {
    //     return 'GO!'
    // };
    const p = <span>LogIn</span>;
    const logged = true;
    return <button>{logged ? text : p}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;

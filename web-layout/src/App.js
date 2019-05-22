import React, {Component} from 'react';
import './App.css';
import data from './data'
import Header from './Header'
import Footer from './Footer'
import Middle from './Middle'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: data,
      index: 0
    }
  }
//   function repeat(props) {
//   if(this.state.index === this.state.data.length) {
//     return this.state.data[0]
//   }
// }
render() {
    return(
      <div className='App'>
      <Header />
      <Middle data={this.state.data} index={this.state.index} />
      <Footer data={this.state.data} index={this.state.index} />
      <button id='prev' onClick={() => this.setState({index: this.state.index - 1})}><strong><i className='arrow'/>Previous</strong></button>
      <button id='next' onClick={() => this.setState({index: this.state.index + 1})}><strong>Next<i id='arrow'/></strong></button>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import BuscaCep from './components/BuscaCep';
import Card from './components/Card';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Busca CEP',
      cep: '',
    };

    this.setCepInputValue = this.setCepInputValue.bind(this);
  }

  render() {
    return(
      <div className="row">
        <Card title="Busca CEP">
          <BuscaCep cep={this.state.cep}>
            <div className="form-group">
              <input type="text" value={this.state.cep} onChange={this.setCepInputValue} maxLength={8} placeholder="Digite o CEP..."/>
            </div>
          </BuscaCep>
        </Card>
      </div>
    );
  }

  setCepInputValue(e) {
    this.setState({cep: e.target.value})
  }
}

export default App;
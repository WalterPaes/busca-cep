import React, { Component } from 'react';
import Table from '../Table';

class BuscaCep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: {
                logradouro: '',
                bairro: '',
                localidade: '',
                uf: '',
            },
            success: false,
            loading: false,
        };

        this.buscaCep = this.buscaCep.bind(this);
        this.setSuccess = this.setSuccess.bind(this);
        this.setLoading = this.setLoading.bind(this);
    }

    render() {
        return(
            <div>
                {this.state.loading === true &&
                    <p>Carregando...</p>
                }
                {this.props.children}
                <button className="btn btn-sm btn-primary" onClick={this.buscaCep}>Buscar</button>
                
                {this.state.success === true &&
                    <Table data={this.state.address}></Table>
                }
            </div>
        );
    }

    buscaCep() {
        this.setLoading(true);

        let url = "https://viacep.com.br/ws/"+ this.props.cep +"/json/"
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            this.setLoading(false);
            this.setSuccess(true);
            this.setState({
                address: {
                    logradouro: json.logradouro,
                    bairro: json.bairro,
                    localidade: json.localidade,
                    uf: json.uf,
                }
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    setSuccess(status) {
        this.setState({success: status});
    }

    setLoading(status) {
        this.setState({loading: status});
    }
}

export default BuscaCep;
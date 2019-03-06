import React, {Component} from 'react';

import './landingPage.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { bitcoinValue: 0 };
  }

  componentDidMount() {
    this.callApi()
      .then((res) => {
        this.setState({ bitcoinValue: res });
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('https://blockchain.info/tobtc?currency=eur&value=1');
    const data = await response.json();
    return data;
  };

  render() {
    return (
      <div>
        <p className={'text'}>
          1 euro is :<span className={'value'}>{ this.state.bitcoinValue }</span>bitcoin
        </p>
        <p className={'text'}>
          1 bitcoin is :<span className={'value'}>{ 1 / this.state.bitcoinValue  }</span>euros
        </p>
      </div>
    );
  }
}

export default LandingPage;
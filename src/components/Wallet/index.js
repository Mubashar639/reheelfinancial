import React from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import Selector from '../Selector';
import Tokens from './Tokens';
import Wrap from './Wrap';
import './styles.scss';

const OPTIONS = [
  { value: 'tokens', name: 'Tokens' },
  { value: 'wrap', name: 'Wrap' },
  { value: 'unwrap', name: 'Unwrap' }
];

class Wallet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedAccountID: OPTIONS[0].value
    };
  }

  render() {
    const { selectedAccountID } = this.state;
    return (
      <div>
        <div className="title flex justify-content-between align-items-center"id="walletTokenWrap"  style={{boxShadow:"black 0px 4px 4px",zIndex:400}} >
          {/* <div style={{boxShadow:"black 4px 4px 4px", zIndex:"100",flexDirection:"row", justifyContent:"space-between"}}> */}
          <div  >Wallet</div>
          <Selector
            options={OPTIONS}
            selectedValue={selectedAccountID}
            handleClick={option => {
              this.setState({ selectedAccountID: option.value });
            }}
          />
          </div>
        {/* </div> */}
        <div className="flex-column flex-1 position-relative overflow-hidden" style={{color:"rgba(255,255,255,.7)"}} ref={ref => this.setRef(ref)}>
          {this.renderTabPanel()}
        </div>
      </div>
    );
  }

  renderTabPanel() {
    const { selectedAccountID } = this.state;
    switch (selectedAccountID) {
      case 'tokens':
        return <Tokens />;
      case 'wrap':
        return <Wrap type="wrap" />;
      case 'unwrap':
        return <Wrap type="unwrap" />;
      default:
        return <Tokens />;
    }
  }

  setRef(ref) {
    if (ref) {
      this.ps = new PerfectScrollbar(ref, {
        suppressScrollX: true,
        maxScrollbarLength: 20
      });
    }
  }
}

export default Wallet;

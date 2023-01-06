import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import inputMask from 'simple-keyboard-input-mask';
import 'react-simple-keyboard/build/css/index.css';
import './index.css';

class Numpad extends Component {
  state = {
    layoutName: 'default',
    input: '',
  };

  onChange = input => {
    this.props.onFilterChange(input);
    this.setState({
      input: input,
    });
  };

  onKeyPress = button => {
    /**
     * If you want to handle the shift and caps lock buttons
     */
    //if (button === "{shift}" || button === "{lock}") this.handleShift();

    const inputValue = this.state.input;

    if (button === '{call}') {
      this.props.onCallBtnPress(inputValue);
      this.keyboard.clearInput();
      return;
    }
    if (button === '{save}') {
      this.props.onSaveBtnPress(inputValue);
      this.keyboard.clearInput();
      return;
    }
  };

  handleShift = () => {
    let layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === 'default' ? 'shift' : 'default',
    });
  };

  onChangeInput = event => {
    let input = event.target.value;
    this.props.onFilterChange(input);
    this.setState(
      {
        input: input,
      },
      () => {
        this.keyboard.setInput(input);
      }
    );
  };

  inputStyle = {
    width: '100%',
    height: '100px',
    padding: '10px',
    fontSize: 20,
    border: 0,
  };

  render() {
    return (
      <div>
        <input
          readOnly="readonly"
          value={this.state.input}
          style={this.inputStyle}
          placeholder={'(99) 9999-9999'}
          onChange={e => this.onChangeInput(e)}
        />
        <Keyboard
          keyboardRef={r => (this.keyboard = r)}
          theme={'hg-theme-default hg-layout-numeric numeric-theme'}
          layoutName={this.state.layoutName}
          onChange={input => this.onChange(input)}
          onKeyPress={button => this.onKeyPress(button)}
          disableCaretPositioning={true}
          display={{
            '{call}': 'CALL',
            '{save}': 'SAVE',
            '{bksp}': 'backspace',
          }}
          layout={{
            default: [
              '{call} {save} {bksp}',
              '1 2 3',
              '4 5 6',
              '7 8 9',
              '* 0 #',
            ],
            shift: ['! / #', '$ % ^', '& * (', '{shift} ) +', '{bksp}'],
          }}
          inputMask={'(99) 9999-9999'}
          modules={[inputMask]}
        />
      </div>
    );
  }
}

export default Numpad;

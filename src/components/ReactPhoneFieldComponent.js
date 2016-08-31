'use strict';

import React from 'react';
import ReactPhoneInput from 'react-phone-input';
import classNames from 'classnames';

require('styles//ReactPhoneField.css');

class ReactPhoneFieldComponent extends ReactPhoneInput {
  constructor(props) {
    super(props);
    this._makeBlue = this._makeBlue.bind(this);
  }
  _makeBlue(element){
    return React.cloneElement(element, this._renderChildrenProps());
  }

  _renderChildrenProps(){
    let inputClasses = classNames({
      'invalid-number': !this.props.isValid(this.state.formattedNumber.replace(/\D/g, ''))
    });
    return {
      onChange: this.handleInput,
      onClick: this.handleInputClick,
      onFocus: this.handleInputFocus,
      onKeyDown: this.handleInputKeyDown,
      value: this.state.formattedNumber,
      ref: 'numberInput',
      type: 'tel',
      className: inputClasses
    }
  }
  _renderChildren(){
    if(Array.isArray(this.props.children)){
      return React.cloneElement(this.props.children[0], this._renderChildrenProps());
    }
    return React.cloneElement(this.props.children, this._renderChildrenProps());
  }
  render() {
    let arrowClasses = classNames({
      'arrow': true,
      'up': this.state.showDropDown
    });

    let flagViewClasses = classNames({
      'flag-dropdown': true,
      'open-dropdown': this.state.showDropDown
    });

    let inputFlagClasses = `flag ${this.state.selectedCountry.iso2}`;

    return (
      <div className="react-tel-input">
      {this._renderChildren()}
        <div ref="flagDropDownButton" className={flagViewClasses} onKeyDown={this.handleKeydown} >
          <div
            ref='selectedFlag'
            onClick={this.handleFlagDropdownClick}
            className='selected-flag'
            title={`${this.state.selectedCountry.name}: + ${this.state.selectedCountry.dialCode}`}>
            <div className={inputFlagClasses}>
              <div className={arrowClasses}></div>
            </div>
          </div>
          {this.state.showDropDown ? this.getCountryDropDownList() : ''}
        </div>
      </div>
    );
  }

}
window.console.log(ReactPhoneFieldComponent);

ReactPhoneFieldComponent.displayName = 'ReactPhoneFieldComponent';

// Uncomment properties you need
// ReactPhoneFieldComponent.propTypes = {};
// ReactPhoneFieldComponent.defaultProps = {};

export default ReactPhoneFieldComponent;

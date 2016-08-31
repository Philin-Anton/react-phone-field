import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactPhoneField from './components/ReactPhoneFieldComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';

import TextField from 'material-ui/TextField';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main component into the dom
ReactDOM.render(
  <MuiThemeProvider>
    <form>
    <ReactPhoneField defaultCountry={'us'}>
    {/*<TextField
     floatingLabelText="Floating Label Text"
     floatingLabelFixed={true}
     style={{paddingLeft: '44px'}}
     fullWidth={true}
     />*/}
      <input/>
    </ReactPhoneField>
    </form>
  </MuiThemeProvider>, document.getElementById('app'));

import './index.scss';

import React, { Component } from 'react';

import SearchInput from 'grommet/components/SearchInput';

import Form from 'grommet/components/Form';

import FormField from 'grommet/components/FormField';

import Box from 'grommet/components/Box';

const VALUES = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

export default class Main extends Component {

  constructor () {
    super();
    this._onDOMChange = this._onDOMChange.bind(this);
this._onSelect = this._onSelect.bind(this);
this.state = { value: VALUES[0], suggestions: VALUES };

  }

  _onDOMChange (event) {
   const regexp = new RegExp('^' + event.target.value);
   const suggestions = VALUES.filter(val => regexp.test(val));
   this.setState({value: event.target.value, suggestions: suggestions});
 }

   _onSelect (pseudoEvent) {
     this.setState({value: pseudoEvent.suggestion, suggestions: VALUES});
   }

  render () {

    return (
      <Box>
        <Form>
          <FormField>
            <SearchInput id="item1" name="item-1" value={this.state.value} onDOMChange={this._onDOMChange}
              onSelect={this._onSelect}
                value={this.state.value} suggestions={this.state.suggestions} />
          </FormField>
        </Form>
      </Box>
    );
  }
};

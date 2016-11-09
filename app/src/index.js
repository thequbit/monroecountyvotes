import './index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';

import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

import Home from './containers/Home';

import Sample from './containers/Sample';

import CopyrightBar from './components/CopyrightBar';

class Main extends Component {
  render () {
    return (
      <App centered={false}>
        <Box full={true}>
          <Header direction="row" justify="between"
            pad={{horizontal: 'medium'}}>
            <Title>App</Title>
          </Header>

          <Tabs>
            <Tab title="Home">
              <Home />
            </Tab>

            <Tab title="Sample">
              <Sample />
            </Tab>
          </Tabs>


          <CopyrightBar message={"Made with <3 at RIT"}/>

        </Box>
      </App>
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');

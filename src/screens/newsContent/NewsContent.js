import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

class NewsContent extends Component {
  constructor(props) {
    super(props);
  }

  renderLoading(){
    <ActivityIndicator/>
  }

  render() {

    const {navigation} = this.props;

    return (
      <View style={{flex:1}}>
          <WebView
            source={{uri:navigation.getParam('url')}}
            renderLoading={this.renderLoading()}
            startInLoadingState
          />
      </View>
    );
  }
}

export default NewsContent;

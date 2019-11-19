import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import HeadlinesModel from '../../models/headlines_model';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines:''
    };
  }

  componentDidMount(){
    setTimeout(() => {
      HeadlinesModel.TopHeadlines(this.headlinesCallback.bind(this))
    }, 2000);
  }

  headlinesCallback(data){
    if (data.status === 'error') {
      // alert('Something went wrong :(')
      Alert.alert(
        'Error',
        'Something went wrong...',
        [
          {text: 'OK', onPress:() => console.log('alert closed')}
        ]
      )
    } else {
      this.setState({headlines: data}, () => {
        alert(JSON.stringify(data))
      })
    }
  }

  render() {
    return (
      <View>
        <Text> {this.state.headlines ? 'Hello' : 'Loading ...'} </Text>
      </View>
    );
  }
}

export default Home;

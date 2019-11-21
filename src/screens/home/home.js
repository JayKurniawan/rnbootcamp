import React, { Component } from 'react';
import { View, Text, Alert, FlatList, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import HeadlinesModel from '../../models/HeadlinesModel';
import List from '../../reusable/List';

const {height} = Dimensions.get('screen');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      headlines:[]
    };
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({loading: true}, ()=> {
        HeadlinesModel.TopHeadlines(this.headlinesCallback.bind(this))
      })
    }, 1000);
  }

  headlinesCallback(data){
    if (data.status === 'error') {
      Alert.alert(
        'Error',
        'Something went wrong: ' + data.message,
        [
          {text: 'OK', onPress:() => this.setState({loading: false})}
        ]
      )
    } else {
      setTimeout(() => {
        this.setState({loading: false, headlines:data.articles})
      }, 1000);
    }
  }

  // renderItem = ({ item }) => <List item={item} navigation={this.props.navigation}/>
  renderItem = ({item}) => <List item={item} navigation={this.props.navigation}/>

  render() {
    return (
      <View style={{flex:1}}>
        {this.state.loading ? 
          <View style={styles.loading}>
            <ActivityIndicator/>
          </View>
        : 
          <FlatList
            data={this.state.headlines}
            renderItem={this.renderItem}
            keyExtractor={item => item.title}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading:{
    height:height,
    alignItems:'center',
    justifyContent:'center',
    flex:1
  }
});

export default Home;

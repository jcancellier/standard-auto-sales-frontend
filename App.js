import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SearchBar from 'react-native-searchbar';

const vehicles = [
  {
    id: 1,
    make: 'Ford',
    model: 'Focus'
  },
  {
    id: 2,
    make: 'Toyota',
    model: 'Camry'
  },
  {
    id: 3,
    make: 'Ford',
    model: 'Mustang'
  },
  {
    id: 4,
    make: 'Toyota',
    model: 'Corolla'
  },
  {
    id: 5,
    make: 'Volvo',
    model: 'XC90'
  }
];

export default class App extends React.Component {
  state = {
    results: [],
    searchVisible: false
  }

  _toggleSearch = () => {
    this.setState({ searchVisible: true }, () => {
      this.searchBar.show();
    });
  }

  _untoggleSearch = () => {
    this.setState({ searchVisible: false }, () => {
      this.searchBar.hide();
      this.setState({ results: [] })
    });
  }


  _handleResults = (results) => {
    this.setState({ results });
  }

  _renderList = () => {
    return this.state.results.map(item => {
      console.log(item);
      return <Text key={item.id}>{`${item.make} ${item.model}`}</Text>
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={vehicles}
          handleResults={this._handleResults}
          showOnLoad
          onSubmitEditing={this._untoggleSearch}
          animate={false}
          heightAdjust={0}
        />
        <View style={{marginTop: 40}}>
          <Button title="Search" onPress={this._toggleSearch} />
          {this._renderList()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});

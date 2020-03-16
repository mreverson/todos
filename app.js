import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, FlatList, Keyboard, Switch} from 'react-native';
import Header from './header';
import Footer from './footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allComplete: false,
      value: '',
      todos: [],
      isLoading: false,
    };
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
  }

  handleToggleAllComplete() {
    const complete = !this.state.allComplete;
    const newTodos = this.state.todos.map(todo => ({
      ...todo,
      complete,
    }));
    this.setState({
      todos: newTodos,
      allComplete: complete,
    });
  }
  handleToggleComplete(key, complete) {
    const newTodos = this.state.todos.map(todo => {
      if (todo.key !== key) {
        return todo;
      }
      return {
        ...todo,
        complete,
      };
    });
    this.setState({
      newTodos: newTodos,
    });
  }
  handleAddItem() {
    if (!this.state.value) {
      return;
    }
    const newTodos = [
      ...this.state.todos,
      {
        key: Date.now(),
        text: this.state.value,
        complete: false,
      },
    ];
    this.setState({
      todos: newTodos,
      value: '',
    });
  }
  renderRow(todos) {
    return (
      <View>
        <View style={styles.rowContainer}>
          <Switch
            value={todos.complete}
            onValueChange={this.state.onComplete}
          />
          <View style={styles.textWrap}>
            <Text style={[styles.text, todos.complete && styles.complete]}>
              {todos.text}
            </Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          value={this.state.value}
          onAddItem={this.handleAddItem}
          onChange={value => this.setState({value})}
          onToggleAllComplete={this.handleToggleAllComplete}
        />
        <View style={styles.content}>
          <FlatList
            style={styles.list}
            data={this.state.todos}
            renderItem={({item: todos}) => this.renderRow(todos)}
            keyExtractor={(item, index) => index.toString()}
            onScroll={() => Keyboard.dismiss()}
          />
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    ...Platform.select({
      ios: {paddingTop: 30},
    }),
  },
  content: {
    flex: 1,
  },
  list: {
    backgroundColor: '#FFF',
  },
  separator: {
    borderWidth: 1,
    borderColor: '#f5f5f5',
  },
  rowContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 24,
    color: '#4d4d4d',
  },
  textWrap: {
    flex: 1,
    marginHorizontal: 10,
  },
  complete: {
    textDecorationLine: 'line-through',
  },
});

export default App;

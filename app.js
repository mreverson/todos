import React, {Component} from 'react';
import {View, StyleSheet, Platform, FlatList, Keyboard} from 'react-native';
import Header from './header';
import Footer from './footer';
import Row from './row';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allComplete: false,
      value: '',
      todos: [],
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
      todos: newTodos,
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
      <Row
        key={todos.key}
        text={todos.text}
        complete={todos.complete}
        onComplete={complete => this.handleToggleComplete(todos.key, complete)}
      />
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
});

export default App;

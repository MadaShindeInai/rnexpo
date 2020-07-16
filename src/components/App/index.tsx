import React, {FC, useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import Navbar from '../Navbar';
import FormAdd from '../FormAdd';
import TodoItem from '../TodoItem';

type TodoItemsType = {
  id: string;
  title: string;
};
type RenderItemType = {
  item: TodoItemsType;
  index: number;
};

const App: FC<any> = () => {
  const [todoItems, setTodoItems] = useState<TodoItemsType[]>([]);

  const addTodoItem = (title: string) => {
    const newItem = {
      id: Date.now().toString(),
      title,
    };
    setTodoItems((oldTodoItems) => [...oldTodoItems, newItem]);
  };

  const renderItem = ({item, index}: RenderItemType) => (
    <TodoItem item={item} index={index} />
  );

  return (
    <>
      <Navbar title="P cool TODO app" />
      <View style={styles.container}>
        <FormAdd addTodoItem={addTodoItem} />
        <FlatList
          style={styles.todosContainer}
          data={todoItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Navbar title="That`s awesome footer!" />
    </>
  );
};

export default App;

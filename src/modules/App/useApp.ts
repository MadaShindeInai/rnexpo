import {useState} from 'react';
import {Alert} from 'react-native';
import {TodoItemsType} from 'types';

const useApp = () => {
  const [todoItems, setTodoItems] = useState<TodoItemsType[]>([
    {
      id: '1',
      title: 'Hye-hye',
    },
  ]);
  const [todoId, setTodoId] = useState<string | null>('1');

  const addTodoItem = (title: string) => {
    const newItem = {
      id: Date.now().toString(),
      title,
    };
    setTodoItems((oldTodoItems) => [...oldTodoItems, newItem]);
  };

  const currentTodo = todoItems.find((item) => item.id === todoId);

  const deleteTodoItem = (id: string) => {
    Alert.alert(
      'Item Deletion:',
      `Do you really want to delete ${currentTodo?.title}?`,
      [
        {
          text: 'No!',
          style: 'cancel',
        },
        {
          text: 'Sure',
          style: 'destructive',
          onPress: () => {
            setTodoItems((oldTodoItems) =>
              oldTodoItems.filter((item) => item.id !== id),
            );
            setTodoId(null);
          },
        },
      ],
      {cancelable: false},
    );
  };

  return {
    deleteTodoItem,
    addTodoItem,
    todoItems,
    todoId,
    setTodoId,
    currentTodo,
  };
};

export default useApp;

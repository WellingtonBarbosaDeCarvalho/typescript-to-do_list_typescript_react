import { useState } from 'react';
import * as C from './App.styles';
import ListItem from './components/list';
import { Item } from './types/item';
import AddList from './components/addList';

function App() {
  const [list, setList] = useState<Item[]>([]);

  function addTaskList(taskName: string) {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    })
    setList(newList);
  };

  function effectDone(id: number, done: boolean) {
    const newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>To-do List</C.Header>
           <AddList onEnter={addTaskList} />
           {list.map((tarefa, i) => (
              <ListItem
                key={i}
                item={tarefa}
                onChange={ effectDone }
              />
           ))}
      </C.Area>
    </C.Container>
  )
}

export default App

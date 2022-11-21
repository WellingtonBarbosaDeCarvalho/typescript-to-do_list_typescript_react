import { useState, KeyboardEvent } from 'react';
import * as C from './addList';

type Props = {
  onEnter: (taskName: string) => void
}

function AddList({ onEnter }: Props) {
  const [inputText, setInputText] = useState('');
  function handleKeyUp(e: KeyboardEvent) {
    if(e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  };

  return (
    <C.Container>
      <div className="image">
        ➕
        <input
          type="text"
          placeholder="adicione uma tarefa"
          value={inputText}
          onChange={ ({ target: { value } }) =>  setInputText(value)}
          onKeyUp={ handleKeyUp }
          id=""
        />
      </div>
    </C.Container>
  )
}

export default AddList;

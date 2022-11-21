import * as C from './list';
import {Item} from '../../types/item';
import { useState } from 'react';

type Props = {
  item: Item,
  onChange: (id: number, done: boolean) => void,
}

function ListItem({item, onChange}: Props) {
  const [isChecked, setIsChecked] = useState(item.done)

  return (
    <C.Container done={ isChecked }>
      <input
        checked={ isChecked }
        type="checkbox" name="done"
        id="done"
        onChange={({ target: { checked } }) => {
          setIsChecked(!isChecked ? true : false);
          onChange(item.id, checked);
        }}
        className={ isChecked ? 'completed' : '' }
      />
      <label htmlFor="">{item.name}</label>
    </C.Container>
  )
}

export default ListItem;

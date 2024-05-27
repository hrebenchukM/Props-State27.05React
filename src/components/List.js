import React from 'react';

function ListItem(props )//длокальній компонент
{
  return <li>{props.value}</li>
}

export function List (props)//єкспортируемій компонент
 {
  return (
    <ul>{
      props.items.map(item => <ListItem value={item}/>)//items из App.js//map каждій єлемент передается в ListItem
    }</ul>
  );
}

function Item(props) 
{
    return (
      <li className="item">
        {props.name} {props.isPacked ? '✔' : '❌'}
      </li>
    );
  }
  
  export function PackingList() {//формирование списка без map
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item isPacked={true} name="Space suit" />
          {/* //статическая инфа єто пльохо */}
          <Item isPacked={true} name="Helmet with a golden leaf" />
          <Item isPacked={false} name="Photo of Tam" />
        </ul>
      </section>
    );
  }
  
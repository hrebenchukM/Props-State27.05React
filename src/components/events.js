import {React} from 'react';
export function PrintButton(props)
 {
              
    function print(){
        console.log(`Name ${props.name}  Age: ${[props.age]}`);
   }

    return <div> 
                <button onClick={() => print()}>Print </button>
               </div>;
}

export function ShowUser(props)
{
    return <div>
        <p>{props.name}  {props.age}</p>
    </div>
}


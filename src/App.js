import React from 'react';
import './App.css';
import { ClickCounter } from './components/ClickCounter';
import { List } from './components/List';
import { PrintButton,ShowUser } from './components/events';
import { State1,ClickButton } from './components/state';
import { PackingList } from './components/list2';
import { SignUpDialog } from './components/state2';
import { SignUpDialog2 } from './components/HWstate2';
const numbers = [1,2,3,4,5];



const products = [
  { name: 'Laptops', img: 'planshety.png' },
  { name: 'Computers', img: 'kompyutery.png'},
  { name: 'Monitors', img: 'monitory.png'},
  { name: 'Gaming', img: 'tovary-dlya-gejmerov.png' },
  { name: 'Tablets', img: 'planshety.png' },
  { name: 'Cables & Adapters', img: 'kabeli-i-perekhodniki.png' },
  { name: 'Computer Parts', img: 'kompyuternye-komplektuyushchie.png', description: 'SSD,Системи охолодження,Відеокарти,Оперативна память,Процесори,Материнські плати,Жорсткі диски, Блоки живлення' },
  { name: 'Networking Equipment', img: 'setevoe-oborudovanie.png' ,description: 'Маршрутизатори,Комутатори,Мережеві адаптери,Пасивне мережеве обладнання,Точки доступу Wi-Fi,Ретранслятори Wi-Fi сигналу,Патч-корди'},
  { name: 'Headphones', img: 'naushniki-i-aksessuary.png', description: 'Навушники,TWS,Ігрові гарнітури,Вакуумні навушники,Навушники вкладиші,Накладні навушники,Повнорозмірні навушники,Підсилювачі для навушників,Аксесуари для навушників' },
  { name: 'Keyboard & mouse', img: 'klaviatury-i-myshi.png' ,description: 'Компютерні миші,Килимки для миші, Клавіатури, Комплекти клавіатури та миші,Аксесуари для клавіатур та мишок'},
  { name: 'Accessories', img: 'aksessuari-dlia-elektronyky.png', description: 'USB флешки,Хаби і кардридери,Аксесуари для ПК і ноутбуків,Комплектуючі для ноутбуків,Мережеві фільтри, Чохли та клавіатури для планшетів, Сумки, рюкзаки та чохли для ноутбукі, Очисні засоби' },
  { name: 'Printers', img: 'ofisnaya-tekhnika.png' ,description: 'Принтери і БФП, Сканери, Витратні матеріали для принтерів, Дошки, фліпчарти'},

];


function App() {
  return (
    <div className="App">
      <header className="App-header">


       {/* <ShowUser name='Oleg' age={20}/>
       <ShowUser name='Ivan' age={26}/> */}


        {/* <List items={numbers} />
        <List items={[2,4,1,6,8,10]} /> */}

        {/* <ClickCounter count={5} /> */}
        {/* <PrintButton name='Oleg' age={20}/>  */}



         {/* <State1 value={1}/> */}
         {/* <ClickButton/>  */}

         {/* <PackingList/> */}

         {/* <SignUpDialog/> */}

  <SignUpDialog2 items={products}/>
         </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {

  // ブーリアン型
  const isFlag1: boolean = true;
  const isFlag2: boolean = false;
  // const isFlag3: boolean = 'aaa';

  // ナンバー型
  const num1: number = 10;
  const num2: number = -10;
  // const num3: number = 'aaa';

  const str1: string = 'aaa';
  // const str2: string = -10;
  // const str3: string = false;

  let temp: string[] = ['adf', 'kdk', 'iku'];
  let temp2: Array<string> = ['adf', 'kdk', 'iku'];

  // let taple: [string, number] = [9999, 9999];

  let profile1: any = 123456;
  let profile2: any = 'test';
  let profile3: any = false;


  // const test = (): void => {
  //   return 'Hello'
  // };

  const test2 = (): null => {
    return null
  };

  // const test3 = (): undefined => {
  //   return Undefined
  // };

  const error = (number: string): never => {
    throw new Error();
  };
  console.log(error('Hello'));

  let object1: object = { id: 1, name: 'satake' }
  let object2: {id: number,name:string} ={id:1,name:'satake'}

  type TestType = {
    
    id: number,
    name: string
  }
  // let object3: TestType = { id: 1, name: 'satake', password: 'aaaaa' };
  // let object4: { id: number, name: string } = { id: 1, name: 'satake' };

  interface ObjectInterface {
    id: number;
    name: string;
  }

  let object5: ObjectInterface = { id: 1, name: 'satake' };

  const Kansu = (): number => 43;

  let numberAny: any = Kansu();
  let numberUnknown: unknown = Kansu();

  let sum1 = 10 + numberAny;
  // let sum2 = 10 + numberUnknown

  type Pitcher1 = {
    throwingSpeed: number;
  };
  
  type Batter1 = {
    battingAverage: number;
  };

  type TwoWayPlayer = Pitcher1 & Batter1;

  let sasaki: TwoWayPlayer = {
    throwingSpeed: 154,
    battingAverage: 3.65
  };

  let name: string | number = 'sasaki'
  name = 100
  // name = false

  let nitiyoubi: '日' = '日';
  let yes: true = true;
  let week: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';

  enum Month {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    November,
    December,
  }

  console.log(Month.April);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

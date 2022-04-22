import React, { useState } from 'react';

import MainBlock from '../MainBlock';
import SecondaryBlock from '../SecondaryBlock';

import {ReactComponent as InterfaceImg} from '../../../static/images/interface.svg';
import {ReactComponent as MTVImg} from '../../../static/images/mtv.svg';
import {ReactComponent as FanctionImg} from '../../../static/images/fanction.svg';
import {ReactComponent as AppGroupImg} from '../../../static/images/app-group.svg';
import {ReactComponent as ServerImg} from '../../../static/images/server.svg';

import './App.scss';

function App() {

  const [interfaceValue, setInterfaseValue] = useState('223');
  const [mtvValue, setMTVValue]= useState('224');
  const [functionValue, setFunctionValue]= useState('130');
  const [appGroupValue, setAppGroupValue]= useState('66');
  const [serverValue, setServerValue]= useState('55');


  const argumentSum = (interfaceValue, mtvValue, functionValue, appGroupValue, serverValue) => {
    let sum = +interfaceValue + +mtvValue + +functionValue + +appGroupValue + +serverValue;
    return sum;
  }

  const [sum, setCount] = useState(argumentSum(interfaceValue, mtvValue, functionValue, appGroupValue, serverValue));

  const onValueChange = (sum) => {
    setCount(sum);
  }

  return (
    <div className='app'>
      <div className='wrapper'>

        <MainBlock value={sum}/>

        <SecondaryBlock 
          className='interface'
          title='Interface'
          value={interfaceValue}
          img={<InterfaceImg/>}
          onValueChange={(newValue) => {
            setInterfaseValue(newValue);
            const newSum = argumentSum(newValue, mtvValue, functionValue, appGroupValue, serverValue);
            onValueChange(newSum)
          }}
        />

        <SecondaryBlock
          className='mtv'
          title='MTV'
          value={mtvValue}
          img={<MTVImg/>}
          onValueChange={(newValue) => {
            setMTVValue(newValue);
            const newSum = argumentSum(newValue, interfaceValue, functionValue, appGroupValue, serverValue);
            onValueChange(newSum)
          }}
        />

        <SecondaryBlock
          className='function'
          title='Function'
          value={functionValue}
          img={<FanctionImg/>}
          onValueChange={(newValue) => {
            setFunctionValue(newValue);
            const newSum = argumentSum(newValue, interfaceValue, mtvValue, appGroupValue, serverValue);
            onValueChange(newSum)
          }}
        />

        <SecondaryBlock 
          className='app-group'
          title='App group'
          value={appGroupValue}
          img={<AppGroupImg/>}
          onValueChange={(newValue) => {
            setAppGroupValue(newValue);
            const newSum = argumentSum(newValue, interfaceValue, mtvValue, functionValue, serverValue);
            onValueChange(newSum)
          }}
        />

        <SecondaryBlock
          className='server'
          title='Server'
          value={serverValue}
          img={<ServerImg/>}
          onValueChange={(newValue) => {
            setServerValue(newValue);
            const newSum = argumentSum(newValue, interfaceValue, mtvValue, functionValue, appGroupValue);
            onValueChange(newSum)
          }}
        />
        
        </div>
    </div>
  );
}

export default App;

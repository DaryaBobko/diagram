import Input from '../../common/Input/Input'

import {ReactComponent as AppImg} from '../../../static/images/app.svg';
import {ReactComponent as MainLine} from '../../../static/images/main-line.svg';
import {ReactComponent as SecondaryLine} from '../../../static/images/secondary-line.svg';
import {ReactComponent as SecondaryLineMb} from '../../../static/images/secondary-line-mb.svg';

import './MainBlock.scss';

function MainBlock({value}) {

  return (
    <div className='application-wrap'>

      <div className='interfase-line'>
        <MainLine  className='mr-30'/>
        <MainLine/>
      </div>
      <div className='fanctions-line'><MainLine/></div>

      <div className='server-line lg-hide'><SecondaryLine/></div>
      <div className='server-line-mb mb-hide'><SecondaryLineMb/></div>

      <div className='app-group-line lg-hide'><SecondaryLine/></div>
      <div className='app-group-line-mb mb-hide'><SecondaryLineMb/></div>

      <div className='mtv-line lg-hide'><SecondaryLine/></div>
      <div className='mtv-line-mb mb-hide'><SecondaryLineMb/></div>

      <div className='application'>
        <Input
          value={value}
        />
        <AppImg className='application-img'/>
        <div className='title'>Application</div>
      </div>
    </div>
  );
}

export default MainBlock;
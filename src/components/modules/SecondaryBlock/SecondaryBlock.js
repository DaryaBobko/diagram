import classNames from 'classnames/bind';

import Input from '../../common/Input/Input'

import './SecondaryBlock.scss';

function SecondaryBlock({className, title, value, img, onValueChange}) {
  
  return (
    <div className={classNames('item', className)} >
      <Input 
        value={value}
        onValueChange={onValueChange}
      />
      {img}
      <div className='title'>{title}</div>
    </div>
  );
}

export default SecondaryBlock;
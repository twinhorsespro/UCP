import React, { Component } from 'react';
import {Button} from 'react-materialize'
import MdAdd from 'react-icons/lib/md/add';
import MdClose from 'react-icons/lib/md/close';
import './Action.css';

class Action extends Component {

  render() {
    return (
      <div>
        <Button floating fab='vertical' fabClickOnly="true" icon='' className="ion-navicon " large >
          <a>
          <Button floating icon='ع' className=''/>
          </a>
          <a href='http://maps.apple.com/?q=41.016422,28.653334'>
          <Button floating icon='' className='ion-ios-location waves'/>
          </a>
          <a href='https://api.whatsapp.com/send?phone=905061162526'>
          <Button floating icon='' className='ion-social-whatsapp waves' />
          </a>
          <a href=''>
          <Button floating icon='' className='ion-ios-email'/>
          </a>
        </Button>
      </div>
    );
  }

}

export default Action;

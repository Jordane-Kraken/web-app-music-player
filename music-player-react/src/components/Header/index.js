import { React } from 'react';
import Typical from 'react-typical';


import './index.scss';

function Header() {
  return (
    <header className="header">
      <h1>React Music Player</h1>
      <p>Special music for{' '}
      <Typical
      loop={1}
      wrapper='b'
      steps={[
        'working',
        2000,
        'chilling',
        2000,
        'dreaming',
        2000,
        'coding',
        2000
      ]}
      />
      </p>
    </header>
  )
}

export default Header;
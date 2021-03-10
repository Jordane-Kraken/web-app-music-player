import { React } from 'react';
import Typical from 'react-typical';


import './index.scss';

function Header() {
  return (
    <header className="header">
      <h1>React Music Player</h1>
      <p>Special music for{' '}
      <Typical
      loop={3}
      wrapper='p'
      steps={[
        'working',
        1000,
        'chilling',
        1000,
        'dreaming',
        1000,
        'coding',
        1000
      ]}
      />
      </p>
    </header>
  )
}

export default Header;
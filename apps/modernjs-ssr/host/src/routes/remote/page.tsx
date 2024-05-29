import React from 'react';
import Comp from 'remote/Image';
import { useNavigate } from '@modern-js/runtime/router';
import './index.css';

const Index = (): JSX.Element => {
  const navi = useNavigate();

  return (
    <div className="container-box">
      host page , router: remote
      <button
        style={{ marginBottom: '1rem' }}
        onClick={() => alert('Client side Javascript works!')}
      >
        Click me to test host interactive!
      </button>
      <Comp />
    </div>
  );
};

export default Index;
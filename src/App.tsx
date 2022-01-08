import React, { FC } from 'react';
import { Button } from 'antd';

const App: FC = () => {
  return (
    <div className="text-blue-800 text-2xl">
      <span> 我是按钮外面的文字</span>
      <Button type="primary">Button</Button>
    </div>
  );
};

export default App;

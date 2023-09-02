import React, { useState } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './home.css';

export default function Counter() {
  return (
    <div>
      这是首页
      <span>登录信息在localstorage</span>
      <div className="navigation">
        <Button>
          <Link to="/day">查看日报</Link>
        </Button>
        <Button>
          <Link to="/week">查看周报</Link>
        </Button>
      </div>
    </div>
  );
}

// import {
//   DataSheetGrid,
//   checkboxColumn,
//   textColumn,
//   keyColumn,
//   createAddRowsComponent,
// } from 'react-datasheet-grid';
import { useState, useEffect } from 'react';
import { Button, Modal, Popconfirm } from 'antd';
import './public.css';
// import Select from 'react-select';
// import { getTitleList, getContentList, postWorkTimeList } from '../API/api';
import Table from '../components/table/table';

const Day = () => {
  const [day, setDay] = useState(1);
  const t = new Date();
  const day2ms = (d) => d * 86400000;
  const day2string = (d) => d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  const [today, setToday] = useState(day2string(t));
  const [data, setData] = useState([
    {
      active: true,
      plan: 'Elon',
      lastName: 'Musk',
      content: '',
      innernumber: 8,
      if_same: true,
      outernumber: 1,
      location: '成都',
      create_at: today,
    },
  ]);
  const columnsBody = {
    type: '日报',
    startAt: today,
    endAt: today,
  };
  useEffect(() => {}, []);

  const upData = (sonData) => {
    setData(sonData);
  };
  const yesterday = () => {
    Modal.confirm({
      content: '您确定进行昨日补填吗？？',
      onOk() {
        console.log('OK');
        setDay(0);
        setToday(day2string(new Date(t - day2ms(1))));
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const returnToday = () => {
    setDay(1);
    setToday(day2string(t));
  };
  const copyYestday = () => {
    Modal.confirm({
      content: '确定将昨日日报复制到下方？',
      onOk() {
        console.log('OK');
        // setDay(0);
        // setToday(day2string(new Date(t - day2ms(1))));
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <div className="day">
      <h3>
        日报
        <span>{today}</span>
      </h3>
      <div className="left">
        {day ? (
          <div className="left">
            <Button onClick={yesterday}>昨日补填</Button>
            <Button onClick={copyYestday}>复制昨日</Button>
          </div>
        ) : (
          <Button onClick={returnToday}>返回今日</Button>
        )}
        <Button type="primary">订阅</Button>
      </div>

      <Table
        columns={columnsBody}
        data={data}
        projectName={{ beginAt: today, endAt: today }}
        onChange={upData.bind(this)}
      />
    </div>
  );
};

export default Day;

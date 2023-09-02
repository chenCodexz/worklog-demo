import { DataSheetGrid, checkboxColumn, textColumn, keyColumn } from 'react-datasheet-grid';
import { useState } from 'react';
import { Button } from 'antd';
import './public.css';
import Select from 'react-select';
import Table from '../components/table/table';

const Week = () => {
  const t = new Date();
  const day2ms = (d) => d * 86400000;
  const day2string = (d) => d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  const today = () => day2string(t);
  const onWeek = () => {
    switch (t.getDay()) {
      case 1:
        return today + '（周一）-' + day2string(new Date(t + day2ms(5))) + '（周六）';
      case 2:
        return (
          day2string(new Date(t - day2ms(1))) +
          '（周一）-' +
          day2string(new Date(t + day2ms(4))) +
          '（周六）'
        );
      case 3:
        return (
          day2string(new Date(t - day2ms(2))) +
          '（周一）-' +
          day2string(new Date(t + day2ms(3))) +
          '（周六）'
        );
      case 4:
        return (
          day2string(new Date(t - day2ms(3))) +
          '（周一）-' +
          day2string(new Date(t + day2ms(2))) +
          '（周六）'
        );
      case 5:
        return (
          day2string(new Date(t - day2ms(4))) +
          '（周一）-' +
          day2string(new Date(t + day2ms(1))) +
          '（周六）'
        );
      case 6:
        return day2string(new Date(t - day2ms(5))) + '（周一）-' + today() + '（周六）';
      default:
        break;
    }
  };
  const columnsBody = {
    type: '周报',
    startAt: today,
    endAt: today,
  };
  const [data, setData] = useState([
    {
      active: true,
      plan: 'Elon',
      lastName: 'Musk',
      content: '',
      times: 8,
      consistent: true,
      travelTime: 1,
      travelCity: '成都',
      fillTime: '2013-5-25',
    },
  ]);
  // const [todayTime, setTodayTime] = useState(new Date().toString().slice(11, 24));
  // const SelectComponent = () => {
  // 	return <Select />;
  // };
  const columns = [
    { ...keyColumn('active', checkboxColumn), title: '' },
    { ...keyColumn('firstName', textColumn), component: Select, title: '成果&计划' },
    { ...keyColumn('lastName', textColumn), component: Select, title: '项目名称' },
    { ...keyColumn('lastName', textColumn), component: Select, title: '模块' },
    { ...keyColumn('lastName', textColumn), component: Select, title: '项目阶段' },
    { ...keyColumn('lastName', textColumn), component: Select, title: '项目专业' },
    { ...keyColumn('lastName', textColumn), component: Select, title: '角色' },
    { ...keyColumn('content', textColumn), component: Select, title: '内容' },
    { ...keyColumn('times', textColumn), title: '工时（小时）' },
    { ...keyColumn('consistent', checkboxColumn), title: '与任务书一致' },
    { ...keyColumn('travelTime', textColumn), title: '差旅时间（天）' },
    { ...keyColumn('travelCity', textColumn), title: '差旅城市' },
    { ...keyColumn('fillTime', textColumn), title: '填报日期' },
  ];
  // setInterval(() => {
  // 	setTodayTime(new Date().toString().slice(11, 24));
  // }, 1000);
  return (
    <div className="day">
      <h3>
        周报
        <span>{onWeek()}</span>
      </h3>
      <div className="left">
        <Button>昨日补填</Button>
        <Button>复制昨日</Button>
        <Button type="primary">订阅</Button>
      </div>
      {/* <div className="right">
        <Button type="primary">新增</Button>
        <Button>复制行</Button>
        <Button>删除</Button>
      </div> */}
      {/* <DataSheetGrid value={data} onChange={setData} columns={columns} /> */}
      <Table columns={columnsBody} />
      <Button type="primary" className="submit">
        提交
      </Button>
    </div>
  );
};

export default Week;

import { useState, useEffect } from 'react';
// import {
//   DataSheetGrid,
//   checkboxColumn,
//   textColumn,
//   keyColumn,
//   intColumn,
//   dateColumn,
// } from 'react-datasheet-grid';
import { DataSheetGrid, columnsBuild } from 'react-datasheet-grid-teams';
import 'react-datasheet-grid-teams/dist/style.css';
import {
  getTitleList,
  getContentList,
  postWorkTimeList,
  postListData,
  getModuleList,
  getPhaseList,
  getMajorList,
} from '../../API/api';
import Select from 'react-select';
import { Skeleton, Spin, Button } from 'antd';
// import { connect } from 'react-redux';
// import Select from 'react-select';

// Import the style only once in your app!
import 'react-datasheet-grid/dist/style.css';

export default function Example(props) {
  console.log(props);
  const [data, setData] = useState([]);

  const [columns, setColumns] = useState([
    // { ...keyColumn('active', checkboxColumn), title: 'Active' },
    {
      title: '',
      key: 'checkbox',
      type: 'checkbox',
      maxWidth: 80,
      minWidth: 80,
      align: 'center',
      defaultValue: true,
    },
  ]);
  useEffect(() => {
    getTitleList(props.columns).then((res) => {
      console.log('获取所有数据', res);
      console.log('获取表头数据', res.data.columns);
      console.log(res.data.columns);
      setColumns([...columns].concat(res.data.columns));
      res.data.sourceData === [] ? setData(res.data.sourceData) : setData([{}, {}]);
    });
    // postWorkTimeList(props.projectName).then((res) => {
    //   console.log(res);
    // });
    getModuleList({
      taskid: 10,
    }).then((res) => {
      console.log(res);
    });
    getPhaseList({
      taskid: 10,
    }).then((res) => {
      console.log(res);
    });
    getMajorList({
      taskid: 10,
    }).then((res) => {
      console.log(res);
    });
    // getContentList(props.content);
  }, []);
  setTimeout(() => {
    console.log(columns);
  }, 100);

  const addRow = () => {
    console.log('add');
    setData([...data, {}]);
    // setRow(++row);
    console.log(data);
  };
  const deleteRow = () => {
    console.log('delete');
    setData(data.slice(0, data.length - 1));
    console.log(data);
  };
  const submit = () => {
    console.log('submit');
    console.log(data);
    // postListData();
  };

  return (
    <div>
      <div className="right">
        <Button type="primary" onClick={addRow}>
          新增
        </Button>
        <Button onClick={null}>复制行</Button>
        <Button onClick={deleteRow}>删除</Button>
      </div>
      {columns.length > 1 ? (
        <DataSheetGrid value={data} onChange={setData} columns={columnsBuild(columns)} />
      ) : (
        <Skeleton active />
        // <Spin />
      )}
      <Button type="primary" className="submit" onClick={submit}>
        提交
      </Button>
    </div>
  );
}

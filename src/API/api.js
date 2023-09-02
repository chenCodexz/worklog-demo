import { get, post } from '../utils/http';

// 获取群角色列表
export const getGroupRole = (params) => {
  let bodyStr = '';
  for (let k in params) {
    bodyStr += k + '=' + params[k] + '&';
  }
  return get(`/api/project/group_role/list?${bodyStr}`);
};

// 获取表头数据
export const getTitleList = (params) => {
  let bodyStr = '';
  for (let k in params) {
    bodyStr += k + '=' + params[k] + '&';
  }
  return get(`/api/project/report/card/get/v2?${bodyStr}`);
};

// 获取列表内容数据
export const getContentList = (params) => {
  let bodyStr = '';
  for (let k in params) {
    bodyStr += k + '=' + params[k] + '&';
  }
  return get(`/api/project/task/worklog/contents/get?${bodyStr}`);
};

// 发送工时模块项目列表
export const postWorkTimeList = (params) => {
  return post('/api/project/region/project/list/v2', params);
};

// 提交日报、周报
export const postListData = (params) => {
  return post('/api/project/report/card/create/v2', params);
};

// 工时快速填报
export const createWorKlog = (params) => {
  return post('/api/project/task/worklog/fast/create', params);
};

// 工时快速获取
export const getWorKlog = (params) => {
  return post('/api/project/task/worklog/fast/get', params);
};

// 获取项目专业列表
export const getMajorList = (params) => {
  let bodyStr = '';
  for (let k in params) {
    bodyStr += k + '=' + params[k] + '&';
  }
  return get(`/api/project/task/worklog/nodes/get?${bodyStr}`);
};

// 获取项目阶段列表
export const getPhaseList = (params) => {
  let bodyStr = '';
  for (let k in params) {
    bodyStr += k + '=' + params[k] + '&';
  }
  return get(`/api/project/task/worklog/phases/get?${bodyStr}`);
};

// 获取模块列表
export const getModuleList = (params) => {
  let bodyStr = '';
  for (let k in params) {
    bodyStr += k + '=' + params[k] + '&';
  }
  return get(`/api/project/task/worklog/tags/get?${bodyStr}`);
};

// 工时订阅
export const subWorKlog = (params) => {
  return post('/api/project/worklog/subscribe/create', params);
};

// 工时订阅删除
export const delSubWorKlog = (params) => {
  return post('/api/project/worklog/subscribe/delete', params);
};

// 工时订阅获取
export const getSubWorKlog = (params) => {
  return post('/api/project/worklog/subscribe/get', params);
};

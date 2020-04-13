import axios from 'axios'

export function request(config){
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/h8',
    timeout: 5000
  })
  //2.axios的拦截器
  instance.interceptors.request.use(config =>{
    //1.config中一些信息不符合服务器要求，必须进行变化
    //2.每次发送网络请求是，会显示请求图标
    //3.某些网络请求，是必须携带一些特殊的信息。（比如token）
    //在拦截之后，必须在此处进行返回，才会继续执行，否则就会出错
    return config;
  },err =>{
    console.log(err);
  });

  //相应拦截
  instance.interceptors.response.use(res =>{
    //此处获取到结果后，同样必须需要返回，否则无法获取到返回结果
    return res.data;     //data才是真正的结果，其他皆为axios自带的一些数据/
  },err =>{
    console.log(err);
  });

  //3.发送真正的网络请求
  return instance(config)
}
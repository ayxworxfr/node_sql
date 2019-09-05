const DB = require('./utils/mysql');
const db = new DB('aa');

let promise = db.queryStr('SELECT COUNT(*) FROM taotao.user');
promise.then(function (data) {
  //then第一个函数是成功的回调，参数是resolve(err)中的data
  console.log('成功：' + data); // 若成功，运行结果：成功：111
  console.log(data);
}).catch(function(err){
  //then第二参数错误回调换成这里catch也行，两者选其一
  console.log('err');
}).finally(function(){
  //无论失败成功都会执行
  console.log('完成');
})

// query
// promise = db.queryStr('SELECT * FROM taotao.user');
// promise.then(function (data) {
//   //then第一个函数是成功的回调，参数是resolve(err)中的data
//   console.log('成功：' + data); // 若成功，运行结果：成功：111
//   console.log(data);
//   console.log(data[0].username);
// }).catch(function(err){
//   //then第二参数错误回调换成这里catch也行，两者选其一
//   console.log('err');
// }).finally(function(){
//   //无论失败成功都会执行
//   console.log('完成');
// })

// insert
// promise = db.insert({username: 'bbb', password: '123'});
// promise.then(function (data) {
//   //then第一个函数是成功的回调，参数是resolve(err)中的data
//   console.log('成功：' + data); // 若成功，运行结果：成功：111
//   console.log(data);
// }).catch(function(err){
//   //then第二参数错误回调换成这里catch也行，两者选其一
//   console.log('err');
// }).finally(function(){
//   //无论失败成功都会执行
//   console.log('完成');
// })

// remove
// promise = db.remove({password: '1234'});
// promise.then(function (data) {
//   //then第一个函数是成功的回调，参数是resolve(err)中的data
//   console.log('成功：' + data); // 若成功，运行结果：成功：111
//   console.log(data);
// }).catch(function(err){
//   //then第二参数错误回调换成这里catch也行，两者选其一
//   console.log('err');
// }).finally(function(){
//   //无论失败成功都会执行
//   console.log('完成');
// })

//update
// promise = db.update({id:3}, {password: '1234'});
// promise.then(function (data) {
//   //then第一个函数是成功的回调，参数是resolve(err)中的data
//   console.log('成功：' + data); // 若成功，运行结果：成功：111
//   console.log(data);
// }).catch(function(err){
//   //then第二参数错误回调换成这里catch也行，两者选其一
//   console.log('err');
// }).finally(function(){
//   //无论失败成功都会执行
//   console.log('完成');
// })

// fetchRow
// promise = db.fetchRow({password: '123'});
// promise.then(function (data) {
//   //then第一个函数是成功的回调，参数是resolve(err)中的data
//   console.log('成功：' + data); // 若成功，运行结果：成功：111
//   console.log(data);
// }).catch(function(err){
//   //then第二参数错误回调换成这里catch也行，两者选其一
//   console.log('err');
// }).finally(function(){
//   //无论失败成功都会执行
//   console.log('完成');
// })



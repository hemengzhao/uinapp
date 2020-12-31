import Vue from 'vue';
import popUp from "./popUpActi.vue";

const Toast = function() {
  instance = new ToastConstructor().$mount(); // 渲染组件
  
};

let messageConstructor = Vue.extend(popUp); // 这个在前面的前置知识内容里面有讲到
let instance;

const Message = function (options, callback) {
    instance = new messageConstructor(); // 渲染组件
    document.body.appendChild(instance.$mount().$el); // 挂载到 body 下
};
export default Message;
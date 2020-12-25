import necessary from './necessary.js'
export default class Inp {
  constructor(){

  }
  static fillEle(dom, _list){
    dom.innerHTML = `
    <label for="${_list.id}" class="title">`
    + necessary(_list)
    +`<span class="info">${_list.title}</span>
    </label>
    <input id="${_list.id}" class="form-inp common" type="text" placeholder="请输入">
    
    `
    return dom;
  }
  
}
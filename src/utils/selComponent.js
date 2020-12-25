import necessary from './necessary.js'

export default class Sel {
  static fillEle(dom, _list){
    dom.innerHTML = `
    <label for="${_list.id}" class="title">`
    + necessary(_list)
    +`<span class="info">${_list.title}</span>
    </label>
    <input class="form-sel common" id="${_list.id}" type="text" readonly>
    <i class="qxz">请选择</i>
    `
    return dom;
  }

}
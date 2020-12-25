import necessary from '../utils/necessary.js'
import Inp from '../utils/inpComponent.js'
import Sel from '../utils/selComponent.js'
import Tab from '../utils/tabComponent.js'

export default class Judge {
  constructor(_list) {
    this.elem = this.judgeDataType(_list);
  }
  judgeDataType(_list) {
    let li = document.createElement('li');
    if(_list.dataType === 'inp'){
      li = Inp.fillEle(li, _list);
    }else if(_list.dataType === 'sel') {
      li = Sel.fillEle(li, _list);
    }else if(_list.dataType === 'table') {
      li = Tab.fillEle(li, _list);
    }else{
      li.innerHTML = `<label for="${_list.id}" class="title">`
      + necessary(_list) 
      +`<span class="info">${_list.title}</span>
      </label>
      <textarea cols="30" rows="10" id="${_list.id}" placeholder="请输入"></textarea>`
    }
    return li;
  }
  appendTo(parent){
    parent.appendChild(this.elem);
  }
}
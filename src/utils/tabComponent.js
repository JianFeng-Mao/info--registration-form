import necessary from './necessary.js'
export default class Tab {
  constructor(){

  }
  static fillEle(dom, _list){
    dom.innerHTML = `
    <label for="${_list.id}" class="title">`
    + necessary(_list)
    +`<span class="info">${_list.title}` + this.redCol(_list) + `</span>
    </label>
    <table cellspacing="0">
      <thead><tr>`+ this.getTableData(_list) +`</tr></thead>
      <tbody><tr><td><input type="text"></td><td><input type="text"></td>
          <td><input type="text"></td><td><input type="text"></td></tr>
        <tr><td><input type="text"></td><td><input type="text"></td>
          <td><input type="text"></td>
          <td><input type="text"></td></tr>
        <tr><td><input type="text"></td><td><input type="text"></td>
          <td><input type="text"></td>
          <td><input type="text"></td></tr></tbody>
    </table>
    `
    return dom;
  }
  static getTableData(_list) {
    if(!_list.tableData) return new Error('请输入正确的数据格式');
    let data = _list.tableData;
    let str = '';
    for(let i = 0;i < data.length; i ++) {
      str += `<th>${data[i]}</th>`;
    }
    return str;
  }
  static redCol(_list) {
    return _list.isRed ? '<span class="redCol">`无`</span>）' : '';
  }
}
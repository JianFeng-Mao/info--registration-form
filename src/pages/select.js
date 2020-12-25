function creatSex() {
  var data=[{'id': '10001', 'value': '男'},{'id': '10002', 'value': '女'}];
  var showSexDom = document.querySelector('#xb');
  var sexDom = showSexDom.nextElementSibling;
  var SexSelect;
  showSexDom.addEventListener('click', function () {
      var SexId = showSexDom.dataset['id'];
      var SexName = showSexDom.dataset['value'];

      sexSelect = new IosSelect(1, 
          [data],
          {
              container: '.container',
              title: ' ',
              itemHeight: 50,
              itemShowCount: 3,
              oneLevelId: SexId,
              callback: function (selectOneObj) {
                  sexDom.innerHTML = selectOneObj.value;
                  showSexDom.dataset['id'] = selectOneObj.id;
                  showSexDom.dataset['value'] = selectOneObj.value;
                  
                  let style = document.createElement('style');
                  style.innerHTML = `#xb + .qxz::after{display: none}`;
                  document.head.appendChild(style);
              },
            
          }
      );
  });
  
  
}
window.onload = function () {
  let ul = document.createElement('ul');
  ul.className = 'date-title';
  ul.innerHTML = `<li>年</li><li>月</li><li>日</li>`;
  let lang = {
    title: '',
    cancel: '取消',
    confirm: '确定',
    year: '',
    month: '',
    day: '',
  }
  new Rolldate({
    el: '#tbrq',
    format: 'YYYY-MM-DD',
    beginYear: 1800,
    endYear: 2099,
    lang: lang,
    init: function () {
      setTimeout(() => {
        let h = document.querySelector('.rolldate-panel');
        let s = document.querySelector('.rolldate-content');
        h.insertBefore(ul, s)
      }, 0);
    },
    confirm: function (date) {
      let placeHolder = document.getElementById('tbrq').nextElementSibling;
      let style = document.createElement('style');
      placeHolder.innerHTML = date;
      style.innerHTML = `#tbrq + .qxz::after{display: none}`;
      document.head.appendChild(style);
      return ' ';
    }
  })
  new Rolldate({
    el: '#csrq',
    format: 'YYYY-MM-DD',
    beginYear: 1800,
    endYear: 2099,
    lang: lang,
    init: function () {
      setTimeout(() => {
        let h = document.querySelector('.rolldate-panel');
        let s = document.querySelector('.rolldate-content');
        h.insertBefore(ul, s)
      }, 0);
    },
    confirm: function (date) {
      let placeHolder = document.getElementById('csrq').nextElementSibling;
      let style = document.createElement('style');
      placeHolder.innerHTML = date;
      style.innerHTML = `#csrq + .qxz::after{display:none}`;
      document.head.appendChild(style);
      return ' ';
    }
  })
  new Rolldate({
    el: '#dgsj',
    format: 'YYYY-MM-DD',
    beginYear: 1800,
    endYear: 2099,
    lang: lang,
    init: function () {
      setTimeout(() => {
        let h = document.querySelector('.rolldate-panel');
        let s = document.querySelector('.rolldate-content');
        h.insertBefore(ul, s)
      }, 0);
    },
    confirm: function (date) {
      let placeHolder = document.getElementById('dgsj').nextElementSibling;
      let style = document.createElement('style');
      placeHolder.innerHTML = date;
      style.innerHTML = `#dgsj + i.qxz::after{display:none}`;
      document.head.appendChild(style);
      return ' ';
    }
  })
  creatSex();

}
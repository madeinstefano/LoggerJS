//Konsole module

(function (){
  
  var Konsole = window.Konsole = {};
  Konsole['debug'] = false;
  
  function createConsole(){
    var 
      body = document.getElementsByTagName('body')[0],
      div = document.createElement('div');
      div.setAttribute('style','display:block;height:400px;padding:10px;font-family:arial;font-size:14px;overflow:scroll;border:1px solid #000;');
      div.setAttribute('id','Konsole-output');
    
    body.appendChild(div);
    return div;
  }
  
  function printToScreen(m){
    var 
      c = document.getElementById('Konsole-output'),
      s = document.createElement('span');
    if (!c){
      c = createConsole();
    }
    s.textContent = m;
    c.appendChild(s)
    c.appendChild(document.createElement('br'));
  }
  
  function support(type){
    console.log(!!console && !!console['type'])
    return !!console && !!console['type'];
  }
  
  function parseCaller(a){
    if (a && a.callee & a.callee.caller && a.callee.caller.name){
      return 'from: ' + a.callee.caller.name + ':';
    }
    return '';
  }
  
  function print(m,type){
    if (Konsole.debug){
      if (support(type)){
        console.log('oie?')
        console['type']('[' + type + '] >>>',parseCaller(arguments),m);
      }else{
        printToScreen('[' + type + '] >>>' + parseCaller(arguments) + m);
      }
    }
  }
  
  Konsole['warn'] = function warn(m){print(m,'warn');};
  Konsole['log'] =  function log(m){print(m,'log');};
  Konsole['error'] = function error(m){print(m,'error');};
  Konsole['throwError'] = function (m){
    throw '[error thrown] >>> ' + m;
    if (this.debug && support('trace')){
      console.trace();
    }
  };
})();
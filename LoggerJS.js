/**
 * LoggerJS
 *
 * @author Stéfano Sypulkowski <szanata.com>
 * @version 2
 * 
 * @licensed MIT <see below>
 * @licensed GPL <see below>
 * 
 */
/**
 * MIT License
 * Copyright (c) 2012 Stéfano Stypulkowski
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy 
 * of this software and associated documentation files (the "Software"), to deal 
 * in the Software without restriction, including without limitation the rights 
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
 * copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * GPL LIcense
 * Copyright (c) 2012 Stéfano Stypulkowski
 * 
 * This program is free software: you can redistribute it and/or modify it 
 * under the terms of the GNU General Public License as published by the 
 * Free Software Foundation, either version 3 of the License, or 
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License 
 * for more details.
 * 
 * You should have received a copy of the GNU General Public License along 
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function (){
  
  var Logger = window.Logger = {};
  Logger['debug'] = false;
  
  function createConsole(){
    var 
      body = document.getElementsByTagName('body')[0],
      div = document.createElement('div');
      div.setAttribute('style','display:block;height:400px;padding:10px;font-family:arial;font-size:14px;overflow:scroll;border:1px solid #000;');
      div.setAttribute('id','Logger-output');
    
    body.appendChild(div);
    return div;
  }
  
  function printToScreen(m){
    var 
      c = document.getElementById('Logger-output'),
      s = document.createElement('span');
    if (!c){
      c = createConsole();
    }
    s.textContent = m;
    c.appendChild(s)
    c.appendChild(document.createElement('br'));
  }
  
  function support(type){
    return !!console && !!console[type];
  }
  
  function parseCaller(a){
    if (a && a.callee && a.callee.caller && a.callee.caller.name){
      return 'from: ' + a.callee.caller.name;
    }
    return '';
  }
  
  function print(m,type,a){
    if (Logger.debug){
      if (support(type)){
        console[type]('[' + type + ']',parseCaller(a),'>>>',m);
      }else{
        printToScreen('[' + type + '] ' + parseCaller(a) + ' >>> ' + m);
      }
    }
  }
  
  Logger['warn'] = function warn(m){print(m,'warn');};
  Logger['log'] =  function log(m){print(m,'log',arguments);};
  Logger['error'] = function error(m){print(m,'error');};
  Logger['throwError'] = function (m){
    throw '[error thrown] >>> ' + m;
    if (this.debug && support('trace')){
      console.trace();
    }
  };
})();
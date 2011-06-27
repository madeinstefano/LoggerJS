//Konsole module
var Konsole = (function (){
  var
    DEBUG = true,
    SUPPORTS_CONSOLE = typeof console !== 'undefined' && typeof console !== null, 
    SUPPORTS_LOG = SUPPORTS_CONSOLE && console.log,
    SUPPORTS_ERROR = SUPPORTS_CONSOLE && console.error,
    SUPPORTS_TRACE = SUPPORTS_CONSOLE && console.trace;
  
  return{
    
    log: function (m){
      if (arguments && arguments.callee && arguments.callee.caller){
        if (DEBUG && SUPPORTS_LOG){
          console.log('[EXPR] >>>',arguments.callee.caller.name,':',m);
        }
      }else{
        if (DEBUG && SUPPORTS_LOG){
          console.log('[EXPR] >>> ',m);
        }
      }
    },

    throwError: function (m){
      throw '[EXPR] >>> ' + m;
      if (DEBUG && SUPPORTS_ERROR && SUPPORTS_TRACE){
        console.trace();
      }
    }
  };
})();
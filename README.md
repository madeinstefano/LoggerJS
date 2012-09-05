# LoggerJS

LoggerJS is a library to help developers to use log messages while coding their apps.
It uses, on supported browsers, the object "console" to log the messages. But, on browsers without this
tool, the LoogerJS appends a "div" on the end of document to put their messages on.
LoggerJS was created to help me to log my messages while developing a big JS app, and  can be 
turned off (don't show messages) for deploys.

## Usage

To use, just import the lib to your project, it will add to the scope an object called "Logger"
But, buy default, the logging won't show any message. To turn on, you must set the "debug" mode:

    Logger.debug = true;

Do this right on the start off your app. With this control, you can turn off the logger for deploys.
Now, in every place that you need to log a message, use "Logger":

    Logger.log('some text'); // this will add some normal log message
    
    Logger.warn('some text'); // this will log some war message
    
    Logger.error('some text'); // this will log an error message
    
    Logger.throwError('some text'); // this throw a execution error and log the trace

The caller's name will be logged within the message, to favor the recognition.

## Changelog

- **version 2:**
  - Total rewrite: less code, more reusability.
  - Added more two funcionalities: "warn" and "error", both to log different types of messages.
  - Added the "debug" property, to turn on or off the messages.
  - Project renamed from "Konsole" to "LoggerJS".
  
- **version 1:**
  - Basic funcionality: "log" and "throwError".
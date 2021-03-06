<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [log](#log)
-   [error](#error)
-   [success](#success)
-   [info](#info)
-   [warning](#warning)
-   [customLog](#customlog)

## log

To log user text as json object

**Parameters**

-   `message`  log text
-   `type`  type of log. ex: log,error,info,warning

**Examples**

```javascript
const logger = require('@febbyjs/logger');

logger.log('hello world', 'log');

//{ type: 'log', message: 'hello world' }
```

## error

To log error text with red color

**Parameters**

-   `message`  log text

**Examples**

```javascript
const logger = require('@febbyjs/logger');

logger.error('hello world');
```

## success

To log success text with green color

**Parameters**

-   `message`  log text

**Examples**

```javascript
const logger = require('@febbyjs/logger');

logger.success('hello world');
```

## info

To log info text with blue color

**Parameters**

-   `message`  log text

**Examples**

```javascript
const logger = require('@febbyjs/logger');

logger.info('hello world');
```

## warning

To log a warning with yellow color

**Parameters**

-   `message`  log text

**Examples**

```javascript
const logger = require('@febbyjs/logger');

logger.warning('hello world');
```

## customLog

To log text with given rgb color code or color name

**Parameters**

-   `message`  log text
-   `color`  color [ black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,
    gray ("bright black"),
    redBright,
    greenBright,
    yellowBright,
    blueBright,
    magentaBright,
    yanBright,
    whiteBright ]

**Examples**

```javascript
const logger = require('@febbyjs/logger');

logger.customLog('hello world','magentaBright');
```

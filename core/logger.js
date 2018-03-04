/*!
 * @febbyjs/logger
 * Copyright(c) 2018 Vasu Vanka,febbyjs
 * MIT Licensed
 */
const chalk = require('chalk');
const {Console} = require('console');
const logger = new Console(process.stdout, process.stderr);

/**
 * @ignore
 * To get chalked text
 * @param text - log text
 * @param color - required color
 * @returns {*} - chalked text
 */
function getChalkText(text, color) {
    return chalk[color](text);
};

/**
 * @ignore
 * To log into stdout
 * @param message - log text
 * @param kind - type of log. ex: log,error,info,warning
 */
async function log(message, kind = 'log') {
    if (typeof message !== 'string') {
        if (typeof message === 'object' && message !== null) {
            message = JSON.stringify(message);
        }
    }
    try {
        logger[kind]({type: kind, message: message});
    } catch (e) {
        logger.log({type: kind, message: message})
    }
};

/**
 * @ignore
 * To log a plain text
 * @param message - log text
 */
function plainLog(message) {
    logger.log(message);
}

/**
 * To log user text as json object
 * @param message - log text
 * @param type - type of log. ex: log,error,info,warning
 * @example
 * const logger = require('@febbyjs/logger');
 *
 *logger.log('hello world', 'log');
 *
 * //{ type: 'log', message: 'hello world' }
 */
module.exports.log = (message, type = 'log') => log(`${message}`, type);
/**
 * To log error text with red color
 * @param message - log text
 * @example
 * const logger = require('@febbyjs/logger');
 *
 * logger.error('hello world');
 */
module.exports.error = (message) => {
    plainLog(getChalkText(message, 'red'));
};
/**
 * To log success text with green color
 * @param message - log text
 * @example
 * const logger = require('@febbyjs/logger');
 *
 * logger.success('hello world');
 */
module.exports.success = (message) => {
    plainLog(getChalkText(message, 'green'));
};
/**
 * To log info text with blue color
 * @param message - log text
 * @example
 * const logger = require('@febbyjs/logger');
 *
 * logger.info('hello world');
 */
module.exports.info = (message) => {
    plainLog(getChalkText(message, 'blue'));
};
/**
 * To log a warning with yellow color
 * @param message - log text
 * @example
 * const logger = require('@febbyjs/logger');
 *
 * logger.warning('hello world');
 */
module.exports.warning = (message) => {
    plainLog(getChalkText(message, 'yellow'));
};
/**
 * To log text with given rgb color code or color name
 * @param message - log text
 * @param color - color [ black,
 * red,
 * green,
 * yellow,
 * blue,
 * magenta,
 * cyan,
 * white,
 * gray ("bright black"),
 * redBright,
 * greenBright,
 * yellowBright,
 * blueBright,
 * magentaBright,
 * yanBright,
 * whiteBright ]
 * @example
 * const logger = require('@febbyjs/logger');
 *
 * logger.customLog('hello world','magentaBright');
 */
module.exports.customLog = (message, color = 'white') => {
    plainLog(getChalkText(message, color));
}
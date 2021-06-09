"use strict";
exports.__esModule = true;
exports.strtotime = exports.date = void 0;
function date(format, ms, region) {
    var regexFormat = /([^YmMdDHis])+/;
    var date = typeof ms == 'undefined' ? new Date() : new Date(parseInt(ms));
    var locate = typeof region == 'undefined' ? 'default' : region;
    var array = format.split(regexFormat);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var monthStr = date.toLocaleString(locate, { month: 'long' });
    var weekday = date.toLocaleString(locate, { weekday: 'long' });
    var obj = {
        Y: year,
        m: padZeroToDate(month),
        M: monthStr,
        D: weekday,
        d: padZeroToDate(day),
        H: padZeroToDate(hour),
        i: padZeroToDate(minute),
        s: padZeroToDate(second)
    };
    return recursive(array.length, 0, array, obj, "");
}
exports.date = date;
function strtotime(str) {
    var date = new Date();
    var regexFormat = /(\+| |-)/;
    var array = str.split(regexFormat);
    var obj = {
        MINUTES: 60000,
        HOURS: 3600000,
        DAYS: 86400000,
        WEEKS: 604800016,
        MONTHS: 2629800000,
        YEARS: 31557600000
    };
    return eval(date.getTime() + array[1] + obj[array[6]] * parseInt(array[4])).toString();
}
exports.strtotime = strtotime;
function recursive(total, value, array, obj, result) {
    return total == value ? result : typeof obj[array[value]] == 'undefined' ?
        recursive(total, value + 1, array, obj, result += array[value]) :
        recursive(total, value + 1, array, obj, result += obj[array[value]]);
}
function padZeroToDate(time) {
    return ('0' + time).slice(-2);
}

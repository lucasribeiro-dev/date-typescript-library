import { date } from "./interfaces/date";

export function date(format:string, ms?:string,region?:string){
  var regexFormat = /([^YmMdDHis])+/;
  const date = typeof ms == 'undefined' ? new Date() : new Date(parseInt(ms))
  const locate = typeof region == 'undefined' ? 'default' : region
  const array:string[] = format.split(regexFormat)
  const year = date.getFullYear();
  const month = date.getMonth() + 1
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const monthStr = date.toLocaleString(locate, {month:'long'})
  const weekday = date.toLocaleString(locate, {weekday:'long'})

  const obj:date = {
    Y: year,
    m: padZeroToDate(month),
    M: monthStr,
    D: weekday,
    d: padZeroToDate(day),
    H: padZeroToDate(hour),
    i: padZeroToDate(minute),
    s: padZeroToDate(second),
  }
  return recursive(array.length, 0, array, obj, "");
  }

export function strtotime(str:string):string{
  let date =  new Date();
  const regexFormat:any = /(\+| |-)/;
  const array:string[] = str.split(regexFormat);
  
  const obj:any = {
    MINUTES: 60000,
    HOURS  : 3600000,
    DAYS   : 86400000,
    WEEKS  : 604800016,
    MONTHS : 2629800000,
    YEARS  : 31557600000,
  }
  return eval(date.getTime() + array[1] +  obj[array[6]] * parseInt(array[4])).toString()
  }
function recursive(total:number, value:number, array:string[], obj:any, result:string):string{
  return total == value ? result : typeof obj[array[value]] == 'undefined'? 
  recursive(total, value + 1, array, obj, result += array[value]):  
  recursive(total, value + 1, array, obj, result += obj[array[value]]); 
}

function padZeroToDate(time:string | number){
  return ('0' + time).slice(-2)
}


 
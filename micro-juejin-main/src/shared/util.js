/**
 * Check if value is primitive.
 */
export function isPrimitive(value) {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    // $flow-disable-line
    typeof value === "symbol" ||
    typeof value === "boolean"
  );
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

/**
 * Quick empty object check
 */
export function isEmptyObject(obj) {
  for (var key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}

/**
 * Remove an item from an array.
 */
export function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Check whether an object has the property.
 */
const hasOwnProperty = Object.prototype.hasOwnProperty;
export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/*check if value is undefined or null*/
export function isUndef(v) {
  return v === undefined || v === null;
}

/*shuffle*/
export function shuffle(arr) {
  console.time("copy");
  // let rtn = JSON.parse(JSON.stringify(arr));  // 深拷贝性能更差
  let rtn = [...arr]; //浅拷贝就足矣，因为只是改变数组元素的下标，与元素内容无关。速度比深拷贝快很多（几倍甚至更多），且数量越多越明显。
  console.timeEnd("copy");
  for (let j, x, i = rtn.length; i; ) {
    j = Math.floor(Math.random() * i);
    x = rtn[--i];
    rtn[i] = rtn[j];
    rtn[j] = x;
  }
  return rtn;
}

/*
 * throttle(callback, time, immediate) 节流函数
 * @param {Function} callback 需要节流的业务回调函数
 * @param {Number} time 节流的周期，单位是ms，即在频繁触发事件时每 time 毫秒才会执行一次callback函数
 * @param {Boolean} immediate 是否立即执行回调。
 *              true:   立即执行的话则一触发事件就会执行回调函数，
 *                      在持续触发事件的这段时间内每time毫秒会执行一次回调函数。
 *                      也就是说在每个周期的一开始才会执行回调函数，所以大部分情况下最后一次触发事件将不会执行回调函数(概率大约为: (time-1)/time)
 *                      优点：可以立即执行回调函数。
 *                      缺点：最后一刻的操作不会触发执行函数
 *
 *              false:  非立即执行的话，触发事件时不会马上执行回调函数，而是在time毫秒后才执行，也就是在周期的最后执行。
 *                      在持续触发事件的这段事件内也是每time毫秒会执行一次回调函数（区别是在每个周期结束后才开始执行）。
 *                      也就是说在持续触发事件的最后一次会触发执行回调函数（但不会立刻执行）
 *
 *
 * */
export function throttle(callback, time, immediate) {
  let previous = 0;
  let timeout = null;
  return function() {
    const context = this;
    const args = arguments;

    if (immediate) {
      // 立即执行
      const current = Date.now();
      if (current - previous > time) {
        callback.apply(context, args);
        previous = current;
      }
    } else {
      // 非立即执行
      if (!timeout) {
        timeout = setTimeout(function() {
          callback.apply(context, args);
          timeout = null;
        }, time);
      }
    }
  };
}

/*
 * debounce(callback, time, immediate) 防抖函数
 * @param {Function} callback 需要防抖的业务回调函数
 * @param {Number} time 防抖的周期，单位是ms，即在触发事件后在time毫秒内只能执行一次，如果在time毫秒内再次触发事件则会重新计时。（可以理解为持续频繁触发事件时只能执行一次回调函数，而节流可能会触发多次）
 * @param {Boolean} immediate 是否立即执行回调函数。
 *
 *
 * */

export function debounce(callback, time, immediate) {
  let timeout = null;
  return function() {
    const context = this;
    const args = arguments;
    if (timeout) clearTimeout(timeout);

    // 立即执行
    if (immediate) {
      if (!timeout) {
        callback.apply(context, args);
      }
      timeout = setTimeout(function() {
        timeout = null;
      }, time);
    }

    // 非立即执行
    else {
      timeout = setTimeout(function() {
        callback.apply(context, args);
      }, time);
    }
  };
}

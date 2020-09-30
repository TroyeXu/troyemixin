'use strict';Object.defineProperty(exports,'__esModule',{value:true});var axios=require('axios'),ylFn=require('@troyexu/yl-fn');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var axios__default=/*#__PURE__*/_interopDefaultLegacy(axios);function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}/** @format */
var obj = {
  "zh-hans": "cn",
  "zh-hant": "tw"
};var apiurl = '';
var i18n = null;

var initFn = function initFn(i18n, baseUrl) {
  apiurl = baseUrl;
};

var service = axios__default['default'].create({
  baseURL: apiurl,
  timeout: 5000
}); // request interceptor

service.interceptors.request.use(function (config) {
  config.headers['Authorization'] = "Bearer ".concat(ylFn.getLocalStorage('token'));
  return config;
}, function (error) {
  // Do something with request error
  Promise.reject(error);
});
service.interceptors.request.use(function (config) {
  var addOption = {
    lang: obj[ylFn.getLocalStorage('lang')],
    device: 'mobile'
  };
  config.data = Object.assign(config.data || {}, addOption);
  return config;
}, function (error) {
  // Do something with request error
  Promise.reject(error);
}); // response interceptor

service.interceptors.response.use( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response) {
    var resData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            resData = response.data;
            _context.t0 = resData.code;
            _context.next = _context.t0 === 1012 ? 4 : _context.t0 === 2026 ? 6 : _context.t0 === 2009 ? 8 : _context.t0 === 2034 ? 8 : _context.t0 === 1010 ? 10 : 13;
            break;

          case 4:
            resData.codeMsg = resData.data[0];
            return _context.abrupt("break", 15);

          case 6:
            resData.codeMsg = resData.message;
            return _context.abrupt("break", 15);

          case 8:
            resData.codeMsg = i18n.tc('errorMsg.__2034') + parseInt(resData.data.customer_dama);
            return _context.abrupt("break", 15);

          case 10:
            resData.codeMsg = resData.message;
            window.location = '/#/login';
            return _context.abrupt("break", 15);

          case 13:
            resData.codeMsg = i18n.tc('errorMsg.__' + resData.code) || i18n.tc('errorMsg.__2009');
            return _context.abrupt("break", 15);

          case 15:
            return _context.abrupt("return", response);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(error) {
    var errData;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            errData = error.response;
            errData.code = error.response.status;
            errData.codeMsg = i18n.tc('errorCode.__' + errData.status) || i18n.tc('errorCode.__1000');
            return _context2.abrupt("return", Promise.reject(errData));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());exports.initFn=initFn;exports.service=service;
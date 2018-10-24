'use strict';

var _path = require('path');

var _util = require('util');

var _fs = require('fs');

var _querystring = require('querystring');

var qs = _interopRequireWildcard(_querystring);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _util.promisify)(_fs.readFile)((0, _path.resolve)(__dirname, '../package.json')).then(function (data) {
    data = JSON.stringify(data);
    console.log(data.name);

    (0, _fs.writeFileSync)((0, _path.resolve)(__dirname, './name'), String(data.name), 'utf8');
});
//# sourceMappingURL=index.js.map
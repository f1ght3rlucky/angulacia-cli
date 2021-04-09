"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generator = void 0;
var mkdirp = require('mkdirp');
var Generator = /** @class */ (function () {
    function Generator() {
        // Basic schema of folder structure.
        this.structure = {
            'core': ['guards', 'interceptors', 'models', 'services'],
            'modules': ['index'],
            'shared': ['components', 'libs']
        };
    }
    /**
     * Generate folder structure.
     *
     * @returns void
     */
    Generator.prototype.generate = function () {
        for (var _i = 0, _a = Object.entries(this.structure); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            for (var _c = 0, _d = Object.entries(value); _c < _d.length; _c++) {
                var _e = _d[_c], keySecond = _e[0], valueSecond = _e[1];
                mkdirp(key + '/' + valueSecond);
            }
        }
        console.log('You have successfully created the folders');
    };
    return Generator;
}());
exports.Generator = Generator;

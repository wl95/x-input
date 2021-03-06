'use strict';

var _Input = require('./components/Input');

var _NumberInput = require('./components/NumberInput');

var _NumberInput2 = _interopRequireDefault(_NumberInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-Plugin/x-seed
 * User: 田想兵
 * Date: 2017-05-14
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
module.exports = { NumberInput: _NumberInput2.default, Base: _Input.Base, formatThousandthNumber: _Input.formatThousandthNumber, FormatContainer: _Input.FormatContainer, Input: _Input.Input, NumericInput: _Input.NumericInput, InterInput: _Input.InterInput, PosInterInput: _Input.PosInterInput, LetterInput: _Input.LetterInput, ThousandInput: _Input.ThousandInput, InputContainer: _Input.InputContainer }; //使用module.exports时，从es6到es5生成的dist不会出现export.default的问题.
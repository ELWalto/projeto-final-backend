"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCpf = void 0;
const class_validator_1 = require("class-validator");
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
function IsCpf() {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'cpf',
            target: object.constructor,
            propertyName: propertyName,
            options: {
                message: 'CPF must be valid.',
            },
            validator: {
                validate(value) {
                    return cpf_cnpj_validator_1.cpf.isValid(value);
                },
            },
        });
    };
}
exports.IsCpf = IsCpf;
//# sourceMappingURL=cpf.decorator.js.map
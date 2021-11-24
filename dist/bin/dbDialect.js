"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dbDialect(dialect) {
    if (dialect == 'mysql') {
        return 'mysql';
    }
    else {
        return 'mariadb';
    }
}
exports.default = dbDialect;
//# sourceMappingURL=dbDialect.js.map
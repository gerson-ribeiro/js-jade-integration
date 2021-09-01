const {
    default: XHRManager,
} = require("./src/components/client-manager/XHRManager");
const {
    default: XHRServices,
} = require("./src/components/http-client/XHRServices");
const { QueryFormatter } = require("./src/uteis/QueryFormatter");
const { default: StorageService } = require("./src/uteis/StorageService");
const { StringNormalize } = require("./src/uteis/StringNormalizer");

module.exports = {
    XHRServices: XHRServices,
    XHRManager: XHRManager,
    utils: {
        query_formatter: QueryFormatter,
        storage_service: StorageService,
        string_normalize: StringNormalize,
    },
};

import { StringNormalize } from "./StringNormalizer";

/**
 * This Feature turns a Object into Query Parameters String to send to your server
 *
 * @param {Object} obj Object to serialize
 * @returns a string with all properties in queryParams
 */
export const QueryFormatter = (obj) => {
    var str = [];
    for (var p in obj) {
        if (typeof obj[p] === "object") {
            for (const key in obj[p]) {
                if (p == "resource") continue;
                if (Object.prototype.hasOwnProperty.call(obj[p], key)) {
                    const element = obj[p][key];

                    if (QueryFormatter(obj[p]))
                        str.push(
                            StringNormalize(p) + "." + QueryFormatter(obj[p])
                        );
                }
            }
        } else if (obj.hasOwnProperty(p)) {
            if (StringNormalize(obj[p]))
                str.push(StringNormalize(p) + "=" + StringNormalize(obj[p]));
        }
    }
    var results = str.join("&");

    return results;
};

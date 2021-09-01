export const StringNormalize = (text) => {
    text = text.toLowerCase();
    text = text.replace(new RegExp("[ÁÀÂÃ]", "gi"), "a");
    text = text.replace(new RegExp("[ÉÈÊ]", "gi"), "e");
    text = text.replace(new RegExp("[ÍÌÎ]", "gi"), "i");
    text = text.replace(new RegExp("[ÓÒÔÕ]", "gi"), "o");
    text = text.replace(new RegExp("[ÚÙÛ]", "gi"), "u");
    text = text.replace(new RegExp("[Ç]", "gi"), "c");
    text = text.replace(/[^a-z0-9 -]/g, "");
    return text;
};

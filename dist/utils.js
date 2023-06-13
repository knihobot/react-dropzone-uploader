var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
export var formatBytes = function (b) {
    var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var l = 0;
    var n = b;
    while (n >= 1024) {
        n /= 1024;
        l += 1;
    }
    return "".concat(n.toFixed(n >= 10 || l < 1 ? 0 : 1)).concat(units[l]);
};
export var formatDuration = function (seconds) {
    var date = new Date(0);
    date.setSeconds(seconds);
    var dateString = date.toISOString().slice(11, 19);
    if (seconds < 3600)
        return dateString.slice(3);
    return dateString;
};
// adapted from: https://github.com/okonet/attr-accept/blob/master/src/index.js
// returns true if file.name is empty and accept string is something like ".csv",
// because file comes from dataTransferItem for drag events, and
// dataTransferItem.name is always empty
export var accepts = function (file, accept) {
    if (!accept || accept === '*')
        return true;
    var mimeType = file.type || '';
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    return accept
        .split(',')
        .map(function (t) { return t.trim(); })
        .some(function (type) {
        if (type.charAt(0) === '.') {
            return file.name === undefined || file.name.toLowerCase().endsWith(type.toLowerCase());
        }
        else if (type.endsWith('/*')) {
            // this is something like an image/* mime type
            return baseMimeType === type.replace(/\/.*$/, '');
        }
        return mimeType === type;
    });
};
export var resolveValue = function (value) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (typeof value === 'function')
        return value.apply(void 0, __spreadArray([], __read(args), false));
    return value;
};
export var defaultClassNames = {
    dropzone: 'dzu-dropzone',
    dropzoneActive: 'dzu-dropzoneActive',
    dropzoneReject: 'dzu-dropzoneActive',
    dropzoneDisabled: 'dzu-dropzoneDisabled',
    input: 'dzu-input',
    inputLabel: 'dzu-inputLabel',
    inputLabelWithFiles: 'dzu-inputLabelWithFiles',
    preview: 'dzu-previewContainer',
    previewImage: 'dzu-previewImage',
    submitButtonContainer: 'dzu-submitButtonContainer',
    submitButton: 'dzu-submitButton',
};
export var mergeStyles = function (classNames, styles, addClassNames) {
    var e_1, _a, e_2, _b, e_3, _c;
    var args = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    var resolvedClassNames = __assign({}, defaultClassNames);
    var resolvedStyles = __assign({}, styles);
    try {
        for (var _d = __values(Object.entries(classNames)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var _f = __read(_e.value, 2), key = _f[0], value = _f[1];
            resolvedClassNames[key] = resolveValue.apply(void 0, __spreadArray([value], __read(args), false));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var _g = __values(Object.entries(addClassNames)), _h = _g.next(); !_h.done; _h = _g.next()) {
            var _j = __read(_h.value, 2), key = _j[0], value = _j[1];
            resolvedClassNames[key] = "".concat(resolvedClassNames[key], " ").concat(resolveValue.apply(void 0, __spreadArray([value], __read(args), false)));
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
        }
        finally { if (e_2) throw e_2.error; }
    }
    try {
        for (var _k = __values(Object.entries(styles)), _l = _k.next(); !_l.done; _l = _k.next()) {
            var _m = __read(_l.value, 2), key = _m[0], value = _m[1];
            resolvedStyles[key] = resolveValue.apply(void 0, __spreadArray([value], __read(args), false));
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return { classNames: resolvedClassNames, styles: resolvedStyles };
};
export var getFilesFromEvent = function (event) {
    var items = null;
    if ('dataTransfer' in event) {
        var dt = event.dataTransfer;
        // NOTE: Only the 'drop' event has access to DataTransfer.files, otherwise it will always be empty
        if ('files' in dt && dt.files.length) {
            items = dt.files;
        }
        else if (dt.items && dt.items.length) {
            items = dt.items;
        }
    }
    else if (event.target && event.target.files) {
        items = event.target.files;
    }
    return Array.prototype.slice.call(items);
};

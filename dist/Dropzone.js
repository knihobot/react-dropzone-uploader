var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import React from 'react';
import PropTypes from 'prop-types';
import LayoutDefault from './Layout';
import InputDefault from './Input';
import PreviewDefault from './Preview';
import SubmitButtonDefault from './SubmitButton';
import { formatBytes, formatDuration, accepts, resolveValue, mergeStyles, defaultClassNames, getFilesFromEvent as defaultGetFilesFromEvent, } from './utils';
var Dropzone = /** @class */ (function (_super) {
    __extends(Dropzone, _super);
    function Dropzone(props) {
        var _this = _super.call(this, props) || this;
        _this.forceUpdate = function () {
            if (_this.mounted)
                _super.prototype.forceUpdate.call(_this);
        };
        _this.getFilesFromEvent = function () {
            return _this.props.getFilesFromEvent || defaultGetFilesFromEvent;
        };
        _this.getDataTransferItemsFromEvent = function () {
            return _this.props.getDataTransferItemsFromEvent || defaultGetFilesFromEvent;
        };
        _this.handleDragEnter = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var dragged;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        e.stopPropagation();
                        return [4 /*yield*/, this.getDataTransferItemsFromEvent()(e)];
                    case 1:
                        dragged = (_a.sent());
                        this.setState({ active: true, dragged: dragged });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handleDragOver = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var dragged;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        e.stopPropagation();
                        clearTimeout(this.dragTimeoutId);
                        return [4 /*yield*/, this.getDataTransferItemsFromEvent()(e)];
                    case 1:
                        dragged = _a.sent();
                        this.setState({ active: true, dragged: dragged });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handleDragLeave = function (e) {
            e.preventDefault();
            e.stopPropagation();
            // prevents repeated toggling of `active` state when file is dragged over children of uploader
            // see: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
            _this.dragTimeoutId = window.setTimeout(function () { return _this.setState({ active: false, dragged: [] }); }, 150);
        };
        _this.handleDrop = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var files;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        e.stopPropagation();
                        this.setState({ active: false, dragged: [] });
                        return [4 /*yield*/, this.getFilesFromEvent()(e)];
                    case 1:
                        files = (_a.sent());
                        this.handleFiles(files);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handleDropDisabled = function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.setState({ active: false, dragged: [] });
        };
        _this.handleChangeStatus = function (fileWithMeta) {
            if (!_this.props.onChangeStatus)
                return;
            var _a = (_this.props.onChangeStatus(fileWithMeta, fileWithMeta.meta.status, _this.files) || {}).meta, meta = _a === void 0 ? {} : _a;
            if (meta) {
                delete meta.status;
                fileWithMeta.meta = __assign(__assign({}, fileWithMeta.meta), meta);
                _this.forceUpdate();
            }
        };
        _this.handleSubmit = function (files) {
            if (_this.props.onSubmit)
                _this.props.onSubmit(files, __spreadArray([], __read(_this.files), false));
        };
        _this.handleCancel = function (fileWithMeta) {
            if (fileWithMeta.meta.status !== 'uploading')
                return;
            fileWithMeta.meta.status = 'aborted';
            if (fileWithMeta.xhr)
                fileWithMeta.xhr.abort();
            _this.handleChangeStatus(fileWithMeta);
            _this.forceUpdate();
        };
        _this.handleRemove = function (fileWithMeta) {
            var index = _this.files.findIndex(function (f) { return f === fileWithMeta; });
            if (index !== -1) {
                URL.revokeObjectURL(fileWithMeta.meta.previewUrl || '');
                fileWithMeta.meta.status = 'removed';
                _this.handleChangeStatus(fileWithMeta);
                _this.files.splice(index, 1);
                _this.forceUpdate();
            }
        };
        _this.handleRestart = function (fileWithMeta) {
            if (!_this.props.getUploadParams)
                return;
            if (fileWithMeta.meta.status === 'ready')
                fileWithMeta.meta.status = 'started';
            else
                fileWithMeta.meta.status = 'restarted';
            _this.handleChangeStatus(fileWithMeta);
            fileWithMeta.meta.status = 'getting_upload_params';
            fileWithMeta.meta.percent = 0;
            _this.handleChangeStatus(fileWithMeta);
            _this.forceUpdate();
            _this.uploadFile(fileWithMeta);
        };
        // expects an array of File objects
        _this.handleFiles = function (files) {
            files.forEach(function (f, i) { return _this.handleFile(f, "".concat(new Date().getTime(), "-").concat(i)); });
            var current = _this.dropzone.current;
            if (current)
                setTimeout(function () { return current.scroll({ top: current.scrollHeight, behavior: 'smooth' }); }, 150);
        };
        _this.handleFile = function (file, id) { return __awaiter(_this, void 0, void 0, function () {
            var name, size, type, lastModified, _a, minSizeBytes, maxSizeBytes, maxFiles, accept, getUploadParams, autoUpload, validate, uploadedDate, lastModifiedDate, fileWithMeta, error;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        name = file.name, size = file.size, type = file.type, lastModified = file.lastModified;
                        _a = this.props, minSizeBytes = _a.minSizeBytes, maxSizeBytes = _a.maxSizeBytes, maxFiles = _a.maxFiles, accept = _a.accept, getUploadParams = _a.getUploadParams, autoUpload = _a.autoUpload, validate = _a.validate;
                        uploadedDate = new Date().toISOString();
                        lastModifiedDate = lastModified && new Date(lastModified).toISOString();
                        fileWithMeta = {
                            file: file,
                            meta: { name: name, size: size, type: type, lastModifiedDate: lastModifiedDate, uploadedDate: uploadedDate, percent: 0, id: id },
                        };
                        // firefox versions prior to 53 return a bogus mime type for file drag events,
                        // so files with that mime type are always accepted
                        if (file.type !== 'application/x-moz-file' && !accepts(file, accept)) {
                            fileWithMeta.meta.status = 'rejected_file_type';
                            this.handleChangeStatus(fileWithMeta);
                            return [2 /*return*/];
                        }
                        if (this.files.length >= maxFiles) {
                            fileWithMeta.meta.status = 'rejected_max_files';
                            this.handleChangeStatus(fileWithMeta);
                            return [2 /*return*/];
                        }
                        fileWithMeta.cancel = function () { return _this.handleCancel(fileWithMeta); };
                        fileWithMeta.remove = function () { return _this.handleRemove(fileWithMeta); };
                        fileWithMeta.restart = function () { return _this.handleRestart(fileWithMeta); };
                        fileWithMeta.meta.status = 'preparing';
                        this.files.push(fileWithMeta);
                        this.handleChangeStatus(fileWithMeta);
                        this.forceUpdate();
                        if (size < minSizeBytes || size > maxSizeBytes) {
                            fileWithMeta.meta.status = 'error_file_size';
                            this.handleChangeStatus(fileWithMeta);
                            this.forceUpdate();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.generatePreview(fileWithMeta)];
                    case 1:
                        _b.sent();
                        if (validate) {
                            error = validate(fileWithMeta);
                            if (error) {
                                fileWithMeta.meta.status = 'error_validation';
                                fileWithMeta.meta.validationError = error; // usually a string, but doesn't have to be
                                this.handleChangeStatus(fileWithMeta);
                                this.forceUpdate();
                                return [2 /*return*/];
                            }
                        }
                        if (getUploadParams) {
                            if (autoUpload) {
                                this.uploadFile(fileWithMeta);
                                fileWithMeta.meta.status = 'getting_upload_params';
                            }
                            else {
                                fileWithMeta.meta.status = 'ready';
                            }
                        }
                        else {
                            fileWithMeta.meta.status = 'done';
                        }
                        this.handleChangeStatus(fileWithMeta);
                        this.forceUpdate();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.generatePreview = function (fileWithMeta) { return __awaiter(_this, void 0, void 0, function () {
            var type, file, isImage, isAudio, isVideo, objectUrl, fileCallbackToPromise, img, audio, video, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        type = fileWithMeta.meta.type, file = fileWithMeta.file;
                        isImage = type.startsWith('image/');
                        isAudio = type.startsWith('audio/');
                        isVideo = type.startsWith('video/');
                        if (!isImage && !isAudio && !isVideo)
                            return [2 /*return*/];
                        objectUrl = URL.createObjectURL(file);
                        fileCallbackToPromise = function (fileObj) {
                            return Promise.race([
                                new Promise(function (resolve) {
                                    if (fileObj instanceof HTMLImageElement)
                                        fileObj.onload = resolve;
                                    else
                                        fileObj.onloadedmetadata = resolve;
                                }),
                                new Promise(function (_, reject) {
                                    setTimeout(reject, 1000);
                                }),
                            ]);
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        if (!isImage) return [3 /*break*/, 3];
                        img = new Image();
                        img.src = objectUrl;
                        fileWithMeta.meta.previewUrl = objectUrl;
                        return [4 /*yield*/, fileCallbackToPromise(img)];
                    case 2:
                        _a.sent();
                        fileWithMeta.meta.width = img.width;
                        fileWithMeta.meta.height = img.height;
                        _a.label = 3;
                    case 3:
                        if (!isAudio) return [3 /*break*/, 5];
                        audio = new Audio();
                        audio.src = objectUrl;
                        return [4 /*yield*/, fileCallbackToPromise(audio)];
                    case 4:
                        _a.sent();
                        fileWithMeta.meta.duration = audio.duration;
                        _a.label = 5;
                    case 5:
                        if (!isVideo) return [3 /*break*/, 7];
                        video = document.createElement('video');
                        video.src = objectUrl;
                        return [4 /*yield*/, fileCallbackToPromise(video)];
                    case 6:
                        _a.sent();
                        fileWithMeta.meta.duration = video.duration;
                        fileWithMeta.meta.videoWidth = video.videoWidth;
                        fileWithMeta.meta.videoHeight = video.videoHeight;
                        _a.label = 7;
                    case 7:
                        if (!isImage)
                            URL.revokeObjectURL(objectUrl);
                        return [3 /*break*/, 9];
                    case 8:
                        e_1 = _a.sent();
                        URL.revokeObjectURL(objectUrl);
                        return [3 /*break*/, 9];
                    case 9:
                        this.forceUpdate();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.uploadFile = function (fileWithMeta) { return __awaiter(_this, void 0, void 0, function () {
            var getUploadParams, params, e_2, url, _a, method, body, _b, fields, _c, headers, _d, extraMeta, xhr, formData, _e, _f, field, _g, _h, header;
            var e_3, _j, e_4, _k;
            var _this = this;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        getUploadParams = this.props.getUploadParams;
                        if (!getUploadParams)
                            return [2 /*return*/];
                        params = null;
                        _l.label = 1;
                    case 1:
                        _l.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, getUploadParams(fileWithMeta)];
                    case 2:
                        params = _l.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _l.sent();
                        if (e_2 instanceof Error) {
                            console.error('Error Upload Params', e_2.stack);
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        if (params === null)
                            return [2 /*return*/];
                        url = params.url, _a = params.method, method = _a === void 0 ? 'POST' : _a, body = params.body, _b = params.fields, fields = _b === void 0 ? {} : _b, _c = params.headers, headers = _c === void 0 ? {} : _c, _d = params.meta, extraMeta = _d === void 0 ? {} : _d;
                        delete extraMeta.status;
                        if (!url) {
                            fileWithMeta.meta.status = 'error_upload_params';
                            this.handleChangeStatus(fileWithMeta);
                            this.forceUpdate();
                            return [2 /*return*/];
                        }
                        xhr = new XMLHttpRequest();
                        formData = new FormData();
                        xhr.open(method, url, true);
                        try {
                            for (_e = __values(Object.keys(fields)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                field = _f.value;
                                formData.append(field, fields[field]);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_j = _e.return)) _j.call(_e);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                        try {
                            for (_g = __values(Object.keys(headers)), _h = _g.next(); !_h.done; _h = _g.next()) {
                                header = _h.value;
                                xhr.setRequestHeader(header, headers[header]);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_h && !_h.done && (_k = _g.return)) _k.call(_g);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        fileWithMeta.meta = __assign(__assign({}, fileWithMeta.meta), extraMeta);
                        // update progress (can be used to show progress indicator)
                        xhr.upload.addEventListener('progress', function (e) {
                            fileWithMeta.meta.percent = (e.loaded * 100.0) / e.total || 100;
                            _this.forceUpdate();
                        });
                        xhr.addEventListener('readystatechange', function () {
                            // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
                            if (xhr.readyState !== 2 && xhr.readyState !== 4)
                                return;
                            if (xhr.status === 0 && fileWithMeta.meta.status !== 'aborted') {
                                fileWithMeta.meta.status = 'exception_upload';
                                _this.handleChangeStatus(fileWithMeta);
                                _this.forceUpdate();
                            }
                            if (xhr.status > 0 && xhr.status < 400) {
                                fileWithMeta.meta.percent = 100;
                                if (xhr.readyState === 2)
                                    fileWithMeta.meta.status = 'headers_received';
                                if (xhr.readyState === 4)
                                    fileWithMeta.meta.status = 'done';
                                _this.handleChangeStatus(fileWithMeta);
                                _this.forceUpdate();
                            }
                            if (xhr.status >= 400 && fileWithMeta.meta.status !== 'error_upload') {
                                fileWithMeta.meta.status = 'error_upload';
                                _this.handleChangeStatus(fileWithMeta);
                                _this.forceUpdate();
                            }
                        });
                        formData.append('file', fileWithMeta.file);
                        if (this.props.timeout)
                            xhr.timeout = this.props.timeout;
                        xhr.send(body || formData);
                        fileWithMeta.xhr = xhr;
                        fileWithMeta.meta.status = 'uploading';
                        this.handleChangeStatus(fileWithMeta);
                        this.forceUpdate();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.state = {
            active: false,
            dragged: [],
        };
        _this.files = [];
        _this.mounted = true;
        _this.dropzone = React.createRef();
        return _this;
    }
    Dropzone.prototype.componentDidMount = function () {
        if (this.props.initialFiles)
            this.handleFiles(this.props.initialFiles);
    };
    Dropzone.prototype.componentDidUpdate = function (prevProps) {
        var initialFiles = this.props.initialFiles;
        if (prevProps.initialFiles !== initialFiles && initialFiles)
            this.handleFiles(initialFiles);
    };
    Dropzone.prototype.componentWillUnmount = function () {
        var e_5, _a;
        this.mounted = false;
        try {
            for (var _b = __values(this.files), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fileWithMeta = _c.value;
                this.handleCancel(fileWithMeta);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    Dropzone.prototype.render = function () {
        var _a = this.props, accept = _a.accept, multiple = _a.multiple, maxFiles = _a.maxFiles, minSizeBytes = _a.minSizeBytes, maxSizeBytes = _a.maxSizeBytes, onSubmit = _a.onSubmit, getUploadParams = _a.getUploadParams, disabled = _a.disabled, canCancel = _a.canCancel, canRemove = _a.canRemove, canRestart = _a.canRestart, inputContent = _a.inputContent, inputWithFilesContent = _a.inputWithFilesContent, submitButtonDisabled = _a.submitButtonDisabled, submitButtonContent = _a.submitButtonContent, classNames = _a.classNames, styles = _a.styles, addClassNames = _a.addClassNames, InputComponent = _a.InputComponent, PreviewComponent = _a.PreviewComponent, SubmitButtonComponent = _a.SubmitButtonComponent, LayoutComponent = _a.LayoutComponent;
        var _b = this.state, active = _b.active, dragged = _b.dragged;
        var reject = dragged.some(function (file) { return file.type !== 'application/x-moz-file' && !accepts(file, accept); });
        var extra = { active: active, reject: reject, dragged: dragged, accept: accept, multiple: multiple, minSizeBytes: minSizeBytes, maxSizeBytes: maxSizeBytes, maxFiles: maxFiles };
        var files = __spreadArray([], __read(this.files), false);
        var dropzoneDisabled = resolveValue(disabled, files, extra);
        var _c = mergeStyles(classNames, styles, addClassNames, files, extra), _d = _c.classNames, dropzoneClassName = _d.dropzone, dropzoneActiveClassName = _d.dropzoneActive, dropzoneRejectClassName = _d.dropzoneReject, dropzoneDisabledClassName = _d.dropzoneDisabled, inputClassName = _d.input, inputLabelClassName = _d.inputLabel, inputLabelWithFilesClassName = _d.inputLabelWithFiles, previewClassName = _d.preview, previewImageClassName = _d.previewImage, submitButtonContainerClassName = _d.submitButtonContainer, submitButtonClassName = _d.submitButton, _e = _c.styles, dropzoneStyle = _e.dropzone, dropzoneActiveStyle = _e.dropzoneActive, dropzoneRejectStyle = _e.dropzoneReject, dropzoneDisabledStyle = _e.dropzoneDisabled, inputStyle = _e.input, inputLabelStyle = _e.inputLabel, inputLabelWithFilesStyle = _e.inputLabelWithFiles, previewStyle = _e.preview, previewImageStyle = _e.previewImage, submitButtonContainerStyle = _e.submitButtonContainer, submitButtonStyle = _e.submitButton;
        var Input = InputComponent || InputDefault;
        var Preview = PreviewComponent || PreviewDefault;
        var SubmitButton = SubmitButtonComponent || SubmitButtonDefault;
        var Layout = LayoutComponent || LayoutDefault;
        var previews = null;
        if (PreviewComponent !== null) {
            previews = files.map(function (f) {
                return (
                //@ts-ignore
                React.createElement(Preview, { className: previewClassName, imageClassName: previewImageClassName, style: previewStyle, imageStyle: previewImageStyle, key: f.meta.id, fileWithMeta: f, meta: __assign({}, f.meta), isUpload: Boolean(getUploadParams), canCancel: resolveValue(canCancel, files, extra), canRemove: resolveValue(canRemove, files, extra), canRestart: resolveValue(canRestart, files, extra), files: files, extra: extra }));
            });
        }
        var input = InputComponent !== null ? (
        //@ts-ignore
        React.createElement(Input, { className: inputClassName, labelClassName: inputLabelClassName, labelWithFilesClassName: inputLabelWithFilesClassName, style: inputStyle, labelStyle: inputLabelStyle, labelWithFilesStyle: inputLabelWithFilesStyle, getFilesFromEvent: this.getFilesFromEvent(), accept: accept, multiple: multiple, disabled: dropzoneDisabled, content: resolveValue(inputContent, files, extra), withFilesContent: resolveValue(inputWithFilesContent, files, extra), onFiles: this.handleFiles, files: files, extra: extra })) : null;
        var submitButton = onSubmit && SubmitButtonComponent !== null ? (
        //@ts-ignore
        React.createElement(SubmitButton, { className: submitButtonContainerClassName, buttonClassName: submitButtonClassName, style: submitButtonContainerStyle, buttonStyle: submitButtonStyle, disabled: resolveValue(submitButtonDisabled, files, extra), content: resolveValue(submitButtonContent, files, extra), onSubmit: this.handleSubmit, files: files, extra: extra })) : null;
        var className = dropzoneClassName;
        var style = dropzoneStyle;
        if (dropzoneDisabled) {
            className = "".concat(className, " ").concat(dropzoneDisabledClassName);
            style = __assign(__assign({}, (style || {})), (dropzoneDisabledStyle || {}));
        }
        else if (reject) {
            className = "".concat(className, " ").concat(dropzoneRejectClassName);
            style = __assign(__assign({}, (style || {})), (dropzoneRejectStyle || {}));
        }
        else if (active) {
            className = "".concat(className, " ").concat(dropzoneActiveClassName);
            style = __assign(__assign({}, (style || {})), (dropzoneActiveStyle || {}));
        }
        return (
        //@ts-ignore
        React.createElement(Layout, { input: input, previews: previews, submitButton: submitButton, dropzoneProps: {
                ref: this.dropzone,
                className: className,
                style: style,
                onDragEnter: this.handleDragEnter,
                onDragOver: this.handleDragOver,
                onDragLeave: this.handleDragLeave,
                onDrop: dropzoneDisabled ? this.handleDropDisabled : this.handleDrop,
            }, files: files, extra: __assign(__assign({}, extra), { onFiles: this.handleFiles, onCancelFile: this.handleCancel, onRemoveFile: this.handleRemove, onRestartFile: this.handleRestart }) }));
    };
    return Dropzone;
}(React.Component));
Dropzone.defaultProps = {
    accept: '*',
    multiple: true,
    minSizeBytes: 0,
    maxSizeBytes: Number.MAX_SAFE_INTEGER,
    maxFiles: Number.MAX_SAFE_INTEGER,
    autoUpload: true,
    disabled: false,
    canCancel: true,
    canRemove: true,
    canRestart: true,
    inputContent: 'Drag Files or Click to Browse',
    inputWithFilesContent: 'Add Files',
    submitButtonDisabled: false,
    submitButtonContent: 'Submit',
    classNames: {},
    styles: {},
    addClassNames: {},
};
// @ts-ignore
Dropzone.propTypes = {
    onChangeStatus: PropTypes.func,
    getUploadParams: PropTypes.func,
    onSubmit: PropTypes.func,
    getFilesFromEvent: PropTypes.func,
    getDataTransferItemsFromEvent: PropTypes.func,
    accept: PropTypes.string,
    multiple: PropTypes.bool,
    minSizeBytes: PropTypes.number.isRequired,
    maxSizeBytes: PropTypes.number.isRequired,
    maxFiles: PropTypes.number.isRequired,
    validate: PropTypes.func,
    autoUpload: PropTypes.bool,
    timeout: PropTypes.number,
    initialFiles: PropTypes.arrayOf(PropTypes.any),
    /* component customization */
    disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    canCancel: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    canRemove: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    canRestart: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    inputContent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    inputWithFilesContent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    submitButtonDisabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    submitButtonContent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    classNames: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired,
    addClassNames: PropTypes.object.isRequired,
    /* component injection */
    InputComponent: PropTypes.func,
    PreviewComponent: PropTypes.func,
    SubmitButtonComponent: PropTypes.func,
    LayoutComponent: PropTypes.func,
};
export default Dropzone;
export { LayoutDefault as Layout, InputDefault as Input, PreviewDefault as Preview, SubmitButtonDefault as SubmitButton, formatBytes, formatDuration, accepts, defaultClassNames, defaultGetFilesFromEvent as getFilesFromEvent, };

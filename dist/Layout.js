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
import React from 'react';
import PropTypes from 'prop-types';
var Layout = function (props) {
    var input = props.input, previews = props.previews, submitButton = props.submitButton, dropzoneProps = props.dropzoneProps, files = props.files, maxFiles = props.extra.maxFiles;
    return (React.createElement("div", __assign({}, dropzoneProps),
        previews,
        files.length < maxFiles && input,
        files.length > 0 && submitButton));
};
Layout.propTypes = {
    input: PropTypes.node,
    previews: PropTypes.arrayOf(PropTypes.node),
    submitButton: PropTypes.node,
    dropzoneProps: PropTypes.shape({
        ref: PropTypes.any.isRequired,
        className: PropTypes.string.isRequired,
        style: PropTypes.object,
        onDragEnter: PropTypes.func.isRequired,
        onDragOver: PropTypes.func.isRequired,
        onDragLeave: PropTypes.func.isRequired,
        onDrop: PropTypes.func.isRequired,
    }).isRequired,
    files: PropTypes.arrayOf(PropTypes.any).isRequired,
    extra: PropTypes.shape({
        active: PropTypes.bool.isRequired,
        reject: PropTypes.bool.isRequired,
        dragged: PropTypes.arrayOf(PropTypes.any).isRequired,
        accept: PropTypes.string.isRequired,
        multiple: PropTypes.bool.isRequired,
        minSizeBytes: PropTypes.number.isRequired,
        maxSizeBytes: PropTypes.number.isRequired,
        maxFiles: PropTypes.number.isRequired,
        onFiles: PropTypes.func.isRequired,
        onCancelFile: PropTypes.func.isRequired,
        onRemoveFile: PropTypes.func.isRequired,
        onRestartFile: PropTypes.func.isRequired,
    }).isRequired,
};
export default Layout;

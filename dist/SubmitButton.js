import React from 'react';
import PropTypes from 'prop-types';
var SubmitButton = function (props) {
    var className = props.className, buttonClassName = props.buttonClassName, style = props.style, buttonStyle = props.buttonStyle, disabled = props.disabled, content = props.content, onSubmit = props.onSubmit, files = props.files;
    var _disabled = files.some(function (f) { return ['preparing', 'getting_upload_params', 'uploading'].includes(f.meta.status); }) ||
        !files.some(function (f) { return ['headers_received', 'done'].includes(f.meta.status); });
    var handleSubmit = function () {
        onSubmit(files.filter(function (f) { return ['headers_received', 'done'].includes(f.meta.status); }));
    };
    return (React.createElement("div", { className: className, style: style },
        React.createElement("button", { className: buttonClassName, style: buttonStyle, onClick: handleSubmit, disabled: disabled || _disabled }, content)));
};
SubmitButton.propTypes = {
    className: PropTypes.string,
    buttonClassName: PropTypes.string,
    style: PropTypes.object,
    buttonStyle: PropTypes.object,
    disabled: PropTypes.bool.isRequired,
    content: PropTypes.node,
    onSubmit: PropTypes.func.isRequired,
    files: PropTypes.arrayOf(PropTypes.object).isRequired,
    extra: PropTypes.shape({
        active: PropTypes.bool.isRequired,
        reject: PropTypes.bool.isRequired,
        dragged: PropTypes.arrayOf(PropTypes.any).isRequired,
        accept: PropTypes.string.isRequired,
        multiple: PropTypes.bool.isRequired,
        minSizeBytes: PropTypes.number.isRequired,
        maxSizeBytes: PropTypes.number.isRequired,
        maxFiles: PropTypes.number.isRequired,
    }).isRequired,
};
export default SubmitButton;

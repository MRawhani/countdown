import React from "react";

export default function FormFeild({ id, formData, change, isError }) {
  const showMessage = () => {
    // let errorMessage = null;
    // let isValid = true;
    let error = { errorMessage: null, isValid: true };

    if (formData.validation && !formData.valid) {
      error.isValid = false;
      error.errorMessage = (
        <div className="error_label">{formData.validationMessage}</div>
      );
    }
    return error;
  };
  const renderTemplate = () => {
    let formTemplate = null;

    switch (formData.element) {
      case "input":
        formTemplate = (
          <div className="form__block">
            <div
              className={`form__group ${formData.subLable ? "align-left" : ""}`}
            >
              {formData.headLabel ? (
                <div className="headLabel">{formData.headLabel}</div>
              ) : null}
              <label className="subLabel">{formData.subLable}</label>
              <input
                {...formData.config}
                value={formData.value}
                onBlur={(event) => change({ event, id, blur: true })}
                onChange={(event) => change({ event, id, blur: true })}
                // onChange={event => change({ event, id })}
                className={`form__input ${
                  formData.touched
                    ? showMessage().isValid
                      ? " form__input__success"
                      : " form__input__error"
                    : "form__input__normal"
                }`}
                step={formData.step}
                id={id}
              />
              {!formData.dontShowLable && (
                <div className="flex-row">
                  {!formData.dontShowLable && (
                    <label htmlFor={id} className="form__label">
                      {formData.config.placeholder}
                    </label>
                  )}

                  <span className="form__error">
                    {" "}
                    {showMessage().errorMessage}
                  </span>
                </div>
              )}{" "}
            </div>

            {/* <TextField
             error={error}
              id="standard-name"
              label= 'ايميل'
              value={formData.value}
              onChange={event => change({ event, id, blur: true })}
            
              helperText={formData.validationMessage}
            /> */}
          </div>
        );
        break;

        case "file":
        formTemplate = (
          <div className="form__block">
            <div
              className={`form__group ${formData.subLable ? "align-left" : ""}`}
            >
              {formData.headLabel ? (
                <div className="headLabel">{formData.headLabel}</div>
              ) : null}
              <label className="subLabel">{formData.subLable}</label>
              <input
                {...formData.config}
                
                onChange={(event) => change({ event, id, blur: true })}
                // onChange={event => change({ event, id })}
                className={`form__input ${
                  formData.touched
                    ? showMessage().isValid
                      ? " form__input__success"
                      : " form__input__error"
                    : "form__input__normal"
                }`}
                step={formData.step}
                id={id}
              />
              {!formData.dontShowLable && (
                <div className="flex-row">
                  {!formData.dontShowLable && (
                    <label htmlFor={id} className="form__label">
                      {formData.config.placeholder}
                    </label>
                  )}

                  <span className="form__error">
                    {" "}
                    {showMessage().errorMessage}
                  </span>
                </div>
              )}{" "}
            </div>

          </div>
        );
        break;

      case "textarea":
        formTemplate = (
          <div className="form__block">
            <div
              className={`form__group ${formData.subLable ? "align-left" : ""}`}
            >
              {formData.headLabel ? (
                <div className="headLabel">{formData.headLabel}</div>
              ) : null}
                 {formData.subheadLable1 ? (
                <div className="subheadLable">{formData.subheadLable1}</div>
              ) : null}
              {formData.subheadLable2 ? (
                <div className="subheadLable grey">{formData.subheadLable2}</div>
              ) : null}
              <label className="subLabel">{formData.subLable}</label>
              <textarea
                {...formData.config}
                value={formData.value}
                onBlur={(event) => change({ event, id, blur: true })}
                onChange={(event) => change({ event, id, blur: true })}
                className={`form__input ${
                  formData.touched
                    ? showMessage().isValid
                      ? " form__input__success"
                      : " form__input__error"
                    : "form__input__normal"
                }`}
                step={formData.step}
                id={id}
              ></textarea>
              {!formData.dontShowLable && !formData.subheadLable1 && (
                <div className="flex-row">
                  {!formData.dontShowLable && (
                    <label htmlFor={id} className="form__label big">
                      {formData.config.placeholder}
                    </label>
                  )}

                  <span className="form__error">
                    {" "}
                    {showMessage().errorMessage}
                  </span>
                </div>
              )}{" "}
            </div>

            {/* <TextField
             error={error}
              id="standard-name"
              label= 'ايميل'
              value={formData.value}
              onChange={event => change({ event, id, blur: true })}
            
              helperText={formData.validationMessage}
            /> */}
          </div>
        );
        break;

      case "date":
        formTemplate = !formData.config.hidden && (
          <div className="form__block">
            {showMessage().errorMessage}
            <div className="form__group">
              {formData.dontShowLable ? (
                <div className="label_inputs">{formData.config.label}</div>
              ) : null}
              <input
                type="date"
                {...formData.config}
                className={`form__input ${
                  formData.touched
                    ? showMessage().isValid
                      ? " form__input__success"
                      : " form__input__error"
                    : "form__input__normal"
                }`}
                id={id}
                value={formData.value}
                onBlur={(event) => change({ event, id, blur: true })}
                onChange={(event) => change({ event, id, blur: true })}
                min="1930-01-01"
                max="2020-12-31"
              />

              {!formData.dontShowLable && (
                <label htmlFor={id} className="form__label">
                  {formData.config.placeholder}
                </label>
              )}
            </div>
          </div>
        );
        break;
      case "select":
        formTemplate = (
          <div className="form__block">
            <div
              className={`form__group ${
                formData.subLable ? "align-left" : ""
              } `}
            >
              {formData.dontShowLable ? (
                <div className="label_inputs">{formData.config.label}</div>
              ) : null}
              <label className="subLabel">{formData.subLable}</label>
              <select
                style={{ height: "40px" }}
                {...formData.config}
                required
                onBlur={(event) => change({ event, id, blur: true })}
                onChange={(event) => change({ event, id, blur: true })}
                className={`form__input  ${
                  formData.touched
                    ? showMessage().isValid
                      ? " form__input__success"
                      : " form__input__error"
                    : "form__input__normal"
                }`}
                id={id}
              >
                <option disabled selected value>
                  choose
                </option>
                {formData.config.options.map((option, i) => (
                  <option key={option.key} value={option.key}>
                    {option.value}
                  </option>
                ))}
              </select>

              <div className="flex-row">
                {!formData.dontShowLable && (
                  <label htmlFor={id} className="form__label">
                    {formData.config.placeholder}
                  </label>
                )}
                <span className="form__error">
                  {" "}
                  {showMessage().errorMessage}
                </span>
              </div>
            </div>
          </div>
        );
        break;
      default:
        formTemplate = null;
    }
    return formTemplate;
  };
  return <div>{renderTemplate()}</div>;
}

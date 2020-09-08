import React, { Component } from "react";

import FormFeild from "../FormHelpers/FormFeild";

import Form from "../Form";

export default class Step1Form extends Form {
  constructor(props) {
    super(props);
    this.state = {
      formError: false,
      formErrorMessage: "",
      formSuccess: false,
      formPending: false,
      formData: {
        
      
        how_known: {
          element: "select",
          value: "",
          config: {
            name: "how_known",
            options: [
              { value: "عبر الصفحات الرسمية لتيدكس صنعاء في مواقع التواصل الاجتماعي", key: "official accounts" },
              { value: "عبر الواتس اب", key: "whatsapp" },
              { value: "عبر احد اعضاء فريق تيدكس صنعاء", key: "member" },
              { value: "عبر صديق", key: "friend " },
              { value: "اخرى", key: "other" },
            ],
            placeholder: "كيف عرفت عن استمارة التقديم؟*",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:1
        },
    
        how_known_other: {
          element: "input",
          value: "",
          config: {
            name: "how_known_other",
            type: "text",
            placeholder: "اذكرها*",
            hidden:true,
          },
          validation: {
            required: false,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:1
        },
     
    
      },
    };
  }
  emptyErrors = () => {
    //when input change
  };
  postDataToServer = (data) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const url = `${apiUrl}apply/registerNew`;
    console.log(data);

    const otherParams = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    };
    debugger;
    this.setState({ formPending: true });
    fetch(url, otherParams)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success === false || data.ok === false || data.errors) {
          throw new Error(data.errors || "");
        }
        this.setState({
          formPending: false,
          formError: false,
          formSuccess: true,
        });
      })
      .catch((err) => {
        this.setState({
          formPending: false,
          formError: true,
          formSuccess: false,
          formErrorMessage: err[0]
            ? err[0].message
              ? err[0].message
              : "Error! Try Again"
            : "Error! Try Again",
        });
      });
  };
  submitAction = (data,e) => {
    console.log(data);
   // this.postDataToServer(data);
   this.props.nextStep(e,data)
  };
  renderFormFeilds = () => {
    const feilds = Object.keys(this.state.formData);

    return feilds.map(
      (feild, i) =>
        (
          !this.state.formData[feild].config.hidden&&  <FormFeild
            id={feild}
            key={i}
            formData={this.state.formData[feild]}
            change={(element) => this.updateForm(element)}
            isError={this.state.formError}
          />
        )
    );
  };
  render() {
    const {
      formPending,
      formErrorMessage,
      formError,
      formSuccess,
    } = this.state;
    return (
      <form className="form" onSubmit={this.submitForm} action="">
        {formError && (
          <div
            style={{
              backgroundColor: "tomato",
              padding: "20px",
              color: "#fff",
            }}
          >
            {formErrorMessage}
          </div>
        )}
        {formSuccess && (
          <div
            style={{
              backgroundColor: "yellowgreen",
              padding: "20px",
              color: "#fff",
            }}
          >
            Success
          </div>
        )}
        {this.renderFormFeilds()}
        <input
          onClick={this.submitForm}
          type="button"
          disabled={formPending}
          value={`${formPending ? "..." : "الخطوة التالية"}`}
          className="cta-btn cta-btn--filled cta-btn--no-margin cta-btn--small"
        />
      </form>
    );
  }
}

import React, { Component } from "react";

import FormFeild from "../FormHelpers/FormFeild";

import Form from "../Form";

export default class Step3Form extends Form {
  constructor(props) {
    super(props);
    this.state = {
      formError: false,
      formErrorMessage: "",
      formSuccess: false,
      formPending: false,
      formData: {
        about_tedx: {
          element: "textarea",
          value: "",
          config: {
            name: "about_tedx",
            type: "text",
            placeholder: "ماذا تعرف عن تيدكس؟*",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:3

        },
      
        tedx_prev_attendance: {
          element: "select",
          value: "",
          config: {
            name: "tedx_prev_attendance",
            options: [
              { key: "yes", value: "نعم" },
              { key: "no", value: "لا" },
            ],
            placeholder: "هل سبق و ان حضرت احدى فعاليات تيدكس؟*",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2
        },
        
        tedx_prev_info: {
          element: "input",
          value: "",
          config: {
            name: "tedx_prev_info",
            type: "text",
            placeholder: "اذكر اسم الحدث و في اي عام:*",
            hidden:true,
          },
          validation: {
            required: false,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:3
        },
        tedx_prev_member: {
          element: "select",
          value: "",
          config: {
            name: "tedx_prev_member",
            options: [
              { key: "yes", value: "نعم" },
              { key: "no", value: "لا" },
            ],
            placeholder: "هل سبق لك وكنت جزء من فريق  TEDx؟*",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2
        },
        
        tedx_prev_member_info: {
          element: "input",
          value: "",
          config: {
            name: "tedx_prev_member_info",
            type: "text",
            placeholder: "اذكر اسم الحدث و في اي عام:*",
            hidden:true,
          },
          validation: {
            required: false,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:3
        },
        tedx_prev_speaker: {
          element: "select",
          value: "",
          config: {
            name: "tedx_prev_speaker",
            options: [
              { key: "yes", value: "نعم" },
              { key: "no", value: "لا" },
            ],
            placeholder: "هل سبق لك وكنت متحدث ضمن احد منصات تيد / تيد كس؟*",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2
        },
        
        tedx_prev_speaker_idea: {
          element: "textarea",
          value: "",
          config: {
            name: "tedx_prev_speaker_info",
            type: "text",
            placeholder: "ماذا كانت الفكرة أو التجربة التي تحدث عنها؟* ",
            hidden:true,
          },
          validation: {
            required: false,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:3
        },
        tedx_prev_speaker_url: {
          element: "input",
          value: "",
          config: {
            name: "tedx_prev_speaker_info",
            type: "text",
            placeholder: "فضلا قم بوضع رابط الحديث.*",
            hidden:true,
          },
          validation: {
            required: false,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:3
        },
       
     
  
      },
    };
  }
  emptyErrors = () => {
    //when input change
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
           <FormFeild
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

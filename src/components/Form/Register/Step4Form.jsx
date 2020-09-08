import React, { Component } from "react";

import FormFeild from "../FormHelpers/FormFeild";

import Form from "../Form";

export default class Step4Form extends Form {
  constructor(props) {
    super(props);
    this.state = {
      formError: false,
      formErrorMessage: "",
      formSuccess: false,
      formPending: false,
      formData: {
        idea_field: {
          element: "select",
          value: "",
          config: {
            name: "idea_field",
            options: [
              { key: "nature", value: "الطبيعة Nature " },
              { key: "food", value: "الطعام Food" },
              { key: "materials", value: "المواد Materials  " },
              { key: "transport", value: "المواصلات Transport" },

              { key: "energy", value: "الطاقة Energy   " },
            ],
            placeholder: "ضمن  أي من مجالات CountDown تتمحور فكرتك؟*",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step: 2,
        },

        idea_title: {
          element: "input",
          value: "",
          config: {
            name: "idea_title",
            type: "text",
            placeholder: "ماهو عنوان فكرتك في جملة واحدة؟*",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step: 4,
        },
        cv: {
          element: "file",
          value: {},
          config: {
            name: "idea_title",
            type: "file",
            placeholder: "فضلاً ارفق ملف السيرة الذاتية الخاص بك:*",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step: 4,
        },
        speech_info: {
          element: "textarea",
          value: "",
          config: {
            name: "speech_info",
            type: "text",
            placeholder: "فكرة حديثك *",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          subheadLable1:
            "إشرح بصورة واضحة و مختصرة فكرة حديثك في TEDxSana’aCountDown.*",
          subheadLable2:
            "حدثنا قليلاً عن موضوع فكرتك ولماذا تعتقد انها مهمة، تذكر ان اهم شئ لقبول طلبك أن تختار الافكار الخلاقة التي تحقق احد اهداف  TEDxCountDown.",
          step: 4,
        },
        idea_features: {
          element: "textarea",
          value: "",
          config: {
            name: "idea_features",
            type: "text",
            placeholder: "مايميز فكرتك",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          subheadLable1:
            "حدثنا كيف ترتبط فكرة حديثك بمجالات TEDxCountDown؟ وما الذي سيجعل فكرتك تتميز عن بقية الافكار المُقدمة فيCountDown TEDx؟*",
          step: 4,
        },
        attatchments: {
          element: "select",
          value: "",
          config: {
            name: "attatchments",
            options: [
              { key: "yes", value: "نعم" },
              { key: "no", value: "لا" },
            ],
            placeholder: "هل لديك أي مؤيدات لفكرة حديثك أو مرفقات ترغب بمشاركتها؟",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:4
        },
        
        files_to_attach: {
          element: "file",
          value: "",
          config: {
            name: "files_to_attach",
            type: "text",
            placeholder: "قم برفع نسخة منها:*",
            hidden:true,
          },
          validation: {
            required: false,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:4
        },
        addons: {
          element: "textarea",
          value: "",
          config: {
            name: "addons",
            type: "text",
            placeholder: "هل لديك اي اضافة؟ ",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
             step: 4,
        },
      },
    };
  }
  emptyErrors = () => {
    //when input change
  };

  submitAction = (data, e) => {
    console.log(data);
    // this.postDataToServer(data);
    this.props.nextStep(e, data);
  };
  renderFormFeilds = () => {
    const feilds = Object.keys(this.state.formData);

    return feilds.map((feild, i) => (
      <FormFeild
        id={feild}
        key={i}
        formData={this.state.formData[feild]}
        change={(element) => this.updateForm(element)}
        isError={this.state.formError}
      />
    ));
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
          value={`${formPending ? "..." : "تقديم"}`}
          className="cta-btn cta-btn--filled cta-btn--no-margin cta-btn--small"
        />
      </form>
    );
  }
}

import React, { Component } from "react";

import FormFeild from "../FormHelpers/FormFeild";

import Form from "../Form";

export default class Step2Form extends Form {
  constructor(props) {
    super(props);
    this.state = {
      formError: false,
      formErrorMessage: "",
      formSuccess: false,
      formPending: false,
      formData: {
        name: {
          element: "input",
          value: "",
          config: {
            name: "name",
            type: "text",
            placeholder: "اسمك الرباعي*",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2

        },
        age: {
          element: "input",
          value: "",
          config: {
            name: "age",
            type: "number",
            placeholder: "العمر",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2
        },
        gender: {
          element: "select",
          value: "",
          config: {
            name: "gender",
            options: [
              { key: "male", value: "ذكر" },
              { key: "female", value: "انثى" },
            ],
            placeholder: "الجنس",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2
        },
        mobile: {
          element: "input",
          value: "",
          config: {
            name: "mobile",
            type: "number",
            placeholder: "- رقم الهانف النقال:*",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2,
          headLabel:'معلومات التواصل:'
        },
        whatsapp: {
          element: "input",
          value: "",
          config: {
            name: "whatsapp",
            type: "number",
            placeholder: "- رقم  الواتساب:*",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2,
         
        },
        alternative_mobile: {
          element: "input",
          value: "",
          config: {
            name: "alternative_mobile",
            type: "number",
            placeholder: "- رقم هاتف بديل(قريب او صديق):*",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2,
         subLable:'(لا تضيف رقمك الاخر)'
        },
        email: {
          element: "input",
          value: "",
          config: {
            name: "email",
            type: "text",
            placeholder: "ايميلك*",
          },

          validation: {
            required: true,
            email: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2
        },
        facebook_url: {
          element: "input",
          value: "",
          config: {
            name: "facebook_url",
            type: "text",
            placeholder: "- فيسبوك",
          },
          validation: {
            required: false,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2,
          headLabel:'روابط حسابات التواصل ان وجدت:'
        },
        twitter_url: {
          element: "input",
          value: "",
          config: {
            name: "twitter_url",
            type: "text",
            placeholder: "- تويتر",
          },
          validation: {
            required: false,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2,
        },
        linkedin_url: {
          element: "input",
          value: "",
          config: {
            name: "linkedin_url",
            type: "text",
            placeholder: "- لينكد ان",
          },
          validation: {
            required: false,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2,
        },
        other_url: {
          element: "input",
          value: "",
          config: {
            name: "other_url",
            type: "text",
            placeholder: "- رابط اخر",
          },
          validation: {
            required: false,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2,
        },
        qualification: {
          element: "select",
          value: "",
          config: {
            name: "qualification",
            options: [
              { value: "-	ثانوية عامة High School Diploma ", key: "high school" },
              { value: "Diploma -دبلوم", key: "diploma" },
              { value: "-	بكلريوس Bachelor", key: "bachlor" },
              { value: "-	ماجستير /دكتوراة Master/PHD", key: "master-phd" },
              { value: "شهادة فنية او تقنية", key: "tech" },
            ],
            placeholder: "كيف عرفت عن استمارة التقديم؟*",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2,
          subLable:'فضلا حدد اخر مؤهل حصلت عليه '
        },
        school: {
          element: "input",
          value: "",
          config: {
            name: "school",
            type: "text",
            placeholder: "الجهة التي حصلت منها على اخر مؤهل:*",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2

        },
        job: {
          element: "input",
          value: "",
          config: {
            name: "school",
            type: "text",
            placeholder: "المسمى الوظيفي وجهة العمل ان وجد:",
          },
          validation: {
            required: false,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2

        },
        about_self: {
          element: "textarea",
          value: "",
          config: {
            name: "about_self",
            type: "text",
            placeholder: "حدثنا عن نفسك و عن وطموحك بإختصار:*",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          step:2

        },
        // dateOfBirth: {
        //   element: "date",
        //   value: "",
        //   config: {
        //     name: "dateOfBirth",
        //     type: "date",
        //     placeholder: "Date Of Birth",
        //   },
        //   validation: {
        //     required: true,
        //   },
        //   valid: true,
        //   touched: false,
        //   validationMessage: "",
        //   step:2
        // },
   
     
     
  
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

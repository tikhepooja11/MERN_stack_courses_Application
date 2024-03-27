import React from "react";
import {contactUsTheme} from "../utilities/contact us/contactUsTheme"
import {contactJsonObject} from "../utilities/contact us/contactJsonObject"
import { Survey } from "survey-react-ui";
import {Model} from "survey-core";
import "survey-core/defaultV2.min.css";



const ContactUs = () => {
  const survey = new Model(contactJsonObject);
  survey.applyTheme(contactUsTheme)
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3))
  })

  return ( 
    <div className="text-center">
      <Survey model={survey}/>
    </div>
  );
};

export default ContactUs;
 
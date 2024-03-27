export const contactJsonObject = {
  "title": "Get in touch.",
  "description": "We're here to help! Contact us today to learn more about our services.",
  // "logo": "https://api.surveyjs.io/private/Surveys/files?name=76db69ce-63ed-416f-a88f-f72fc0da8017",
  "logoWidth": "688",
  "logoHeight": "auto",
  "completedHtml": "<div class=\"max-w-2xl mx-auto my-16 text-center\">\n\n  <h2 class=\"text-2xl font-bold mb-4\">Thank you</h2>\n\n  <div class=\"bg-red-500 px-8 py-6 rounded-lg text-left\">\n    <h4 class=\"text-white mb-4\">Dear {fullname-for-complete-page},</h4>\n    <p class=\"text-white mb-4\">We greatly appreciate your feedback. Your input helps us improve, and we look forward to serving you even better on your next visit.</p>\n    <p class=\"text-white\">Warm regards,<br> TechPro IT-Software Courses</p>\n  </div>\n\n</div>",
  "pages": [
    {
      "name": "page3",
      "elements": [
        {
          "type": "text",
          "name": "full-name",
          "width": "100%",
          "minWidth": "256px",
          "title": "Full name:",
          "isRequired": true
        },
        {
          "type": "text",
          "inputType": "email",
          "placeholder": "foobar@example.com",
          "name": "email-address",
          "width": "100%",
          "minWidth": "256px",
          "title": "Email address :",
          "isRequired": true,
        },
        {
          "type": "text",
          "name": "phone-number",
          "width": "100%",
          "minWidth": "256px",
          "title": "Phone number :"
        },
        {
          "type": "text",
          "name": "date-of-visit",
          "width": "100%",
          "minWidth": "256px",
          "title": "Date of visit:",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "company-name",
          "width": "100%",
          "minWidth": "256px",
          "title": "Company Name :",
          "isRequired": true,
        },
        {
          "type": "text",
          "name": "profile-name",
          "width": "100%",
          "minWidth": "256px",
          "title": "Title :",
          "isRequired" : true
        },
        {
          "type": "comment",
          "name": "comments",
          "width": "100%",
          "minWidth": "256px",
          "title": "Please leave your comments :",
          "isRequired": true,
        },
        {
          "type": "html",
          "name": "question14",
          "html": "<div style=\"height:8px;\"></div>"
        }
      ],
      "title": "Reach out to us.",
      "description": "Got a question, suggestion, or just want to chat? We're all ears and excited to hear from you!"
    }
  ],
  "calculatedValues": [
    {
      "name": "fullname-for-complete-page",
      "expression": "iif({full-name} notempty, {full-name}, guest)"
    }
  ],
  "showQuestionNumbers": "off",
  "questionTitleLocation": "left",
  "questionDescriptionLocation": "underInput",
  "questionErrorLocation": "bottom",
  "completeText": "Submit",
  "widthMode": "static",
  "width": "768",
  "fitToContainer": true
}
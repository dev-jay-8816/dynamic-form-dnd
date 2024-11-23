import { FormStructure } from "../interfaces/formStructure.interface";
import { generateUUID } from "../utils/general.util";

export const defaultFormStructure: FormStructure = {
  "form": {
    "title": "Personal Information Form",
    "description": "Please fill out your personal details below.",
    "groups": [
      {
        id: generateUUID(),
        "title": "Contact Information",
        "fields": [
          {
            id: generateUUID(),
            "label": "Full Name",
            "type": "text",
            "name": "fullName",
            "placeholder": "Enter your full name",
            "required": true
          },
          {
            id: generateUUID(),
            "label": "Address",
            "type": "textarea",
            "name": "address",
            "placeholder": "Enter your address",
            "required": true
          },
          {
            id: generateUUID(),
            "label": "State",
            "type": "dropdown",
            "name": "state",
            "options": [
              "Alabama",
              "Alaska",
              "Arizona",
              "Arkansas",
              "California",
              "New York",
              "Texas",
              "Washington",
              "Wisconsin",
              "Wyoming"
            ],
            "required": true
          },
          {
            id: generateUUID(),
            "label": "Phone Number",
            "type": "text",
            "name": "phoneNumber",
            "placeholder": "Enter your phone number",
            "required": true
          },
          {
            id: generateUUID(),
            "label": "Preferred Contact Method",
            "type": "radio",
            "name": "contactMethod",
            "options": [
              { "label": "Email", "value": "email" },
              { "label": "Phone", "value": "phone" },
              { "label": "SMS", "value": "sms" }
            ],
            "required": true
          }
        ]
      },
      {
        id: generateUUID(),
        "title": "Schooling Information",
        "fields": [
          {
            id: generateUUID(),
            "label": "Highest Qualification",
            "type": "dropdown",
            "name": "qualification",
            "options": [
              "High School",
              "Associate Degree",
              "Bachelor's Degree",
              "Master's Degree",
              "Doctorate"
            ],
            "required": true
          },
          {
            id: generateUUID(),
            "label": "Graduation Year",
            "type": "number",
            "name": "graduationYear",
            "placeholder": "Enter graduation year",
            "min": 1950,
            "max": 2024,
            "required": true
          },
          {
            id: generateUUID(),
            "label": "Subjects Studied",
            "type": "checkbox",
            "name": "subjects",
            "options": [
              { "label": "Mathematics", "value": "math" },
              { "label": "Physics", "value": "physics" },
              { "label": "Chemistry", "value": "chemistry" },
              { "label": "Biology", "value": "biology" },
              { "label": "Computer Science", "value": "cs" }
            ]
          },
          {
            id: generateUUID(),
            "label": "Grade Point Average (GPA)",
            "type": "slider",
            "name": "gpa",
            "min": 0.0,
            "max": 4.0,
            "step": 0.1
          }
        ]
      },
      {
        id: generateUUID(),
        "title": "Employment Details",
        "fields": [
          {
            id: generateUUID(),
            "label": "Current Job Title",
            "type": "text",
            "name": "jobTitle",
            "placeholder": "Enter your current job title",
            "required": false
          },
          {
            id: generateUUID(),
            "label": "Employment Status",
            "type": "radio",
            "name": "employmentStatus",
            "options": [
              { "label": "Employed", "value": "employed" },
              { "label": "Unemployed", "value": "unemployed" },
              { "label": "Student", "value": "student" },
              { "label": "Retired", "value": "retired" }
            ]
          },
          {
            id: generateUUID(),
            "label": "Skills",
            "type": "checkbox",
            "name": "skills",
            "options": [
              { "label": "Programming", "value": "programming" },
              { "label": "Project Management", "value": "projectManagement" },
              { "label": "Design", "value": "design" },
              { "label": "Data Analysis", "value": "dataAnalysis" },
              { "label": "Communication", "value": "communication" }
            ]
          }
        ]
      },
      {
        id: generateUUID(),
        "title": "Hobbies and Interests",
        "fields": [
          {
            id: generateUUID(),
            "label": "Favorite Hobby",
            "type": "text",
            "name": "favoriteHobby",
            "placeholder": "Enter your favorite hobby",
            "required": true
          },
          {
            id: generateUUID(),
            "label": "Level of Interest in Technology",
            "type": "slider",
            "name": "techInterest",
            "min": 1,
            "max": 10,
            "step": 1
          },
          {
            id: generateUUID(),
            "label": "Do you participate in any sports?",
            "type": "radio",
            "name": "sportsParticipation",
            "options": [
              { "label": "Yes", "value": "yes" },
              { "label": "No", "value": "no" }
            ],
            "required": true
          }
        ]
      }
    ]
  }
}
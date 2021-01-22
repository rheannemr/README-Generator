// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-pink.svg)](https://opensource.org/licenses/MIT)';
    case "Apache 2.0":
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case "Eclipse":
      return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return '[MIT](https://opensource.org/licenses/MIT)';
    case "Apache 2.0":
      return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    case "Eclipse":
      return '[Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseLink(license) + renderLicenseBadge(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, general, link, prerequisites, installation, usage, technologies, summary, credit, username, email, license}) {
  return `# ${title}
  
  ${description}

  ## Table of Contents
  - [General Info](#General-Info)
  - [Link to Deployed Application](#Link-to-deployed-application)
  - [Prerequisites](#Prerequisites)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Technologies](#Technologies)
  - [Summary](#Summary)
  - [Contributors](#Contributors)
  - [Contact Information](#Contact-Information)

  ## General Info
  My project meets the following criteria:
  - ${general}

  ## Link to deployed application
  - ${link}

  ## Prerequisites
  - ${prerequisites}

  ## Installation
  - ${installation}

  ## Usage
  - ${usage}

  ## Technologies

  This project is created with:
  - ${technologies}

  ## Summary
  - ${summary}

  ## Contributors
  - ${credit}

  ## Contact Information
  - ${username}
  - ${email}


  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;

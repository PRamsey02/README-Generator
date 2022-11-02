// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This application is covered by the ${license} license.`
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateReadme(data) {
  return `
  #  ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

## Table of Contents
- [Usage](#usage)
- [Installation](#installation)
${renderLicenseLink(data.license)}
- [Contribute](#contribute)
- [Test](#test)
- [Questions](#questions)

  ## Usage
  ${data.usage}
 
## Installation
  ${data.installation}
${renderLicenseSection(data.license)}

## Contribute
  ${data.contribute}

## Test
  ${data.test}

## Questions
If you have any questions, Email me at: ${data.email} 
  
  Find me on GitHub: [${data.username}](https://github.com/${data.username})   
`;
};

module.exports = generateReadme;
const renderTitle = title => {
  return `# ${title}`
}

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license === "None") {
    return "";
  } else {
    return `![badge](https://img.shields.io/badge/license-${license}-green)`
  }
}

const renderDescription = description => {
  return `## Description
  ${description}`
}

const renderInstallation = installation => {
  return `## Installation
  ${installation}`
}

const renderUsage = usage => {
  return `## Usage
  ${usage}`
}

const renderContributing = contributing => {
  return `## How to Contribute 
  ${contributing}`
}

const renderTests = tests => {
  return `## Tests
  ${tests}`
}

const renderGithub = github => {
  return `${github}`
}

const renderEmail = email => {
  return `${email}`
}
// Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (license === "None") {
    return "";
  } else if (license === "MIT") {
    return "[MIT](https://choosealicense.com/licenses/mit/)";
  } else if (license === "Apache") {
    return "[Apache](https://choosealicense.com/licenses/apache-2.0/)";
  } else if (license === "GPL") {
    return "[GPL](https://choosealicense.com/licenses/gpl-3.0/)";
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (license === "None") {
    return "";
  } else {
    return `## License`
  }
}

// Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  ${renderTitle(data.title)}

  ${renderLicenseBadge(data.license)}

  ${renderDescription(data.description)}

  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions?](#questions?)

${renderInstallation(data.installation)}

${renderUsage(data.usage)}

${renderContributing(data.contributing)}

${renderTests(data.tests)}

## Questions?
If you have any questions, you can message me at ${renderGithub(data.github)}
OR email me at ${renderEmail(data.email)}.

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
`
}

module.exports = generateMarkdown;

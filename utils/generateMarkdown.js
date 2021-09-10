// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return "Please click [Here](https://opensource.org/licenses/MIT) to be taken to the license's webpage.";
    case 'GNU GPL v3':
      return "Please click [Here](https://www.gnu.org/licenses/gpl-3.0) to be taken to the licenses webpage.";
    case 'Apache 2':
      return "Please click [Here](https://opensource.org/licenses/Apache-2.0) to be taken to the license's webpage.";
    case 'BSD 3-Clause':
      return "Please click [Here](https://opensource.org/licenses/BSD-3-Clause) to be taken to the license's webpage.";
    case 'None':
      return 'No license is being utilized.'
  }
}

function renderButton(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache 2':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD 3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'None':
      return '';
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title} 
  
  ## ${renderButton(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Click [Here](https://github.com/${data.github}) for my GitHub Profile. </br>
  If you have any additional questions, you can email me at ${data.email}.

`;
}

module.exports = generateMarkdown;

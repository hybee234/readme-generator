// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {   // receive answers.license as "data"
  console.log ("Data in generate Markdown is:")
  console.log (data)
  return `# ${data}`;  // return this value back to index.js - (stored as badge in row 192)
}

module.exports = {
  generateMarkdown

};

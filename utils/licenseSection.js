//-----------------------------//
//- Function - Badge URL/Link -//
//-----------------------------//

// Switch function, receives "license" value from index.js and returns the corresponding badge URL
// Badge value is returned to index.js

function badge(license) {  
    switch (license) {
            case "Apache License 2.0":
                return badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
            case "MIT License":
                return badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;
            case "BSD 2-Clause 'Simplified' License":
                return badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
                break;
            case "BSD 3 - Clause 'New' or 'Revised' License":
                return badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                break;
            case "Boost Software License 1.0":
                return badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
                break;
            case "Creative Commons Zero v1.0 Universal":
                return badge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
                break;
            case "Eclipse Public License 2.0":
                return badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
                break;
            case "GNU General Public License v3.0":
                return badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                break;
            case "GNU Affero General Public License v3.0":
                return badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                break;
            case "GNU General Public License v2.0":
                return badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
                break;
            case "GNU Lesser General Public License v2.1":
                return badge = "[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)";
                break;
            case "Mozilla Public License 2.0":
                return badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
                break;
            case "The Unlicence":
                return badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
            default:
                return badge = "";
                break;
    } 
  
}

//------------------------------//
//- Function - License section -//
//------------------------------//

function licenseBody(license, badge) {    
    let licenseLink = ""
    let licenseBodyText = ""
    

    if (license === "None") {
        licenseBodyText = `This project does not have a defined license`  
        return licenseBodyText;
    } else {        
        licenseBodyText =
`
${badge}

This repository can be used in conjunction with licensing covered in  <b>${license}</b>

(For license details, please click on the badge)

`         
        return licenseBodyText;
    }
};

module.exports = {
  badge,
  licenseBody,

};

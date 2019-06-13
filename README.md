# Dynamic Resume


## How to get started

To start working with dynamic resume and generate your first resume you first need to have **NodeJS** installed.
NodeJS can be installed via your favourite package manager or via the NodeJS website https://nodejs.org/en/

### Install the project
```
npm install
```

### Edit config.js and config.scss

By editing these files you change the content of the resume, allowing you to enable/disable sections that you do and don't like
and change the colors of content to really make it yours.

### Start the Web Server
```
npm run serve
```

### Open in Chrome/Firefox and Print to PDF

Open http://localhost:8080 in your browser of choice and Print the webpage to PDF.

## Configuration Options

### Config.js
```yaml
resume: # Options for resume display
  stripe: # Control the stripe display
    enabled: # Enable or disable the stripe (values: true,false)
applicant: # Applicant/Resume information
  name: # The name to be displayed (value: String)
  tagline: # A tagline (can be left blank) (value: String)

  mobile: # Mobile display options
    enabled: # Enable or disable mobile number display (values: true, false)
    pretty: # Pretty mobile format to display (value: String)
    value: # Raw mobile format to hyperlink to (value: String)

  email: # Email display options
    enabled: # Enable or disable email display (values: true, false)
    value: # Raw email for display (value: String)

  linkedin: # LinkedIn display options
    enabled: # Enable or disable LinkedIn display (values: true, false)
    pretty: # Pretty name to display (value: String)
    value: # Raw url to be hyperlinked (value: String)

  github: # Github display options
    enabled: # Enable or disable Github display (values: true, false)
    pretty: # Pretty name to display (value: String)
    value: # Raw url to be hyperlinked (value: String)

  facebook: # Facebook display options
    enabled: # Enable or disable Facebook display (values: true, false)
    pretty: # Pretty name to display (value: String)
    value: # Raw url to be hyperlinked (value: String)

  location: # Location display options
    enabled: # Enable or disable location display (values: true, false)
    value: # String containing location (value: String)

skills: # Skills component display options
  enabled: # Enable or disable skills display (values: true, false)
  list: # List of current skills (value: Array[String])

currentRole: # Current Role component display options
  enabled: # Enable or disable current role display (values: true, false)
  company: # Company name (value: String)
  title: # Position title (value: String)
  duration: # Employment duration (value: String)
  paragraph: # [Optional] Paragraph reflecting on employment (value: String)
  achievementList: # [Optional] List containing key achievements in role (value: Array[String])

experience: # Experience component display options
  enabled: # Enable or disable experience display (values: true, false)
  list: # List of experience items (value: Array[Object])
    /* Experience item example */
    company: # Company name (value: String)
    title: # Position title (value: String)
    duration: # Employment duration (value: String)
    paragraph: # [Optional] Paragraph reflecting on employment (value: String)
    achievementList: # [Optional] List containing key achievements in role (value: Array[String])

education: # Education component display options
  enabled: # Enable or disable education display (values: true, false)
  list: # List of education items (value: Array[Object])
    /* Experience item example */
    course: # Course Name (value: String)
    provider: # Course Provider (value: String)
    duration: # Course Duration (value: String)
    paragraph: # [Optional] Paragraph reflecting on course (value: String)
    achievementList: # [Optional] List containing key achievements in course (value: Array[String])

references: # References component display options
  enabled: # Enable or disable references display (values: true, false)
  list: # List of reference items (value: Array[Object])
    /* Experience item example */
    name: # Reference name (value: String)
    company: # Reference Company (value: String)
    position: # [Optional] Reference Position (value: String)
    mobile: # [Optional] Reference Mobile (value: String)
    email: # [Optional] Reference Email (value: String)
    relation: # [Depreacted] Reference Relation (value: String)
```

### Config.scss
```scss
$textColor: // Body text color
$sidebarColor: // Sidebar background color
$sidebarTextColor: // Sidebar text color
$stripeColor: // Stripe color (if enabled)
$horizontalRuleColor: // Horizontal rule color
```
# aws_iframe_jupyter

This is an extension for Jupyter Lab that allows you to load any webpage as an iframe resources in-context of your existing Jupyter workflows. 

### Prerequisites

1. node version > 14.x
1. jupyter lab version 3.x

### Build and install instructions
1. Install npm dependencies: `npm install`
1. Build the extension: `npm run build`
1. Install python dependencies: `pip install ./`
1. Install the extension: `jupyter labextension install ./`
1. Build jupyter lab assets: `jupyter lab build`
1. Start jupyter lab in debug mode: `jupyter lab --debug`

### Publishing new versions
1. Update the version and push via https://docs.npmjs.com/updating-your-published-package-version-number
1. tag the commit with a new version tag


# react-aws-starterkit
a simple react aws starter kit


**Getting started**

first run `npm install` to install all needed packages. Then you will need to locate the config file `/src/config.json` and fill in the following properties from your aws account for cognito.

**Example:**

    {
        "region": "eu-west-1",
        "userPool": "eu-west-1_3X34Zo9dz",
        "identityPool": "eu-west-1:d1d15b4f-e872-422a-9fa7-5ad0c273a0d5",
        "clientId": "2ieipjhutcpoeta6pbn2kn90t5"
    }
You can find this data for the config file in your aws user pool dashboard.

once this is finished you can run `npm start` and the application will open in the web browser.

<a id="readme-top"></a>
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

# TMF | 23 for 23 Mobile App

This project contains all required configuration, code, & assets used in the "23 For 23" mobile application supporting the [Theodore Madison Foundation][tmf-url].

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#deploying-to-aws">Deploying to AWS</a></li>
        <li><a href="#testing-with-postman">Testing With Postman</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

### Built With
* [![graphql]][graphql-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

**Disclaimer:** This project provisions AWS resources which may incur costs. Please ensure you review the [AWS pricing][aws-pricing-url] for the services used and monitor your account to avoid unexpected charges.
1. Install the [SAM CLI][sam-cli-url] 
2. Clone the project
```bash
  git clone https://github.com/chanson7/TMF-App.git
```

### Deploying to AWS
1. Validate the SAM Template
```bash
  sam validate --lint
```
2. Build the project
```bash
  sam build
```
3. Deploy the project
```bash
  sam deploy --guided
```

### Testing with Postman

1. After successful deployment, import the [Postman Collection](https://github.com/chanson7/TMF-App/blob/main/TMF_23For23.postman_collection.json) json file into Postman
2. Populate values for all environment variables
3. Test individual calls

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[aws-pricing-url]: https://aws.amazon.com/pricing/
[graphql]: https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white
[graphql-url]: https://graphql.org/
[sam-cli-url]: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html
[tmf-url]: https://theodoremadisonfoundation.org/
# serverless-lambda-layer-demo
Simple demo to show how Serverless framework can be used to manage lambda layers

Comprises of 2x separate serverless framework projects:

- ```/layer``` - Contains the lib1 and lib2 example modules
- ```/lambda``` - Single function that consumes the layer

## Deploy
From project root ```npm run deploy```

To deploy layer and lambda independently:

- ```cd layer && sls deploy```
or
- ```cd lambda && sls deploy```

## To run/invoke the test function
From the root ```npm run test``` to execute the lambda function

## Teardown
From project root ```npm run destroy```

## Dependencies
- Node (12.x)
- AWS CLI
- AWS account + profile
- Serverless framework (```npm install -g serverless```)
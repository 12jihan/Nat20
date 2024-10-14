import { ResourcesConfig } from "aws-amplify";

const aws_config: ResourcesConfig = {
    Auth: {
        Cognito: {
            userPoolId: 'us-east-1_dKqcnhrFn',
            userPoolClientId: '2u3pvu6f0hmank1885h03od38k',
            signUpVerificationMethod: 'code',
        },
    },
};
export default aws_config;
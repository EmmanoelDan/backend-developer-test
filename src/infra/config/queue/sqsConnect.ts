import { SQSClient } from '@aws-sdk/client-sqs'

export const sqs = new SQSClient({
    region: 'us-east-1',

    credentials: {
        accessKeyId: "AKIAU6GD2NYEJMNNTYEL",
        secretAccessKey: "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"
    }
})

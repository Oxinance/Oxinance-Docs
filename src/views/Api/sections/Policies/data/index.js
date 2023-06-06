const getPolicyResponse = {
    "id": 1,
    "type": "PRIVACY",
    "name": "Privacy Policy",
    "content": "<h1>Privacy Policy</h1><br/><p>This is the privacy policy content.</p>",
    "last_edited_at": "2021-03-01T00:00:00.000Z",
}

const getPolicyParameters = [
]

const policyAttributes = [
    {
        attribute: "id",
        dataType: "int",
        description: "the id of the policy",
    },
    {
        attribute: "type",
        dataType: "enum",
        description: "the type of the policy",
    },
    {
        attribute: "name",
        dataType: "string",
        description: "the name of the policy",
    },
    {
        attribute: "content",
        dataType: "string",
        description: "the content of the policy",
    },
    {
        attribute: "last_edited_at",
        dataType: "datetime",
        description: "the last time the policy was edited",
    }
]

export {getPolicyResponse, getPolicyParameters, policyAttributes}
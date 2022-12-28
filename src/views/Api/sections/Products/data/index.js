const exampleResponse = {
    "id": "prod_N3Rm7KG7SEwwXv",
    "object": "product",
    "active": true,
    "created": 1672077317,
    "default_price": null,
    "description": "Comfortable gray cotton t-shirt",
    "images": [],
    "livemode": false,
    "metadata": {},
    "name": "T-shirt",
    "package_dimensions": null,
    "shippable": null,
    "statement_descriptor": null,
    "tax_code": null,
    "unit_label": null,
    "updated": 1672077317,
    "url": null
}

const attributes = [
    {
        attribute: "id",
        dataType: "string",
        description: "Unique identifier for the object",
        nestedDepth: 1,
        nested: [
            {
                attribute: "id.last_login",
                dataType: "string",
                description: "Last time user performed a successful request to the login endpoint.",
                nestedDepth: 2,
                isChild: true,
                nested: [
                    {
                        attribute: "id.last_login.first_name",
                        dataType: "string",
                        description: "The user's first name.",
                        isChild: true,

                    },
                ]
            },
            {
                attribute: "email",
                dataType: "string",
                description: "Unique email that can be used to login.",
                isChild: true,
            },
        ]
    },
    {
        attribute: "last_login",
        dataType: "string",
        description: "Last time user performed a successful request to the login endpoint."
    },
    {
        attribute: "email",
        dataType: "string",
        description: "Unique email that can be used to login."
    },
    {
        attribute: "username",
        dataType: "string",
        description: "Unique username that can be used to login."
    },
    {
        attribute: "first_name",
        dataType: "string",
        description: "The user's first name."
    },
    {
        attribute: "last_name",
        dataType: "string",
        description: "The user's last name."
    },
    {
        attribute: "date_joined",
        dataType: "string",
        description: "The user's of registration."
    },
    {
        attribute: "token",
        dataType: "string",
        description: "Authentication token to perform other requests."
    },
    {
        attribute: "metadata",
        dataType: "hash",
        description: "Hash that can be used to store any additional data about a user"
    },
]

export { attributes, exampleResponse };

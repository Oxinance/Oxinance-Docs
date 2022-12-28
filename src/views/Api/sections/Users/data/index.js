const response = {
    "id": "user_82554c6b-cd16-4423-8113-bec3d8244ce8",
    "last_login": "2022-12-07T08:14:06.567170Z",
    "email": "oxinancewhat@gmail.com",
    "username": "Jane Doe",
    "first_name": "Jane",
    "last_name": "Doe",
    "date_joined": "2022-11-29T03:52:27.078691Z",
    "token": "2db83fcbc1034e7e8817e16989464811fa87732b",
    "metadata": {
        "phone_number": "(212)-456-7890",
        "acceptedTermsOfService": true
    }
}

const loginResponse = {
    "token": "84db512cc9517bea10514bdc63c7fa3069c1c2da"
}

const attributes = [
    {
        attribute: "id",
        dataType: "string",
        description: "Unique identifier for the object"
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

export { response, loginResponse, attributes };

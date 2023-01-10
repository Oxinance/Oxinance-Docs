import {TipWord} from "../../../components/Keywords";

const response = {
    "id": "sandbox_order_63e5926acb4c41439e975b51cb36d3ef",
    "email": null,
    "tracking_information": {
        "code": "#FFF",
        "url": "https://api.oxinance.com",
        "company": "UPS"
    },
    "number": 4,
    "created_at": "2022-12-09T14:46:09.150725Z",
    "shipping_address": {
        "id": "test_shipping_address_93c84dcbec654a93973cd0a2395a0da6",
        "first_name": "Nuno",
        "last_name": "Lemos",
        "address_line_1": "Washington DC",
        "address_line_2": "White House",
        "city": "Washington DC",
        "state": "S. Martinho",
        "phone_number": "926853258",
        "zip_code": "9000-090",
        "country": "United States",
        "user": "user_82554c6b-cd16-4423-8113-bec3d8244ce8"
    },
    "order_items": [
        {
            "quantity": 1,
            "price": {
                "id": "price_1M8vGZPUv1akEq5tPuAnbzp1",
                "type": "one_time",
                "active": true,
                "object": "price",
                "created": 1669595531,
                "product": {
                    "id": "prod_MsgdQ7sIvoLL2H",
                    "url": null,
                    "name": "MacBook Pro 2021",
                    "type": "service",
                    "active": true,
                    "images": [
                        "https://files.stripe.com/links/MDB8YWNjdF8xTThWcmdCMjVoTkdwbHNNfGZsX3Rlc3RfYnVRTk1VRk5nR3ZvcFo0RjB6aHA1azVQ00t3pDpoNl"
                    ],
                    "object": "product",
                    "created": 1669595530,
                    "updated": 1669595531,
                    "livemode": false,
                    "metadata": {},
                    "tax_code": null,
                    "shippable": null,
                    "attributes": [],
                    "unit_label": null,
                    "description": null,
                    "default_price": "price_1M8vGZPUv1akEq5tPuAnbzp1",
                    "package_dimensions": null,
                    "statement_descriptor": null
                },
                "currency": "eur",
                "livemode": false,
                "metadata": {},
                "nickname": null,
                "recurring": null,
                "lookup_key": null,
                "tiers_mode": null,
                "unit_amount": 159900,
                "tax_behavior": "unspecified",
                "billing_scheme": "per_unit",
                "custom_unit_amount": null,
                "transform_quantity": null,
                "unit_amount_decimal": "159900"
            },
            "metadata": {}
        },
        {
            "product_provider": "STRIPE",
            "quantity": 1,
            "price": {
                "id": "price_1M8v6WPUv1akEq5tMA1DlKIL",
                "type": "one_time",
                "active": true,
                "object": "price",
                "created": 1669594908,
                "product": {
                    "id": "prod_MsgTHKQjTXzMR8",
                    "url": null,
                    "name": "IPhone XS Max",
                    "type": "service",
                    "active": true,
                    "images": [
                        "https://files.stripe.com/links/MDB8YWNjdF8xTTh2MlJQVXYxYWtFcTV0fGZsX3Rlc3RfbHNjWW11NWN5VWNDZWUxRGc1VkdEY1hS00FjKfZxvo"
                    ],
                    "object": "product",
                    "created": 1669594908,
                    "updated": 1669594909,
                    "livemode": false,
                    "metadata": {},
                    "tax_code": null,
                    "shippable": null,
                    "attributes": [],
                    "unit_label": null,
                    "description": null,
                    "default_price": "price_1M8v6WPUv1akEq5tMA1DlKIL",
                    "package_dimensions": null,
                    "statement_descriptor": null
                },
                "currency": "eur",
                "livemode": false,
                "metadata": {},
                "nickname": null,
                "recurring": null,
                "lookup_key": null,
                "tiers_mode": null,
                "unit_amount": 80000,
                "tax_behavior": "unspecified",
                "billing_scheme": "per_unit",
                "custom_unit_amount": null,
                "transform_quantity": null,
                "unit_amount_decimal": "80000"
            },
            "metadata": {}
        }
    ],
    "payment_method": {
        "platform": "STRIPE",
        "payment": {
            "id": "pi_3MD2bMPUv1akEq5t1GYtC2V0",
            "amount": 239900,
            "object": "payment_intent",
            "review": null,
            "source": null,
            "status": "succeeded",
            "created": 1670577040,
            "invoice": null,
            "currency": "eur",
            "customer": null,
            "livemode": false,
            "metadata": {
                "created_by": "OXINANCE",
                "has_checkout_session": "False"
            },
            "shipping": null,
            "processing": null,
            "application": "ca_MsGOUVHwWxmI3nGoJzaa6Bube7RJoDfJ",
            "canceled_at": null,
            "description": null,
            "next_action": null,
            "on_behalf_of": null,
            "client_secret": "pi_3MD2bMPUv1akEq5t1GYtC2V0_secret_dfXfKl7LdeCcUr6vrjZiRFqsu",
            "latest_charge": "ch_3MD2bMPUv1akEq5t1riRp1tk",
            "receipt_email": null,
            "transfer_data": null,
            "amount_details": {
                "tip": {}
            },
            "capture_method": "automatic",
            "payment_method": {
                "id": "pm_1MD2bYPUv1akEq5tZwWRB5tk",
                "card": {
                    "brand": "visa",
                    "last4": "4242",
                    "checks": {
                        "cvc_check": "pass",
                        "address_line1_check": null,
                        "address_postal_code_check": null
                    },
                    "wallet": null,
                    "country": "US",
                    "funding": "credit",
                    "exp_year": 2025,
                    "networks": {
                        "available": [
                            "visa"
                        ],
                        "preferred": null
                    },
                    "exp_month": 10,
                    "fingerprint": "asi3Enx37eHfjh9Q",
                    "generated_from": null,
                    "three_d_secure_usage": {
                        "supported": true
                    }
                },
                "type": "card",
                "object": "payment_method",
                "created": 1670577052,
                "customer": null,
                "livemode": false,
                "metadata": {},
                "billing_details": {
                    "name": null,
                    "email": null,
                    "phone": null,
                    "address": {
                        "city": null,
                        "line1": null,
                        "line2": null,
                        "state": null,
                        "country": "PT",
                        "postal_code": null
                    }
                }
            },
            "transfer_group": null,
            "amount_received": 239900,
            "amount_capturable": 0,
            "last_payment_error": null,
            "setup_future_usage": null,
            "cancellation_reason": null,
            "confirmation_method": "automatic",
            "payment_method_types": [
                "card"
            ],
            "statement_descriptor": null,
            "application_fee_amount": 4798,
            "payment_method_options": {
                "card": {
                    "network": null,
                    "installments": null,
                    "mandate_options": null,
                    "request_three_d_secure": "automatic"
                }
            },
            "automatic_payment_methods": null,
            "statement_descriptor_suffix": null
        }
    },
    "user": {
        "username": "lemos101",
        "email": "oxinancewhat@gmail.com",
        "id": "user_82554c6b-cd16-4423-8113-bec3d8244ce8"
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
        attribute: "email",
        dataType: "string",
        description: "Email input during the checkout, this field is required in case the order is processed via Guest Checkouts API."
    },
    {
        attribute: "number",
        dataType: "integer",
        description: "auto-generated number that grows linearly by always adding 1 to the previous order. For example if the last order number is 3, the next order number is going to be 4 and so on."
    },
    {
        attribute: "created_at",
        dataType: "string",
        description: "date of creation."
    },
    {
        attribute: "tracking_information",
        dataType: "hash",
        description: "Tracking Information object.",
        nestedDepth: 1,
        nested: [
            {
                attribute: "tracking_information.code",
                dataType: "string",
                description: "Tracking code.",
            },
            {
                attribute: "tracking_information.url",
                dataType: "string",
                description: "Tracking url.",
            },
            {
                attribute: "tracking_information.company",
                dataType: "string",
                description: "delivery company.",
            },
        ]
    },
    {
        attribute: "shipping_address",
        dataType: "hash",
        description: "The shipping address object.",
        nestedDepth: 1,
        nested: [
            {
                attribute: "shipping_address.id",
                dataType: "string",
                description: "id of tracking address object.",
            },
            {
                attribute: "shipping_address.first_name",
                dataType: "string",
                description: "Buyer's first name.",
            },
            {
                attribute: "shipping_address.last_name",
                dataType: "string",
                description: "Buyer's last name.",
            },
            {
                attribute: "shipping_address.address_line_1",
                dataType: "string",
                description: "Buyer's address line 1.",
            },
            {
                attribute: "shipping_address.address_line_2",
                dataType: "string",
                description: "Buyer's address line 2.",
            },
            {
                attribute: "shipping_address.city",
                dataType: "string",
                description: "Buyer's city.",
            },
            {
                attribute: "shipping_address.state",
                dataType: "string",
                description: "Buyer's state.",
            },
            {
                attribute: "shipping_address.phone_number",
                dataType: "string",
                description: "Buyer's phone number.",
            },
            {
                attribute: "shipping_address.zip_code",
                dataType: "string",
                description: "Buyer's ZIP code.",
            },
            {
                attribute: "shipping_address.country",
                dataType: "string",
                description: "Buyer's country.",
            },
            {
                attribute: "shipping_address.user",
                dataType: "string",
                description: "Buyer's ID.",
            },
        ]
    },
    {
        attribute: "order_items",
        dataType: "array",
        description: "An array representing all items bought by the User.",
        nestedDepth: 1,
        nested: [
            {
                attribute: "order_items[].quantity",
                dataType: "string",
                description: "Desired quantity of each Product."
            },
            {
                attribute: "order_items[].price",
                dataType: "hash",
                description: <>
                    <p>The Price of the Product the User wants to buy, we use the Price instead of the Product because a Product can have multiple prices. For example the same subscription service can cost 5€ monthly or 45€ yearly.</p>
                    <br/>
                    <p style={{fontSize: 14, color: "#4F566B"}}>See more on <TipWord onClick={() => window.open("https://stripe.com/docs/api/prices/object", "_blank")}>Stripe Prices</TipWord> official documentation.</p>
                </>
            },
        ]
    },
    {
        attribute: "payment_method",
        dataType: "hash",
        description: "Information about how the order payment was processed.",
        nestedDepth: 1,
        nested: [
            {
                attribute: "payment_method.platform",
                dataType: "string",
                description: "Indicates which platform processed the payment, it can be \"STRIPE\", \"PAYPAL\" or \"BINANCE\"."
            },
            {
                attribute: "payment_method.payment",
                dataType: "hash",
                description: "The payment details which varies based on the payment_method.platform."
            },
        ]
    },
    {
        attribute: "user",
        dataType: "hash",
        description: "details about the user account",
        nestedDepth: 1,
        nested: [
            {
                attribute: "user.username",
                dataType: "string",
                description: "User's username."
            },
            {
                attribute: "user.email",
                dataType: "string",
                description: "User's email."
            },
            {
                attribute: "user.id",
                dataType: "string",
                description: "User's id."
            },
        ]
    },
]

export { response, loginResponse, attributes };

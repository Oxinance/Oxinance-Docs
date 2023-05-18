const algoliaSearchResponse = {
    "hits": [
        {
            "name": "Binance plan",
            "description": null,
            "image": "https://files.stripe.com/links/MDB8YWNjdF8xTjZnSGtCWFpSQldOcTh0fGZsX3Rlc3RfQ05lbFZMTVN0cTlqcmhPS0MxVTVlRkpr00DaYoptAG",
            "objectID": "prod_NsROPYimz9kKgK",
            "_highlightResult": {
                "name": {
                    "value": "<em>Binance</em> plan",
                    "matchLevel": "full",
                    "fullyHighlighted": false,
                    "matchedWords": [
                        "binance"
                    ]
                },
                "image": {
                    "value": "https://files.stripe.com/links/MDB8YWNjdF8xTjZnSGtCWFpSQldOcTh0fGZsX3Rlc3RfQ05lbFZMTVN0cTlqcmhPS0MxVTVlRkpr00DaYoptAG",
                    "matchLevel": "none",
                    "matchedWords": []
                }
            }
        }
    ],
    "products": [
        {
            "id": "prod_NsROPYimz9kKgK",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1683838500,
            "default_price": {
                "id": "price_1N6gVsBXZRBWNq8t6FCgJK8B",
                "object": "price",
                "active": true,
                "billing_scheme": "per_unit",
                "created": 1683838500,
                "currency": "eur",
                "custom_unit_amount": null,
                "livemode": false,
                "lookup_key": null,
                "metadata": {},
                "nickname": null,
                "product": "prod_NsROPYimz9kKgK",
                "recurring": {
                    "aggregate_usage": null,
                    "interval": "month",
                    "interval_count": 1,
                    "trial_period_days": null,
                    "usage_type": "licensed"
                },
                "tax_behavior": "unspecified",
                "tiers_mode": null,
                "transform_quantity": null,
                "type": "recurring",
                "unit_amount": 20000,
                "unit_amount_decimal": "20000"
            },
            "description": null,
            "images": [
                "https://files.stripe.com/links/MDB8YWNjdF8xTjZnSGtCWFpSQldOcTh0fGZsX3Rlc3RfQ05lbFZMTVN0cTlqcmhPS0MxVTVlRkpr00DaYoptAG"
            ],
            "livemode": false,
            "metadata": {},
            "name": "Binance plan",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1683838501,
            "url": null
        }
    ]
}

const algoliaSearchParameters = [
    {
        attribute: "query",
        dataType: "string",
        description: "The query string to search for.",
        orangeLabel: "REQUIRED",},
]

const algoliaSearchAttributes = [
    {
        attribute: "hits",
        dataType: "array",
        description: "The search result.",
    },
    {
        attribute: "products",
        dataType: "array",
        description: "The list of products extracted from Products API based on search result."
    },
]

export {algoliaSearchResponse, algoliaSearchParameters, algoliaSearchAttributes}
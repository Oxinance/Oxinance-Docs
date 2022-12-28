const exampleResponse = {"id":"prod_MsgdQ7sIvoLL2H","object":"product","active":true,"attributes":[],"created":1669595530,"default_price":{"id":"price_1M8vGZPUv1akEq5tPuAnbzp1","object":"price","active":true,"billing_scheme":"per_unit","created":1669595531,"currency":"eur","custom_unit_amount":null,"livemode":false,"lookup_key":null,"metadata":{},"nickname":null,"product":"prod_MsgdQ7sIvoLL2H","recurring":null,"tax_behavior":"unspecified","tiers_mode":null,"transform_quantity":null,"type":"one_time","unit_amount":159900,"unit_amount_decimal":"159900"},"description":null,"images":[],"livemode":false,"metadata":{},"name":"MacBook Pro 2021","package_dimensions":null,"shippable":null,"statement_descriptor":null,"tax_code":null,"type":"service","unit_label":null,"updated":1670929740,"url":null}
const exampleArrayResponse = [exampleResponse];

const price = [
    {
        attribute: "price.id",
        dataType: "boolean",
        description: "Whether the price can be used for new purchases.",
        isChild: true
    },
    {
        attribute: "price.currency",
        dataType: "string",
        description: "Three-letter ISO currency code, in lowercase. Must be a supported currency.",
        isChild: true
    },
    {
        attribute: "price.metadata",
        dataType: "boolean",
        description: "Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.",
        isChild: true
    },
    {
        attribute: "price.product",
        dataType: "string",
        description: "The ID of the product this price is associated with.",
        isChild: true
    },
    {
        attribute: "price.recurring",
        dataType: "hash",
        description: "The recurring components of a price such as interval and usage_type.",
        isChild: true,
        nestedDepth: 2,
        nested: [
            {
                attribute: "price.recurring.aggregate_usage",
                dataType: "string",
                description: "Specifies a usage aggregation strategy for prices of usage_type=metered. Allowed values are sum for summing up all usage during a period, last_during_period for using the last usage record reported within a period, last_ever for using the last usage record ever (across period bounds) or max which uses the usage record with the maximum reported usage during a period. Defaults to sum.",
                isChild: true
            },
            {
                attribute: "price.recurring.interval",
                dataType: "string",
                description: "The frequency at which a subscription is billed. One of 'day', 'week', 'month' or 'year'.",
                isChild: true
            },
            {
                attribute: "price.recurring.interval_count",
                dataType: "positive integer",
                description: "The number of intervals (specified in the interval attribute) between subscription billings. For example, interval=month and interval_count=3 bills every 3 months.",
                isChild: true
            },
            {
                attribute: "price.recurring.usage_type",
                dataType: "enum",
                description: "Can be \"licenced\" or \"metered\"",
                isChild: true
            }
        ]
    },
    {
        attribute: "type",
        dataType: "string",
        description: "One of one_time or recurring depending on whether the price is for a one-time purchase or a recurring (subscription) purchase."
    },
    {
        attribute: "billing_scheme",
        dataType: "string",
        description: "Either \"per_unit\" or \"tiered\""
    },
    {
        attribute: "unit_amount",
        dataType: "integer",
        description: "The unit amount in cents to be charged, represented as a whole integer if possible. Only set if billing_scheme=per_unit."
    },
    {
        attribute: "object",
        dataType: "string, value is \"price\"",
        description: "String representing the object’s type. Objects of the same type share the same value."
    },
    {
        attribute: "object",
        dataType: "string, value is \"price\"",
        description: "String representing the object’s type. Objects of the same type share the same value."
    },
    {
        attribute: "object",
        dataType: "string, value is \"price\"",
        description: "String representing the object’s type. Objects of the same type share the same value."
    },
    {
        attribute: "object",
        dataType: "string, value is \"price\"",
        description: "String representing the object’s type. Objects of the same type share the same value."
    },
]

const attributes = [
    {
        attribute: "id",
        dataType: "string",
        description: "Unique identifier for the object",
    },
    {
        attribute: "active",
        dataType: "boolean",
        description: "Whether the product is currently available for purchase."
    },
    {
        attribute: "description",
        dataType: "string",
        description: "The product’s description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes."
    },
    {
        attribute: "name",
        dataType: "string",
        description: "The product’s name, meant to be displayable to the customer."
    },
    {
        attribute: "metadata",
        dataType: "hash",
        description: "Hash that can be used to store any additional data about a user"
    },
    {
        attribute: "price",
        dataType: "hash",
        description: "Check Stripe API Docs to see the object's definition",
    },
    {
        attribute: "object",
        dataType: "string, value is \"product\"",
        description: "String representing the object’s type. Objects of the same type share the same value."
    },
    {
        attribute: "created",
        dataType: "timestamp",
        description: "Time at which the object was created. Measured in seconds since the Unix epoch."
    },
    {
        attribute: "images",
        dataType: "array containing strings",
        description: "A list of up to 8 URLs of images for this product, meant to be displayable to the customer."
    },
    {
        attribute: "livemode",
        dataType: "boolean",
        description: "Has the value true if the object exists in live mode or the value false if the object exists in test mode."
    },
    {
        attribute: "shippable",
        dataType: "boolean",
        description: "Whether this product is shipped (i.e., physical goods)."
    },
    {
        attribute: "unit_label",
        dataType: "string",
        description: "A label that represents units of this product in Stripe and on customers’ receipts and invoices. When set, this will be included in associated invoice line item descriptions."
    },
    {
        attribute: "updated",
        dataType: "timestamp",
        description: "Time at which the object was last updated. Measured in seconds since the Unix epoch."
    }
]

export { attributes, exampleResponse, exampleArrayResponse };

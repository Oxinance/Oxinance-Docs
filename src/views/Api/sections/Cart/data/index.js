
const response = {
    id: "citem_40af9ea502a345adb6f71893263d9a2b",
    quantity: 2,
    price: {
        "id": "price_1M8vGZPUv1akEq5tPuAnbzp1",
        "object": "price",
        "active": true,
        "billing_scheme": "per_unit",
        "created": 1669595531,
        "currency": "eur",
        "custom_unit_amount": null,
        "livemode": false,
        "lookup_key": null,
        "metadata": {},
        "nickname": null,
        "product":  {"id":"prod_MsgdQ7sIvoLL2H","object":"product","active":true,"attributes":[],"created":1669595530,"default_price":{"id":"price_1M8vGZPUv1akEq5tPuAnbzp1","object":"price","active":true,"billing_scheme":"per_unit","created":1669595531,"currency":"eur","custom_unit_amount":null,"livemode":false,"lookup_key":null,"metadata":{},"nickname":null,"product":"prod_MsgdQ7sIvoLL2H","recurring":null,"tax_behavior":"unspecified","tiers_mode":null,"transform_quantity":null,"type":"one_time","unit_amount":159900,"unit_amount_decimal":"159900"},"description":null,"images":[],"livemode":false,"metadata":{},"name":"MacBook Pro 2021","package_dimensions":null,"shippable":null,"statement_descriptor":null,"tax_code":null,"type":"service","unit_label":null,"updated":1670929740,"url":null},
        "recurring": null,
        "tax_behavior": "unspecified",
        "tiers_mode": null,
        "transform_quantity": null,
        "type": "one_time",
        "unit_amount": 159900,
        "unit_amount_decimal": "159900"
    }
}

const listResponse = [ response ]

const attributes = [
    {
        attribute: "id",
        dataType: "string",
        description: "Unique string that identifies the resource"
    },
    {
        attribute: "quantity",
        dataType: "integer",
        description: "Integer that defines the quantity desired.",
    },
    {
        attribute: "price",
        dataType: "hash",
        description: "The Price of the Product the User wants to buy, we use the Price instead of the Product because a Product can have multiple prices. For example the same subscription service can cost 5€/monthly or 45€/yearly."
    },
]

export {attributes, listResponse, response}

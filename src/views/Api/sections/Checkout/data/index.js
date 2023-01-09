import SyntaxText from "../../../components/SyntaxText";
import {TipWord} from "../../../components/Keywords";


const binanceResponse = {
    "prepayId": "204761393686126592",
    "expireTime": 1673189854102,
    "qrcodeLink": "https://public.bnbstatic.com/static/payment/20230108/8b28234b-90d6-461e-a1a1-87c36326bb01.jpg",
    "checkoutUrl": "https://pay.binance.com/en/checkout/6849b82a36cc48a3a1cd773e5e8f34d1",
    "deeplink": "bnc://app.binance.com/payment/secpay?tempToken=E7JtOGbJi0XgLdLHHwg9mRSGWubxRVvo&returnLink=https://pay.binance.com/en/checkout/6849b82a36cc48a3a1cd773e5e8f34d1",
    "universalUrl": "https://app.binance.com/payment/secpay?linkToken=6849b82a36cc48a3a1cd773e5e8f34d1&_dp=Ym5jOi8vYXBwLmJpbmFuY2UuY29tL3BheW1lbnQvc2VjcGF5P3RlbXBUb2tlbj1FN0p0T0diSmkwWGdMZExISHdnOW1SU0dXdWJ4UlZ2byZyZXR1cm5MaW5rPWh0dHBzOi8vcGF5LmJpbmFuY2UuY29tL2VuL2NoZWNrb3V0LzY4NDliODJhMzZjYzQ4YTNhMWNkNzczZTVlOGYzNGQx"
}

const binanceParameters = [
    {
        attribute: "shipping_address",
        dataType: "hash",
        description: <p>Required if there is atleast 1 Cart Item with <SyntaxText>price.product.shippable</SyntaxText> equal to <SyntaxText>true</SyntaxText>.</p>,
        orangeLabel: "REQUIRED CONDITIONALLY",
        nestedDepth: 1,
        nested: [
            {
                attribute: "shipping_address.first_name",
                dataType: "string",
                description: "Buyer's first name.",
                orangeLabel: "REQUIRED"
            },
            {
                attribute: "shipping_address.last_name",
                dataType: "string",
                description: "Buyer's last name.",
                orangeLabel: "REQUIRED"
            },
            {
                attribute: "shipping_address.address_line_1",
                dataType: "string",
                description: "Buyer's address line 1.",
                orangeLabel: "REQUIRED"
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
                orangeLabel: "REQUIRED"
            },
            {
                attribute: "shipping_address.state",
                dataType: "string",
                description: "Buyer's state.",
                orangeLabel: "REQUIRED"
            },
            {
                attribute: "shipping_address.zip_code",
                dataType: "string",
                description: "Buyer's ZIP code.",
                orangeLabel: "REQUIRED"
            },
            {
                attribute: "shipping_address.country",
                dataType: "string",
                description: "Buyer's country.",
                orangeLabel: "REQUIRED"
            },
            {
                attribute: "shipping_address.phone_number",
                dataType: "string",
                description: "Buyer's phone number.",
            },
        ]
    },
]

const binanceAttributes = [
    {
        attribute: "prepayId",
        dataType: "string",
        description: "Unique ID generated by Binance."
    },
    {
        attribute: "expireTime",
        dataType: "string",
        description: "expire time in milli seconds."
    },
    {
        attribute: "qrcodeLink",
        dataType: "string",
        description: "QR code image link."
    },
    {
        attribute: "checkoutUrl",
        dataType: "string",
        description: "Binance hosted checkout page URL. Redirect customers to this URL to take them to Checkout."
    },
    {
        attribute: "deeplink",
        dataType: "string",
        description: "Deeplink to open Binance app to finish payment."
    },
    {
        attribute: "universalUrl",
        dataType: "string",
        description: "universal URL to finish the payment."
    },
]

const stripeCheckoutResponse = {
    url: "https://checkout.stripe.com/c/pay/cs_test_a1EzMDwTHAK2PkWqfxIoKqE550pbNFQJkGBrJG5qR652xoTjmiMD2dCRXo#fidkdWxOYHwnPyd1blpxYHZxWjA0SD1Td2JHNzBtS0J1aXZIbmM0UFB%2FbG1Abk8xRkJsbXJBQzdJM2A8U3dcdjBkMlxHMmY8MzZQaUhCS1ZkTG1vfTdBRjJLa1BqXE1LUlw1TzZHM108Mmg1NTVfczFKVG1JZycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYCkndnF3bHVgRGZmanBrcSc%2FJ2RmZnFaNEg9czdXVVBzNGRuQHQwcSd4JSUl"
}

const stripeCheckoutParameters = binanceParameters

const stripeCheckoutAttributes = [
    {
        attribute: "url",
        dataType: "string",
        description: "Stripe hosted checkout page URL. Redirect customers to this URL to take them to Checkout."
    },
]

const stripePaymentIntentResponse = {
    "client_secret": "pi_3MOBS6PUv1akEq5t04wfLlt0_secret_F2CWVC4VKitVFwXk59RZM3KPK"
}

const stripePaymentIntentAttributes = [
    {
        attribute: "client_secret",
        dataType: "string",
        description: <>
            <p>The client secret can be used to complete a payment from your frontend. It should not be stored, logged, or exposed to anyone other than the customer.</p>
            <br/>
            <p>See how to integrate a checkout into your website using <TipWord title={"Facebook front-end library"}>React</TipWord> in <TipWord onClick={() => window.open("https://stripe.com/docs/stripe-js/react", "_blank")}>Stripe.js</TipWord> documentation.</p>
        </>
    },
]

export { binanceResponse, binanceParameters, binanceAttributes, stripeCheckoutAttributes, stripeCheckoutResponse, stripeCheckoutParameters, stripePaymentIntentResponse, stripePaymentIntentAttributes }

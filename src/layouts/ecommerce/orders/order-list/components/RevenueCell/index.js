import PropTypes from "prop-types";
import SoftBox from "../../../../../../components/SoftBox";
import SoftTypography from "../../../../../../components/SoftTypography";

const getFormattedPrice = (amount, currency) => {

    let amountString = `${amount / 100}`
    const splittedString = amountString.split(".");
    if (splittedString.length > 1) {
        if (splittedString[1].length === 1) {
            amountString = amountString + "0";
        }
    } else {
        amountString = amountString + ",00";
    }

    const results = {
        eur: `${amountString} €`,
        usd: `$ ${amountString}`,
        gbp: `£ ${amountString}`,
        jpy: `¥ ${amountString}`
    }
    return results[currency];
}

function RevenueCell({paymentMethod}) {

    const renderRevenue = () => {
        if (paymentMethod.platform === "STRIPE") {
            return getFormattedPrice(paymentMethod.payment.amount, paymentMethod.payment.currency)
        } else if (paymentMethod.platform === "BINANCE") {
            return `${paymentMethod.payment.data.orderAmount} ${paymentMethod.payment.data.currency}`
        }
    }

    return (
        <SoftBox display="flex" alignItems="center">
            <SoftBox ml={1}>
                <SoftTypography variant="caption" fontWeight="medium" color="text">
                    {renderRevenue()}
                </SoftTypography>
            </SoftBox>
        </SoftBox>
    );
}

RevenueCell.propTypes = {
    paymentMethod: PropTypes.object.isRequired,
};

export default RevenueCell;

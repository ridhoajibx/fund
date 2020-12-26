
export const Event = [
    {
        id: 1,
        title: "Belanja bulanan",
        rrule: {
            freq: "daily",
            dtstart: "2020-11-01",
            until: "2020-11-01"
        },
        extendedProps: {
            cost: "100000",
            repeat: "one time"
        }
    },
    {
        id: 2,
        title: "Kontrakan rumah",
        rrule: {
            freq: "monthly",
            dtstart: "2020-12-10",
            until: "2021-12-10"
        },
        extendedProps: {
            cost: "1100000",
            repeat: "monthly"
        }
    }
];

export const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
}

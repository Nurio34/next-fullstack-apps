export const formatDate = (date: string) => {
    return date
        .split("-")
        .reduce(
            (arr, dateItem, index) => {
                if (index === 0) {
                    arr.splice(2, 1, dateItem);
                } else if (index === 1) {
                    arr.splice(1, 1, dateItem);
                } else {
                    arr.splice(0, 1, dateItem);
                }

                return arr;
            },
            ["", "", ""] as string[],
        )
        .join(".");
};

export const reFormatDate = (date: string) => {
    return date
        .split(".")
        .reduce(
            (arr, dateItem, index) => {
                if (index === 0) {
                    arr.splice(2, 1, dateItem);
                } else if (index === 1) {
                    arr.splice(1, 1, dateItem);
                } else {
                    arr.splice(0, 1, dateItem);
                }

                return arr;
            },
            ["", "", ""] as string[],
        )
        .join("-");
};

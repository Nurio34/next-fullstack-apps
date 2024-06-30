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

// export const formatDate2 = (date: string) => {
//     return date.split("/").reduce(
//         (arr, dateItem, index) => {
//             if (index === 0) {
//                 if (Number(dateItem) < 10) {
//                     dateItem = `0${dateItem}`;
//                 }
//                 arr.splice(1, 1, dateItem);
//             } else if (index === 1) {
//                 if (Number(dateItem) < 10) {
//                     dateItem = `0${dateItem}`;
//                 }
//                 arr.splice(0, 1, dateItem);
//             } else {
//                 arr.splice(2, 1, dateItem);
//             }

//             return arr;
//         },
//         ["", "", ""] as string[],
//     );
// };

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

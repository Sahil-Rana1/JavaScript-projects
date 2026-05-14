// Q8. Create a food ordering discount system: Weekday lunch 15% off, weekend 5% off, total > 500 extra
// 10% off, member card extra 5% off.

function food_discount(total_bill, isWeekDay, memberCard) {

    let discount = 0;

    // Weekday or Weekend discount
    if (isWeekDay) {
        discount += total_bill * 0.15;
    } else {
        discount += total_bill * 0.05;
    }

    // Extra discount
    if (total_bill > 500) {
        discount += total_bill * 0.10;
    }

    // Member card discount
    if (memberCard) {
        discount += total_bill * 0.05;
    }

    return total_bill - discount;
}

console.log(food_discount(1000, true, true));
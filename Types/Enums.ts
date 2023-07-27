// Enums a set of name constants
enum OrderStatus {
    PENDING = 10,
    SHIPPED = 34,
    DELIVERED,
    RETURNED
}

const myStatus =  OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED
};

isDelivered(OrderStatus.RETURNED);

enum ArroyKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    ERROR = 234 // I CAN MIX
}

ArroyKeys.LEFT // = left

// another option to create enums "const"
const enum OrderStatus1 {
    PENDING = 10,
    SHIPPED = 34,
    DELIVERED,
    RETURNED
}
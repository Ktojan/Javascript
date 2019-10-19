// JavaScript source code

            // S for single responsibility

//not --S-- code

class Discount {
    calcDisc() {
        if (this.customer.type == "bigSpender") {
            return this.price * 0.12;
        }
        if (this.customer.type == "VIP") {
            return this.price * 0.3;
        }
        // adding new element
        if (this.customer.type == "superVIP") {
            return this.price * 0.45;
        }
    }
}

// the same in --S-- style

class Discount {
    calcDisc() {
        return this.price * 0.12;       
    }
}


class VIPDiscount extends Discount {
    calcDisc() {
        return super.calcDisc() * 2.5;
    }
}

class SuperVIPDiscount extends VIPDiscount {
    calcDisc() {
        return super.calcDisc() * 1.5;
    }
}
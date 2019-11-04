var a = false;
console.log(a);
var b = [1, 2, 3];
console.log(b);
//tuples
var c = [1, true];
console.log(c);
var Car;
(function (Car) {
    Car[Car["Toyota"] = 0] = "Toyota";
    Car[Car["Lexus"] = 1] = "Lexus";
    Car[Car["Mercedes"] = 2] = "Mercedes";
})(Car || (Car = {}));
;
var d = Car.Toyota;
console.log(d);
console.log(Car[d]);
var e = String('123');
console.log(e);

var Triangle = function (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
};
Triangle.prototype.kind = function () {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0 || (this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.b + this.c < this.a)) {
        throw new Error();
    }
    var answer;
    if (this.a === this.b && this.b === this.c) {
        answer = 'equilateral';
    }
    else if ((this.a === this.b && this.b !== this.c) || (this.a === this.c && this.c !== this.b) || (this.b === this.c && this.c !== this.a)) {
        answer = 'isosceles';
    }
    else {
        answer = 'scalene';
    }
    return answer;
};
module.exports = Triangle;

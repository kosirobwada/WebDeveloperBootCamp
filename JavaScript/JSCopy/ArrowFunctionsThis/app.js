// console.log(this);

const person = {
    firstName: 'Taro',
    lastName: 'Yamada',
    fullName: function () {
        return `${this.lastName} ${this.firstName}`;
    },
    delayName: function () {

        setTimeout(() => {
            console.log(this);
            console.log(this.fullName());
        }, 2000);
    }
}
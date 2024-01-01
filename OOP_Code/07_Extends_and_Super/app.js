// class Pet {
// 	constructor(name, age) {
// 		console.log('Petコンストラクタ');
// 		this.name = name;
// 		this.age = age;
// 	}
// 	eat() {
// 		return `${this.name}がご飯を食べている`;
// 	}
// }

// class Cat extends Pet {
// 	constructor(name, age, jumpHeight = 5) {
// 		console.log('Catコンストラクタ');
// 		super(name, age);
// 		this.jumpHeight = jumpHeight;
// 	}
// 	meow() {
// 		return 'にゃー！！！';
// 	}
// }

// class Dog extends Pet {
// 	bark() {
// 		return 'ワンワン！！！';
// 	}
// 	eat() {
// 		return `${this.name}がご飯を食い散らかしている`;
// 	}
// }

// class Cat {
// 	constructor(name, age) {
// 		this.name = name,
// 			this.age = age
// 	}
// 	eat() {
// 		return `${this.name}がご飯を食べている`
// 	}
// 	meow() {
// 		return 'nya'
// 	}
// }

// const tama = new Cat('tama', 5)

// console.log(tama.eat())

// console.log(tama.meow())

// class Dog {
// 	constructor(name, age) {
// 		this.name = name,
// 			this.age = age
// 	}
// 	eat() {
// 		return `${this.name}がご飯を食べている`
// 	}
// 	bark() {
// 		return 'wan'
// 	}
// }

// const pochi = new Cat('pochi', 5)

// console.log(pochi.eat())

// console.log(tama.meow())

class Pet {
	constructor(name, age) {
		this.name = name,
			this.age = age
	}
	eat() {
		return `${this.name}がご飯を食べている`
	}
}

class Cat extends Pet {
	constructor(name, age, jumpHeight = 5) {
		super(name, age)
		this.jumpHeight = jumpHeight
	}
	meow() {
		return 'nya'
	}
}


class Dog extends Pet {
	bark() {
		return 'wan'
	}
}

// const pochi = new Dog('pochi', 5)

// console.log(pochi.eat())

// console.log(pochi.bark())

const pochi = new Cat('pochi', 5)

console.log(pochi.bark())
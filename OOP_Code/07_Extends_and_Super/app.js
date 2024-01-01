class Pet {
	constructor(name, age) {
		console.log('Petコンストラクタ');
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name}がご飯を食べている`;
	}
}

class Cat extends Pet {
	constructor(name, age, jumpHeight = 5) {
		console.log('Catコンストラクタ');
		super(name, age);
		this.jumpHeight = jumpHeight;
	}
	meow() {
		return 'にゃー！！！';
	}
}

class Dog extends Pet {
	bark() {
		return 'ワンワン！！！';
	}
	eat() {
		return `${this.name}がご飯を食い散らかしている`;
	}
}
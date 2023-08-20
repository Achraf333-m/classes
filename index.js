class Car {
    constructor (brand, year) {
        this.brand = brand,
        this.year = year
    }

    getAge() {
        const date = new Date();
        const year = date.getFullYear()
        return year - this.year
    }
    
    print() {
        console.log(`the ${this.brand} car is ${this.getAge()} years old`)
        
    }
}

const firstCar = new Car ('Audi', '2014')
const secondCar = new Car ('BMW', '2009')
const thirdCar = new Car ('Mercedes', '2018')

firstCar.print()
secondCar.print()
thirdCar.print()
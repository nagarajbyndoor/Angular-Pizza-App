export class TopPizzaModel { 
        pizzaId: number;
        pizzaName : string;
        pizzaType: string;
        pizzaDescription: string;
        pizzaPrice: number;    

        constructor(pizzaId: number, pizzaName : string,  pizzaType: string, pizzaDescription: string, pizzaPrice: number  ) {
            this.pizzaId = pizzaId;
            this.pizzaName = pizzaName;
            this.pizzaType = pizzaType;
            this.pizzaDescription = pizzaDescription;
            this.pizzaPrice = pizzaPrice;
        }
}

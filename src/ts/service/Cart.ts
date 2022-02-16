import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    calculateSum(): number {
        return this._items.reduce((acc, prev) => prev.price + acc, 0);
    }

    sumWithDiscount(discount: number): number {
        return this.calculateSum() / 100 * (100 - discount);
    }

    removeItem(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}

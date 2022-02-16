import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('sum should be 2900', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.calculateSum()).toBe(2900);
});

test('should calculate sum with discount', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.sumWithDiscount(50)).toBe(1450);
  expect(cart.sumWithDiscount(20)).toBe(2320);
  expect(cart.sumWithDiscount(0)).toBe(2900);
});

test('should remove item', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.removeItem(1001)
  expect(cart.items.find(item => item.id === 1001)).toBeUndefined;
  expect(cart.items.length).toBe(1);
});

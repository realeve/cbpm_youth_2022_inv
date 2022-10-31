import * as lib from './lib'; 
test('ymd', () => {
  expect(lib.now()).toHaveLength(19);
  expect(lib.ymd()).toHaveLength(8);
});

test('数据转换', () => { 

test('store存储测试', () => {
  expect(lib.setStore({ a: 1 }, { payload: { b: 2 } })).toEqual({
    a: 1,
    b: 2,
  });
  expect(lib.setStore({ a: 1 }, { payload: { b: 2, c: 2 } })).toEqual({
    a: 1,
    b: 2,
    c: 2,
  });
  expect(lib.setStore({ a: 1 }, { payload: { a: 2 } })).toEqual({ a: 2 });

  expect(lib.setStore({ a: { b: 2 } }, { payload: { a: { b: 3, c: 2 } } })).toEqual({
    a: { b: 3, c: 2 },
  });

  // throw error报错
  // expect(lib.setStore({ a: 1 }, { b: 2 })).toThrow(/payload/);
  expect(lib.setStore({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
});

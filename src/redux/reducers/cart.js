import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/actionTypes";

export default (items = [], { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      const newItem = payload;
      const foundItem = items.find(
        (item) => item.drink === newItem.drink && item.option === newItem.option
      );
      if (foundItem) {
        return items.map((item) =>
          item === foundItem ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else return [...items, { ...newItem, quantity: 1 }];

    case REMOVE_ITEM:
      return items.filter((item) => item !== payload);

    case CHECKOUT:
      return [];

    default:
      return items;
  }
};

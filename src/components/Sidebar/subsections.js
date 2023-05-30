import { SECTION_ROUTE_PRODUCTS, SECTION_ROUTE_PURCHASED_HARDWARE, SECTION_ROUTE_SALES, SECTION_ROUTE_USERS } from "./sections";

export const SUB_SECTION_ROUTE_USERS_MODIFY = {
  key: 1,
  name: "Modificar usuario",
  route: SECTION_ROUTE_USERS.route + "/modificarusuario",
  path: [
    { id: 1, name: SECTION_ROUTE_USERS.name },
    { id: 2, name: "Modificar usuario" },
  ]
};


export const SUB_SECTION_ROUTE_PURCHASED_HARDWARE_ADD = {
  key: 2,
  name: "Agregar hardware comprado",
  route: SECTION_ROUTE_PURCHASED_HARDWARE.route + "/agregarhardwarecomprado",
  path: [
    { id: 1, name: SECTION_ROUTE_PURCHASED_HARDWARE.name },
    { id: 2, name: "Agregar hardware comprado" },
  ]
};

export const SUB_SECTION_ROUTE_PURCHASED_HARDWARE_MODIFY = {
  key: 3,
  name: "Modificar hardware comprado",
  route: SECTION_ROUTE_PURCHASED_HARDWARE.route + "/modificarhardwarecomprado",
  path: [
    { id: 1, name: SECTION_ROUTE_PURCHASED_HARDWARE.name },
    { id: 2, name: "Modificar hardware comprado" },
  ]
};


export const SUB_SECTION_ROUTE_SALES_ADD = {
  key: 4,
  name: "Agregar venta",
  route: SECTION_ROUTE_SALES.route + "/agregarventa",
  path: [
    { id: 1, name: SECTION_ROUTE_SALES.name },
    { id: 2, name: "Agregar venta" },
  ]
};

export const SUB_SECTION_ROUTE_SALES_MODIFY = {
  key: 5,
  name: "Modificar venta",
  route: SECTION_ROUTE_SALES.route + "/modificarventa",
  path: [
    { id: 1, name: SECTION_ROUTE_SALES.name },
    { id: 2, name: "Modificar venta" },
  ]
};


export const SUB_SECTION_ROUTE_PRODUCTS_ADD = {
  key: 6,
  name: "Agregar producto",
  route: SECTION_ROUTE_PRODUCTS.route + "/agregarproducto",
  path: [
    { id: 1, name: SECTION_ROUTE_PRODUCTS.name },
    { id: 2, name: "Agregar producto" },
  ]
};

export const SUB_SECTION_ROUTE_PRODUCTS_MODIFY = {
  key: 7,
  name: "Modificar producto",
  route: SECTION_ROUTE_PRODUCTS.route + "/modificarproducto",
  path: [
    { id: 1, name: SECTION_ROUTE_PRODUCTS.name },
    { id: 2, name: "Modificar producto" },
  ]
};

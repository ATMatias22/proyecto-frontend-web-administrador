export const MAIN_ROUTE_PANEL_ADMINISTRATOR =
  { route: "/paneladministrador" }

export const INDEX = {
  route: "/"
}

export const SECTION_ROUTE_PROFILE = {
  key: 1,
  name: "Perfil",
  icon: "bi bi-person-fill",
  route: MAIN_ROUTE_PANEL_ADMINISTRATOR.route + "/perfil",
  path: [
    { id: 1, name: "Perfil" },

  ]
}

export const SECTION_ROUTE_USERS = {
  key: 2,
  name: "Usuarios",
  icon: "bi bi-people-fill",
  route: MAIN_ROUTE_PANEL_ADMINISTRATOR.route + "/usuarios",
  path: [
    { id: 1, name: "Usuarios" },
  ]

}

export const SECTION_ROUTE_PURCHASED_HARDWARE = {
  key: 3,
  name: "Hardware comprado",
  icon: "bi bi-motherboard",
  route: MAIN_ROUTE_PANEL_ADMINISTRATOR.route + "/hardwarecomprado",
  path: [
    { id: 1, name: "Hardware comprado" },
  ]
}


export const SECTION_ROUTE_SALES = {
  key: 4,
  name: "Ventas",
  icon: "bi bi-coin",
  route: MAIN_ROUTE_PANEL_ADMINISTRATOR.route + "/ventas",
  path: [
    { id: 1, name: "Ventas" },
  ]
}

export const SECTION_ROUTE_PRODUCTS = {
  key: 5,
  name: "Productos",
  icon: "bi bi-coin",
  route: MAIN_ROUTE_PANEL_ADMINISTRATOR.route + "/productos",
  path: [
    { id: 1, name: "Productos" },
  ]
}

export const SECTION_ROUTE_CONTACT = {
  key: 6,
  name: "Contacto",
  icon: "bi bi-people-fill",
  route: MAIN_ROUTE_PANEL_ADMINISTRATOR.route + "/contacto",
  path: [
    { id: 1, name: "Contacto" },
  ]
}


export const SECTIONS = [
  SECTION_ROUTE_PROFILE,
  SECTION_ROUTE_USERS,
  SECTION_ROUTE_PURCHASED_HARDWARE,
  SECTION_ROUTE_SALES,
  SECTION_ROUTE_PRODUCTS,
  SECTION_ROUTE_CONTACT
]


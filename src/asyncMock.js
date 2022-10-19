const producto = [
    {id:1,
   title: "Estantería Moderna WHITE",
   precio: 269999,
   categoria: 'living',
   img:"https://annahdecoarg.netlify.app/assets/Galerias/verticales/estanteriaModernaAlta.jpg",
   items: 'estantería',
   descripcion: 'Estanteria hecha con madera prensada captada de árboles deforestados por tormentas en la patagonia Argentina',
   alt:'Estanteria con espacio para television, plantas, libros',
   categoria:'living'
   },

   {id:2,
       title: "Set Habitación Coreana",
       precio: 400000,
       categoria: 'dormitorio',
       img:"https://annahdecoarg.netlify.app/assets/Galerias/camaCoreana.jpg",
       items: 'cama foam',//,'biombo madera', 'alfombra cabano'
       descripcion: "Estanteria hecha con madera prensada captada de árboles deforestados por tormentas en la patagonia Argentina.",
       alt:'Estanteria con espacio para television, plantas, libros.',
       categoria:'habitacion'
    },

    {id:3,
       title: "Set Rustic Wooden",
       precio: 250000,
       categoria: 'living',
       img:"https://annahdecoarg.netlify.app/assets/Galerias/verticales/vertical%20sillon%20mimbre%20espejos.jpg",
       items: 'sillon de mimbre', //'mesa ratonera','lampara velador','espejos redondos','cajon mimbre'
       descripcion: 'Estanteria hecha con madera prensada captada de árboles deforestados por tormentas en la patagonia Argentina.',
   alt:'Estanteria con espacio para television, plantas, libros.',
   categoria:'living'
   },     
   

    {  id: 4,
       title: "Set at home",
       precio: '25000',
       categoria: 'living',
       img:"https://annahdecoarg.netlify.app/assets/Galerias/verticales/vertical%20sofa%20ratonera%20laptop.jpg",
       items:'sofa ultra soft',//, 'manta fluffy', 'alfombra fluffy','banco multiuso','velador de piso lofi','macetero wooden annah'
      descripcion: 'Estanteria hecha con madera prensada captada de árboles deforestados por tormentas en la patagonia Argentina.',
   alt:'Estanteria con espacio para television, plantas, libros.',
   categoria:'comedor'
       },
        
   {id:5,
           title: "Mesa Floral Marmol Wooden, Set de tardes de Té",
           precio: 150.000,
           categoria: 'comedor',
           img:"https://annahdecoarg.netlify.app/assets/Galerias/verticales/mesaDeTeFlores.jpg",
           items:'mesa circular de marmol',//,'estructura de madera recuperada','florero de cristal'
           descripcion: 'Mesa Circular de Mármol, estructura de madera recuperada de bosques patágonicos, Cuero Vegano. Florero de Cristal.',
           alt:'Mesa circular de marmol, patas de madera patagónica, sillas de cuero vegano.',
           categoria:'living'
           },

    { id:6,
           title: "Bar Annah Deco",
           precio: 1750.000 ,
           categoria: 'comercial',
           img:"https://annahdecoarg.netlify.app/assets/Galerias/living%20bar%20full%20deco.jpg",
           items:'set completo bar cafeteria',//, 'mesas circulares de hierro','sillas patagonicas',' biblioteca embebida','lampara hierro annah', ' empapelado bosques argentinos',
           descripcion: 'Estanteria hecha con madera prensada captada de árboles deforestados por tormentas en la patagonia Argentina.',
           alt:'Estanteria con espacio para television, plantas, libros.',
           categoria:'comercio'
           },           
];


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}

export const getProductoById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductosByCategoria = (categoriaProductos) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoriaProductos))
        }, 500)
    })
}
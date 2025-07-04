import post1 from "@/assets/post1.jpg";
import post2 from "@/assets/post2.jpg";
import post3 from "@/assets/post3.jpg";
import post4 from "@/assets/post4.jpg";
import post5 from "@/assets/post5.jpg";
import post6 from "@/assets/post6.jpg";
import post7 from "@/assets/post7.jpg";
import post8 from "@/assets/post8.jpg";

export const posts = [
  {
    id: '1',
    title: 'Receta fácil de pasta al pesto casero',
    content:
      'Prepara una deliciosa pasta al pesto con ingredientes frescos como albahaca, ajo, piñones, queso parmesano y aceite de oliva. Una receta rápida, sabrosa y perfecta para una cena ligera.',
    image: post1,
    category: 'Plato fuerte',
    ingredients: ['Pasta', 'Albahaca', 'Ajo', 'Piñones', 'Queso parmesano', 'Aceite de oliva'],
    steps: [
      'Cocina la pasta en agua con sal hasta que esté al dente.',
      'En una licuadora, mezcla la albahaca, ajo, piñones, queso y aceite hasta obtener una salsa cremosa.',
      'Escurre la pasta y mézclala con el pesto.',
      'Sirve caliente y espolvorea queso parmesano por encima.'
    ],
    rating: 2
  },
  {
    id: '2',
    title: 'Los secretos para una hamburguesa jugosa y perfecta',
    content:
      'Descubre cómo lograr una hamburguesa casera ideal: carne bien sazonada, sellado a fuego alto, pan suave y toppings clásicos que resaltan el sabor sin opacarlo.',
    image: post2,
    category: 'Plato fuerte',
    ingredients: ['Carne molida', 'Pan de hamburguesa', 'Queso', 'Lechuga', 'Tomate', 'Cebolla', 'Salsa'],
    steps: [
      'Forma bolas de carne y aplástalas ligeramente.',
      'Sazona con sal y pimienta.',
      'Cocina en sartén caliente por ambos lados hasta que estén doradas.',
      'Coloca el queso encima y deja que se derrita.',
      'Arma la hamburguesa con el pan y los toppings de tu preferencia.'
    ],
    rating: 4
  },
  {
    id: '3',
    title: 'Postre rápido: mousse de chocolate con 3 ingredientes',
    content:
      'Este mousse de chocolate es ideal cuando quieres algo dulce sin complicaciones. Solo necesitas chocolate negro, crema para batir y un toque de azúcar. ¡Listo en minutos!',
    image: post3,
    category: 'Postre',
    ingredients: ['Chocolate negro', 'Crema para batir', 'Azúcar'],
    steps: [
      'Derrite el chocolate a baño maría.',
      'Bate la crema con el azúcar hasta que forme picos suaves.',
      'Incorpora el chocolate derretido con movimientos envolventes.',
      'Refrigera al menos 1 hora antes de servir.'
    ],
    rating: 5
  },
  {
    id: '4',
    title: 'Cómo preparar pizza casera con masa crujiente',
    content:
      'Aprende a preparar masa desde cero y descubre los secretos para lograr una base crujiente y bordes esponjosos. Agrega tus toppings favoritos y disfruta en casa.',
    image: post4,
    category: 'Plato fuerte',
    ingredients: ['Harina', 'Levadura', 'Agua', 'Queso mozzarella', 'Salsa de tomate', 'Albahaca'],
    steps: [
      'Mezcla la harina con la levadura y el agua, y deja reposar hasta que duplique su tamaño.',
      'Estira la masa en forma de disco.',
      'Agrega salsa de tomate, queso y otros ingredientes.',
      'Hornea a 220°C por 15-20 minutos.',
      'Decora con albahaca fresca al salir del horno.'
    ],
    rating: 4
  },
  {
    id: '5',
    title: 'Ensalada mediterránea: saludable, fresca y deliciosa',
    content:
      'Ideal para el almuerzo, esta ensalada combina tomates cherry, pepino, queso feta, aceitunas y un aderezo de aceite de oliva y limón.',
    image: post5,
    category: 'Entrada',
    ingredients: ['Tomates cherry', 'Pepino', 'Queso feta', 'Aceitunas negras', 'Aceite de oliva', 'Limón'],
    steps: [
      'Lava y corta los vegetales en cubos pequeños.',
      'Desmenuza el queso feta.',
      'En un tazón mezcla todos los ingredientes.',
      'Aliña con aceite de oliva, jugo de limón, sal y pimienta.',
      'Sirve fría.'
    ],
    rating: 3
  },
  {
    id: '6',
    title: 'Tarta de frutos rojos con base de galleta',
    content:
      'Un postre elegante y sencillo con frutos rojos frescos sobre una base crocante de galleta y una crema suave de vainilla.',
    image: post6,
    category: 'Postre',
    ingredients: ['Galletas', 'Mantequilla', 'Frutos rojos', 'Queso crema', 'Azúcar', 'Vainilla'],
    steps: [
      'Tritura las galletas y mezcla con mantequilla derretida.',
      'Presiona la mezcla en un molde para formar la base.',
      'Bate el queso crema con azúcar y vainilla hasta que esté suave.',
      'Vierte la crema sobre la base y decora con frutos rojos.',
      'Refrigera al menos 2 horas antes de servir.'
    ],
    rating: 3
  },
  {
    id: '7',
    title: 'Tacos al pastor al estilo callejero',
    content:
      'Prepara carne marinada con achiote y piña al estilo tradicional, servida sobre tortillas calientes con cilantro y cebolla.',
    image: post7,
    category: 'Plato fuerte',
    ingredients: ['Carne de cerdo', 'Achiote', 'Piña', 'Tortillas', 'Cilantro', 'Cebolla'],
    steps: [
      'Marina la carne con achiote, jugo de piña y especias por varias horas.',
      'Cocina la carne a fuego alto hasta dorar.',
      'Calienta las tortillas.',
      'Sirve la carne en las tortillas con piña, cebolla y cilantro.',
      'Acompaña con salsa al gusto.'
    ],
    rating: 5
  },
  {
    id: '8',
    title: 'Café dalgona en casa: receta paso a paso',
    content:
      'Solo necesitas café instantáneo, azúcar y leche para preparar esta bebida viral con una espuma increíblemente cremosa.',
    image: post8,
    category: 'Bebida',
    ingredients: ['Café instantáneo', 'Azúcar', 'Agua caliente', 'Leche'],
    steps: [
      'Bate el café, azúcar y agua caliente hasta obtener una espuma espesa.',
      'Llena un vaso con leche fría o caliente.',
      'Coloca la espuma de café sobre la leche.',
      'Sirve inmediatamente y mezcla antes de beber.'
    ],
    rating: 4
  },
];

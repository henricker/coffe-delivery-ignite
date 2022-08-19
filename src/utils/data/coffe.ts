import americanoImage from '../../assets/coffee/americano.png'
import arabeImage from '../../assets/coffee/arabe.png'
import cafeComLeiteImage from '../../assets/coffee/cafe-com-leite.png'
import cafeGeladoImage from '../../assets/coffee/cafe-gelado.png'
import capuccinoImage from '../../assets/coffee/capuccino.png'
import chocolateQuenteImage from '../../assets/coffee/chocolate-quente.png'
import cubanoImage from '../../assets/coffee/cubano.png'
import expressoCremosoImage from '../../assets/coffee/expresso-cremoso.png'
import expressoImage from '../../assets/coffee/expresso.png'
import havaianoImage from '../../assets/coffee/havaiano.png'
import irlandesImage from '../../assets/coffee/irlandes.png'
import latteImage from '../../assets/coffee/latte.png'
import macchiatoImage from '../../assets/coffee/macchiato.png'
import mochaccinoImage from '../../assets/coffee/mochaccino.png'

export const coffeesData = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: expressoImage,
    specifications: ['Tradicional'],
    price: 4.9,
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: americanoImage,
    specifications: ['Tradicional'],
    price: 5.9,
  },

  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: expressoCremosoImage,
    specifications: ['Tradicional'],
    price: 6.9,
  },

  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: cafeGeladoImage,
    specifications: ['Tradicional', 'Gelado'],
    price: 6.9,
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: cafeComLeiteImage,
    specifications: ['Tradicional', 'Com leite'],
    price: 6.9,
  },
  {
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: latteImage,
    specifications: ['Tradicional', 'Com leite'],
    price: 8.9,
  },
  {
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: capuccinoImage,
    specifications: ['Tradicional', 'Com leite'],
    price: 9.9,
  },
  {
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: macchiatoImage,
    specifications: ['Tradicional', 'Com leite'],
    price: 9.9,
  },
  {
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: mochaccinoImage,
    specifications: ['Tradicional', 'Com leite'],
    price: 7.9,
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: chocolateQuenteImage,
    specifications: ['Especial', 'Com leite'],
    price: 9.9,
  },
  {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: cubanoImage,
    specifications: ['Especial', 'Alcoólico', 'Gelado'],
    price: 8.9,
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: havaianoImage,
    specifications: ['Especial'],
    price: 9.9,
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: arabeImage,
    specifications: ['Especial'],
    price: 8.9,
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: irlandesImage,
    specifications: ['Especial', 'Alcoólico'],
    price: 9.9,
  },
]

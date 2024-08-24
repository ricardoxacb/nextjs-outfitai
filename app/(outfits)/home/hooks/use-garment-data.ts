export default function useGarmentData() {
  return {
    man: {
      casual: {
        top: [
          ['t-shirt', 'Camiseta'],
          ['polo shirt', 'Polo'],
          ['jacket', 'Chaqueta']
        ],
        bottom: [
          ['jeans', 'Jeans'],
          ['joggers', 'Joggers'],
          ['shorts', 'Shorts']
        ],
        shoes: [
          ['sneakers', 'Tenis'],
          ['loafers', 'Mocasines']
        ]
      },
      sporty: {
        top: [
          ['t-shirt', 'Camiseta'],
          ['sweatshirt', 'Sudadera']
        ],
        bottom: [
          ['joggers', 'Joggers'],
          ['shorts', 'Shorts']
        ],
        shoes: [['running shoes', 'Tenis']]
      },
      urban: {
        top: [
          ['hoodie', 'Sudadera'],
          ['jacket', 'Chaqueta']
        ],
        bottom: [
          ['jeans', 'Jeans'],
          ['joggers', 'Joggers']
        ],
        shoes: [
          ['vans', 'Vans'],
          ['boots', 'Botas']
        ]
      },
      elegant: {
        top: [
          ['shirt', 'Camisa'],
          ['blazer', 'Blazer']
        ],
        bottom: [['dress pants', 'Clásico']],
        shoes: [
          ['black oxford round-toe shoes', 'Oxford'],
          ['brogues', 'Brogue']
        ]
      }
    },
    woman: {
      casual: {
        top: [
          ['t-shirt', 'Camiseta'],
          ['blouse', 'Blusa'],
          ['tank top', 'Top']
        ],
        bottom: [
          ['jeans', 'Jeans'],
          ['shorts', 'Shorts'],
          ['skirt', 'Falda']
        ],
        shoes: [
          ['ballet flats', 'Bailarinas'],
          ['sandals', 'Sandalias']
        ]
      },
      elegant: {
        top: [
          ['blouse', 'Blusa'],
          ['blazer', 'Blazer'],
          ['peplum top', 'Top']
        ],
        bottom: [
          ['dress pants', 'Pantalones'],
          ['pencil skirt', 'Falda']
        ],
        shoes: [
          ['high heels', 'Tacones'],
          ['ankle boots', 'Botines']
        ]
      },
      sporty: {
        top: [
          ['sweatshirt', 'Sudadera'],
          ['athletic tank', 'Top'],
          ['sports bra', 'Sujetador']
        ],
        bottom: [
          ['joggers', 'Joggers'],
          ['shorts', 'Shorts']
        ],
        shoes: [['sneakers', 'Tenis']]
      },
      urban: {
        top: [
          ['denim jacket', 'Chaqueta'],
          ['hoodie', 'Sudadera'],
          ['crop top', 'Top corto']
        ],
        bottom: [
          ['cargo pants', 'Pantalones'],
          ['ripped jeans', 'Jeans'],
          ['denim shorts', 'Shorts']
        ],
        shoes: [['slip-on sneakers', 'Zapatillas']]
      }
    }
  }
}

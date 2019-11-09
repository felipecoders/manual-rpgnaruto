export default [
  {
    name: 'Aliados',
    description:
      'Cada ponto em aliados é a quantidade de aliados que você tem.',
    // 1 ponto de 1 à 5, etc...
    values: [[1, 5], [5, 15], [30, 50], [50, 100], [100, 300]],
  },
  {
    name: 'Recursos',
    description:
      'Cada ponto em recursos representa o seu patrimônio ou de sua família.',
    values: [
      [3000, 6000],
      [12000, 24000],
      [48000, 96000],
      [192000, 384000],
      [1000000, 3000000],
    ],
  },
  {
    name: 'Status',
    description: 'Cada ponto representa o quão respeitado você é.',
    values: [
      'Dentro do clã',
      'Dentro do Bairro',
      'Dentro da vila',
      'Dentro do país',
      'Em outros países',
    ],
  },
  {
    name: 'Fama',
    description: 'Cada ponto representa o quão você é conhecido.',
    values: [
      'Dentro do clã',
      'Dentro do Bairro',
      'Dentro da vila',
      'Dentro do país',
      'Em outros países',
    ],
  },
  {
    name: 'Mentor',
    description:
      'Cada ponto representa o nível do seu mentor e também a quantidade de mentores.',
    values: ['Chunin', 'Jounin', 'ANBU', 'Ancião', 'Hokage'],
  },
  {
    name: 'Contatos',
    description: 'Cada ponto representa o nível de informação que você obterá.',
  },
];

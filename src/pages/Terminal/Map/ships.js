const ships = [
  {
    id: Math.random(),
    name: 'MARIA',
    type: 'BULK',
    IMO: 9577422,
    MMSI: 636014652,
    Indicativo: 'A8VQ5',
    Bandeira: 'Liberia [LR]',
    ship_type: 'Cargo',
    ton: 34335,
    port: '58407t',
    length: '196m × 32.25m',
    construction: '2011',
    state: 'Ativo',
    cords: {
      lat: '-24.07264',
      long: '-46.34467',
    },
    img: 'https://photos.marinetraffic.com/ais/showphoto.aspx?photoid=404196'
  },
];

export default ships;

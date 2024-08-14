const { ObjectId } = require('mongodb');

const dbDataInput = {
  children: [
    {
      _id: new ObjectId('64e1f476d9a9da9dbeade001'), // ID unique pour Victor
      name: 'Victor',
      birthDate: '2021-02-27T15:38:33.177+00:00',
      gender: 'M',
    },
    {
      _id: new ObjectId('64e1f476d9a9da9dbeade002'), // ID unique pour Ségolène
      name: 'Ségolène',
      birthDate: '2021-03-17T10:27:15.187+00:00',
      gender: 'F',
    },
    {
      _id: new ObjectId('64e1f476d9a9da9dbeade003'), // ID unique pour Camille
      name: 'Camille',
      birthDate: '2021-01-02T10:17:35.457+00:00',
      gender: 'F',
    },
  ],
  events: [
    {
      _id: new ObjectId('64e1f476d9a9da9dbeade101'), // ID unique pour l'événement
      date: '2022-01-20T12:10:00.000+00:00',
      child: new ObjectId('64e1f476d9a9da9dbeade001'), // ID de Victor
      name: 'Début de la sieste',
    },
    {
      _id: new ObjectId('64e1f476d9a9da9dbeade102'), // ID unique pour l'événement
      date: '2022-01-20T14:10:00.000+00:00',
      child: new ObjectId('64e1f476d9a9da9dbeade001'), // ID de Victor
      name: 'Fin de la sieste',
    },
    {
      _id: new ObjectId('64e1f476d9a9da9dbeade103'), // ID unique pour l'événement
      date: '2022-01-20T12:00:00.000+00:00',
      child: new ObjectId('64e1f476d9a9da9dbeade001'), // ID de Victor
      name: 'Changement de lange',
    },
  ],
};

module.exports = { dbDataInput };

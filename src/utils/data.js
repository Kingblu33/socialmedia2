export const categories = [
  {
    name: 'nature',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg',
  },
  {
    name: 'anime',
    image: 'https://i.pinimg.com/originals/cd/98/87/cd9887a99ed579605a92c1bd8b22cc3f.jpg',
  },
  {
    name: 'sports',
    image: 'https://images.cdn4.stockunlimited.net/preview1300/soccer-wallpaper_1817518.jpg',
  },
  {
    name: 'food',
    image: 'https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw=',
  },
  {
    name: 'portait',
    image: 'https://wallpapercave.com/wp/wp2419342.jpg',
  },
  {
    name: 'fashion',
    image: 'https://wallpaper.dog/large/20386210.png',
  },
  {
    name: 'architectural',
    image: 'https://wallpaperaccess.com/full/153244.jpg',
  },
  {
    name: 'products',
    image: 'https://c0.wallpaperflare.com/preview/583/859/760/flat-lay-photography-of-silver-apple-products.jpg',
  }, {
    name: 'pets',
    image: 'https://wallpapercave.com/wp/wp2544022.jpg',
  },
  {
    name: 'game',
    image: 'https://wallpaperaccess.com/full/7445.jpg',
  }, {
    name: 'kids',
    image: 'https://i.etsystatic.com/25499622/r/il/a128a4/3897596002/il_570xN.3897596002_d9on.jpg',
  }, {
    name: 'scientific',
    image: 'https://i.etsystatic.com/23334810/r/il/cab73c/2629458692/il_fullxfull.2629458692_6jde.jpg',
  },
  {
    name: 'romance',
    image: 'https://wallpapercave.com/wp/wp5258759.jpg',
  },
  {
    name: 'mythical',
    image: 'https://c4.wallpaperflare.com/wallpaper/52/308/994/four-horsemen-of-the-apocalypse-artwork-fantasy-art-wallpaper-preview.jpg',
  },
  {
    name: 'others',
    image: 'https://c4.wallpaperflare.com/wallpaper/52/308/994/four-horsemen-of-the-apocalypse-artwork-fantasy-art-wallpaper-preview.jpg',
  },
];

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};
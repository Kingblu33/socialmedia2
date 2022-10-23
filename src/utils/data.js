export const categories = [
  {
    name: 'shonen',
    image: 'https://wallpaper.dog/large/5562906.jpg',
  },
  {
    name: 'shoujo',
    image: 'https://images2.alphacoders.com/454/thumb-1920-454764.jpg',
  },
  {
    name: 'seinen',
    image: 'https://wallpaperaccess.com/full/1120772.jpg',
  },
  {
    name: 'josei',
    image: 'https://wallpapercave.com/wp/wp5329460.jpg',
  },
  {
    name: 'harem',
    image: 'https://w0.peakpx.com/wallpaper/304/502/HD-wallpaper-waifus-paradise-anime-harem-hunterxhunter-manga-mikasa-reverse-harem-sinon-waifu-waifus-zero-two.jpg',
  },
  {
    name: 'post-apocalyptic',
    image: 'https://images5.alphacoders.com/508/508247.jpg',
  },
  {
    name: 'sports ',
    image: 'https://c4.wallpaperflare.com/wallpaper/186/803/587/anime-haikyu-wallpaper-preview.jpg',
  },
  {
    name: 'art',
    image: 'https://i.pinimg.com/736x/f4/e5/ba/f4e5ba22311039662dd253be33bf5f0e.jpg',
  }, {
    name: 'travel',
    image: 'https://i.pinimg.com/236x/fa/95/98/fa95986f2c408098531ca7cc78aee3a4.jpg',
  },
  {
    name: 'Game',
    image: 'https://wallpaperaccess.com/full/259563.jpg',
  }, {
    name: 'Kids',
    image: 'https://wallpaperaccess.com/full/1186567.jpg',
  }, {
    name: 'Romance ',
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7abf8231-138c-4aae-a19f-8be568721bbb/d1h0fn6-8e40dcdb-619d-443d-bfc4-5bb8ef9595b4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdhYmY4MjMxLTEzOGMtNGFhZS1hMTlmLThiZTU2ODcyMWJiYlwvZDFoMGZuNi04ZTQwZGNkYi02MTlkLTQ0M2QtYmZjNC01YmI4ZWY5NTk1YjQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HLSTmpytNUOcWGKqqhaOP5XaeuwDs4RVMimuPXxAMSs',
  },
  {
    name: 'others',
    image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
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
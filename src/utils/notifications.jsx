import toast from 'react-hot-toast';

export const showSearchQueryAbsence = () => {
  toast(
    'No, no, no! God, no! To search for movies you need to specify what you are looking for.',
    {
      icon: '🤦‍♂️',
    }
  );
};

export const showSearchQueryRepeat = searchQuery => {
  toast(
    `Bro, you already found all the movies on the query "${searchQuery}".`,
    {
      icon: '🙅‍♂️',
    }
  );
};

export const showSearchResult = totalResults => {
  toast(`Hooray! We found ${totalResults} movies for you.`, {
    icon: '🤟',
  });
};

export const showIncorrectQuery = searchQuery => {
  toast(
    `Sorry, there are no movies matching your query: "${searchQuery}". Please try to search something else.`,
    {
      icon: '🤷‍♂️',
    }
  );
};

export const showQueryError = error => {
  toast(`You caught the following error: ${error.message}.`, {
    icon: '🐷',
  });
};

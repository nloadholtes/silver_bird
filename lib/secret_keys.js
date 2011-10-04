/* 
  You should fill this file with your API keys
*/
var SecretKeys = {
  twitter: {
    consumerSecret: '9xoEb72zHqBCKJTsi0wZw8l9O12SfMdvvn4A2GM',
    consumerKey: 'goM7Y8K1CNtLkc9iB3jg'
  },
  identica: {
    consumerSecret: '',
    consumerKey: ''
  },
  yfrog: {
    key: ''
  },
  twitpic: {
    key: ''
  },

  hasValidKeys: function() {
    return (this.twitter.consumerSecret != '' && this.twitter.consumerKey != '') ||
            (this.identica.consumerSecret != '' && this.identica.consumerKey != '');
  }
};

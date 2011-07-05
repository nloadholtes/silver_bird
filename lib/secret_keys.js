/* 
  You should fill this file with your API keys
*/
var SecretKeys = {
  twitter: {
    consumerSecret: 'miyA8OgNCe77OSmc3eV4FT49y4ZslSALs2pDUzU8g',
    consumerKey: 'b4YIrDbXhNcdCVqpgHkVyQ'
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
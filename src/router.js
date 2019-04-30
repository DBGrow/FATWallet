import Vue from 'vue';
import Router from 'vue-router';
import TrackToken from './views/TrackToken.vue';
import Settings from './views/Settings.vue';
import Token from './views/Token.vue';
import IssueToken from './views/IssueToken.vue';
import CoinbaseTransaction from './views/CoinbaseTransaction.vue';
import Actions from './views/Actions.vue';
import Factoid from './views/Factoid.vue';
import Start from './views/Start.vue';
import NewWallet from './views/NewWallet.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: { name: 'Start' } },
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '/new-wallet',
      name: 'NewWallet',
      component: NewWallet
    },
    {
      path: '/actions',
      name: 'Actions',
      component: Actions
    },
    {
      path: '/fct',
      name: 'Factoid',
      component: Factoid
    },
    {
      path: '/track-token',
      name: 'TrackToken',
      component: TrackToken
    },
    {
      path: '/issue-token',
      name: 'IssueToken',
      component: IssueToken
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/token/:chainid',
      name: 'Token',
      component: Token
    },
    {
      path: '/coinbase-transaction',
      name: 'CoinbaseTransaction',
      component: CoinbaseTransaction
    }
  ]
});

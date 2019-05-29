import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../views/main/Layout.vue';
import Cookies from 'js-cookie'
import store from '../store/index'
import { getCreateAccount } from '_api/exchange.js'
import { clearLocalStorage } from '@/config'
const HomePageMain = () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
const ExchangeMain = () => import(/* webpackChunkName: "exchange" */ '../views/exchange/Exchange.vue')
import download from "../views/download/download.vue";
// import Login from '../views/login/Login.vue';
// import Register from '../views/login/register.vue';
const Login = () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue')
const Register = () => import(/* webpackChunkName: "register" */ '../views/login/register.vue')
const About = () => import(/* webpackChunkName: "about" */ '../views/about/About.vue')
const Captial = () => import(/* webpackChunkName: "about" */ '../views/captial/Captial.vue')


import buyMining from '../views/mining/buyMining.vue';
import lockWarehouseMining from '../views/mining/lockWarehouseMining.vue';
import superMiner from '../views/mining/superMiner.vue';
import reliefFee from '../views/mining/reliefFee.vue';

import Google from '../views/login/google.vue';
import Forgot from '../views/forgotPassword/forgot.vue';
import SafeVertification from '../views/forgotPassword/safeVertification.vue';
import resetNewpass from '../views/forgotPassword/resetNewpass.vue';
import safeCenter from '../views/sateCenter/safeCenter.vue';
import bandEmail from '../views/sateCenter/bandEmail.vue';
import bandPhone from '../views/sateCenter/bandPhone.vue';
import order from '../views/order/order.vue'

const balances = () => import(/* webpackChunkName: "balances" */ '../views/balances/balances.vue')
// import balances from '../views/balances/balances.vue'
import deposit from '../views/balances/deposit.vue'
import withdrawal from '../views/balances/withdrawal.vue'
import transaction_history from '../views/balances/transaction_history.vue'
import originLoginPassword from "../views/resetLoginPassword/originPasswrod.vue";
import newPassword from "../views/resetLoginPassword/newPassword.vue";
import originTradePassword from "../views/resetTradePasswrod/originTradePassword.vue";
import newtradePassword from "../views/resetTradePasswrod/newtradePassword.vue"
import verfifyEmail from "../views/login/verifyEmail.vue";
import activeEmail from "../views/login/activeEmail.vue";
import terms from "../views/legal/terms.vue";
import tradingRules from "../views/legal/TradingRules.vue";
import privacy from "../views/legal/privice.vue";
import fee from "../views/legal/fee.vue";
import disclaimer from "../views/legal/disclaimer.vue";
import aml from "../views/legal/aml.vue";
import setGoogle from "../views/google/setGoogle.vue";
import closeGoogle from "../views/google/closeGoogle.vue";
import identiy from "../views/identity/identity.vue"
import identityResult from "../views/identity/identityResult.vue"
import Invite from "../views/invite/Invite.vue"
import Test from "../views/TestUtil/Test";
import USHOME from "../views/home/us/USHOME";

// const Test = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '../views/TestUtil/Test') 
//韩国挖矿活动
import miningKorea from "../views/miningKorea/miningKorea.vue";
import myKoreaMining from "../views/miningKorea/MyKoreaMining";
import groupDetail from "../views/miningKorea/groupDetail.vue";
//usdd
import usdd from "../views/usdd/usdd.vue";
import FF from "../views/FF/FF.vue";
import stock from "../views/assestInfo/s/stock.vue"
import cinfo from "../views/assestInfo/c/CInfo.vue"

import StockToken from "../views/tongzheng/s/stock.vue"
//API
import createAPI from "../views/api/createAPI.vue";
import sendEmail from "../views/api/sendEmail.vue";
import apiManage from "../views/api/apiManage.vue";
//aml
import amlKyc from '../views/aml/amlkyc.vue';
import amlkycResult from '../views/aml/amlkycResult.vue';
import editAmlKyc from "../views/aml/editAmlKyc.vue";

//us balance
import deposit_usd from '../views/balances/deposit_usd.vue'
import withdrawal_usd from '../views/balances/withdrawal_usd.vue'
import bankSetting from '../views/balances/bankSetting.vue'

// import Fhome from "../views/home/F-home/Fhome.vue";
// import Bhome from "../views/home/B-home/Bhome.vue";
// import Shome from "../views/home/S-home/Shome.vue";
// import Lhome from "../views/home/L-home/Lhome.vue";
// import Chome from "../views/home/C-home/Chome.vue";
const Fhome = () => import(/* webpackChunkName: "fhome" */ '../views/home/F-home/Fhome.vue')
const Bhome = () => import(/* webpackChunkName: "bhome" */ '../views/home/B-home/Bhome.vue')
const Shome = () => import(/* webpackChunkName: "shome" */ '../views/home/S-home/Shome.vue')
const Lhome = () => import(/* webpackChunkName: "lhome" */ '../views/home/L-home/Lhome.vue')
const Chome = () => import(/* webpackChunkName: "chome" */ '../views/home/C-home/Chome.vue')
const interFinanceOne = () =>import(/* webpackChunkName: 'interFinance' */ '../views/interFinance/interFinanceOne.vue') 
const interFinanceTWO = () =>import(/* webpackChunkName: 'interFinance' */ '../views/interFinance/interFinanceTWO.vue') 
const interFinanceThree = () =>import(/* webpackChunkName: 'interFinance' */ '../views/interFinance/interFinanceThree.vue') 
const inviteAto = () =>import(/* webpackChunkName: 'interFinance' */ '../views/inviteAto/inviteAto.vue') 
const beinvited = () =>import(/* webpackChunkName: 'interFinance' */ '../views/inviteAto/beinvited.vue') 
const registerSuccess = () =>import(/* webpackChunkName: 'interFinance' */ '../views/inviteAto/registerSuccess.vue') 

const atoInivteplus = () =>import(/* webpackChunkName: 'interFinance' */ '../views/inviteAtoplus/inviteAtoplus.vue') 
const beinvitedplus = () =>import(/* webpackChunkName: 'interFinance' */ '../views/inviteAtoplus/beinvitedplus.vue') 
const registerSuccessplus = () =>import(/* webpackChunkName: 'interFinance' */ '../views/inviteAtoplus/registerSuccessplus.vue') 

const card = () => import(/* webpackChunkName: "chome" */ '../views/visa.vue')
const redeemsupreme = () => import(/* webpackChunkName: "chome" */ '../views/redeemsupreme.vue')
const tokenizeyeezy = () => import(/* webpackChunkName: "chome" */ '../views/tokenizeyeezy.vue')
const Supreme = () => import(/* webpackChunkName: "chome" */ '../views/Supreme.vue')


import i18n from '@/locale/index.js';

Vue.use(Router)


const router = new Router({
   //history 路由 
   mode:'history',

   routes: [
      {
         path: '/activeEmail',
         name: 'activeEmail',
         meta: {
            title: 'activeEmailTitle'
         },
         component: activeEmail
      },
      {
         path: '/download',
         name: 'download',
         meta: {
            title: 'HomeTitle'
         },
         component: download,
      },
      {
         path: '/test',
         name: 'test',
         meta: {
            title: 'HomeTitle'
         },
         component: Test
      },
      {
         path: '/supreme',
         name: 'supreme',
         meta: {
            title: 'HomeTitle'
         },
         component: Supreme
      },
         {//inviteAto
            path: '/inviteAto',
            name: 'inviteAto',
            meta: {
               title: 'supretitle'
            },
            component: inviteAto
         },
         {//beinvited
            path: '/beinvited',
            name: 'beinvited',
            meta: {
               title: 'supretitle'
            },
            component: beinvited
         },
         {//registerSuccess
            path: '/registerSuccess',
            name: 'registerSuccess',
            meta: {
               title: 'supretitle'
            },
            component: registerSuccess
         },
         {//atoInivtePlus
            path: '/atoInivteplus',
            name: 'atoInivteplus',
            meta: {
               title: 'supinviteplus'
            },
            component: atoInivteplus
         },
          {//beinvitedplus
            path: '/beinvitedplus',
            name: 'beinvitedplus',
            meta: {
               title: 'supinviteplus'
            },
            component: beinvitedplus
         },
          {//registerSuccessplus
            path: '/registerSuccessplus',
            name: 'registerSuccessplus',
            meta: {
               title: 'supinviteplus'
            },
            component: registerSuccessplus
         },
       
      {
         path: '/',
         name: '',
         redirect: '/home',
         component: Layout,
         children: [
            {
               path: 'exchange',
               name: 'exchange',
               beforeEnter: (to, from, next) => {
                  checkSSOToken(to,next)
               },
               meta: {
                  // title:'HomeTokenExchange'
               },
               component: ExchangeMain,
            },
            {
               path: 'home',
               name: 'home',
               meta: {
                  title: 'HomeTitle'
               },
               component: USHOME,
            },

            {
               path: 'Fhome',
               name: 'Fhome',
               meta: {
                  title: 'HomeTitle'
               },
               component: Fhome,
            },
            {
               path: 'Bhome',
               name: 'Bhome',
               meta: {
                  title: 'HomeTitle'
               },
               component: Bhome,
            },
            {
               path: 'Shome',
               name: 'Shome',
               meta: {
                  title: 'HomeTitle'
               },
               component: Shome,
            },
            {
               path: 'Chome',
               name: 'Chome',
               meta: {
                  title: 'HomeTitle'
               },
               component: Chome,
            },
            {
               path: 'Lhome',
               name: 'Lhome',
               meta: {
                  title: 'HomeTitle'
               },
               component: Lhome,
            },
            {
               path: 'login',
               name: 'login',
               meta: {
                  title: 'ExchangeTitle'
               },
               component: Login
            },
            {
               path: 'register',
               name: 'register',
               meta: {
                  title: 'SignUPTitle'
               },
               component: Register
            },
            {
               path: 'google',
               name: 'google',
               meta: {
                  title: ''
               },
               component: Google
            },
            {
               path: 'forgot',
               name: 'forgot',
               meta: {
                  title: 'ForgotPasswordTitle'
               },
               component: Forgot
            },
            {
               path: 'safeVatification',
               name: 'safeVatification',
               meta: {
                  title: 'ForgotPasswordTitle'
               },
               component: SafeVertification
            },
            {
               path: 'resetNewpass',
               name: 'resetNewpass',
               meta: {
                  title: 'ForgotPasswordTitle'
               },
               component: resetNewpass
            },
            {
               path: 'safeCenter',
               name: 'safeCenter',
               beforeEnter: (to, from, next) => {
                  checkSSOToken(to,next)
               },
               meta: {
                  title: 'SecurityCenterTitle'
               },
               component: safeCenter
            },
            {
               path: 'bandEmail',
               name: 'bandEmail',
               meta: {
                  title: 'EnableEmailTitle'
               },
               component: bandEmail
            },
            {
               path: 'bandPhone',
               name: 'bandPhone',
               meta: {
                  title: 'EnableSMSTitle'
               },
               component: bandPhone
            },
            {//修改登录密码
               path: 'originLoginPassword',
               name: 'originLoginPassword',
               meta: {
                  title: 'ChangePasswordTitle'
               },
               component: originLoginPassword
            },
            {//修改登录密码
               path: 'newPassword',
               name: 'newPassword',
               meta: {
                  title: 'ChangePasswordTitle'
               },
               component: newPassword
            },
            {//修改交易密码
               path: 'originTradePassword',
               name: 'originTradePassword',
               meta: {
                  title: 'ResetTradePasswordTitle'
               },
               component: originTradePassword
            },
            {//修改交易密码
               path: 'newtradePassword',
               name: 'newtradePassword',
               meta: {
                  title: 'ResetTradePasswordTitle'
               },
               component: newtradePassword
            },
            {//设置谷歌验证
               path: 'setGoogle',
               name: 'setGoogle',
               meta: {
                  title: 'HomeTitle'
               },
               component: setGoogle
            },
            {//邀请好友
               path: 'invite',
               name: 'invite',
               beforeEnter: (to, from, next) => {
                  checkSSOToken(to,next)
               },
               meta: {
                  title: 'InvitationProgramTitle'
               },
               component: Invite
            },
            {//关闭谷歌验证
               path: 'closeGoogle',
               name: 'closeGoogle',
               meta: {
                  title: ''
               },
               component: closeGoogle
            },
            {//实名认证
               path: 'identiy',
               name: 'identiy',
               meta: {
                  title: 'HomeTitle'
               },
               component: identiy
            },
            {//实名认证
               path: 'identityResult',
               name: 'identityResult',
               meta: {
                  title: ''
               },
               component: identityResult
            },
            {//邮箱提示页面
               path: 'verfifyEmail',
               name: 'verfifyEmail',
               meta: {
                  title: 'verifyEmailTitle'
               },
               component: verfifyEmail
            },
            {//terms
               path: 'terms',
               name: 'terms',
               meta: {
                  title: 'HomeTitle'
               },
               component: terms
            },
            {//tradingRules
               path: 'tradingRules',
               name: 'tradingRules',
               meta: {
                  title: ''
               },
               component: tradingRules
            },
            
            {//privacy
               path: 'privacy',
               name: 'privacy',
               meta: {
                  title: 'HomeTitle'
               },
               component: privacy
            },
            {//fee
               path: 'fee',
               name: 'fee',
               meta: {
                  title: 'HomeTitle'
               },
               component: fee
            },
            {//disclaimer
               path: 'disclaimer',
               name: 'disclaimer',
               meta: {
                  title: 'HomeTitle'
               },
               component: disclaimer
            },
            {//amlKyc
               path: 'amlKyc',
               name: 'amlKyc',
               meta: {
                  title: 'HomeTitle'
               },
               component: amlKyc
            },
              {//amlkycResult
               path: 'amlkycResult',
               name: 'amlkycResult',
               meta: {
                  title: 'HomeTitle'
               },
               component: amlkycResult
            },
            {//editAmlKyc
               path: 'editAmlKyc',
               name: 'editAmlKyc',
               meta: {
                  title: 'HomeTitle'
               },
               component: editAmlKyc
            },
              {//disclaimer
               path: 'aml',
               name: 'aml',
               meta: {
                  title: 'HomeTitle'
               },
               component: aml
            },
            //挖矿
            // {
            //    path: 'buyMining',
            //    name: 'buyMining',
            //    meta: {
            //       title: 'HeaderBuying'
            //    },
            //    component: buyMining
            // },
            // {
            //    path: 'lockWarehouseMining',
            //    name: 'lockWarehouseMining',
            //    meta: {
            //       title: 'HeaderLocking'
            //    },
            //    component: lockWarehouseMining
            // },
            // {
            //    path: 'superMiner',
            //    name: 'superMiner',
            //    meta: {
            //       title: 'HeaderSuperMiner'
            //    },
            //    component: superMiner
            // },
            {
               path: 'about55',
               name: 'about55',
               meta: {
                  title: 'aboutTitle'
               },
               component: About
            },
            {
               path: 'capital',
               name: 'capital',
               meta: {
                  title: 'capital'
               },
               component: Captial
            },
            // {
            //    path: 'reliefFee',
            //    name: 'reliefFee',
            //    // meta: {
            //    //    title: 'HeaderMining'
            //    // },
            //    component: reliefFee
            // },
            //订单
            {
               path: 'order',
               name: 'order',
               beforeEnter: (to, from, next) => {
                  checkSSOToken(to,next)
               },
               meta: {
                  title: 'headerOrder'
               },
               component: order
            },
            //资产
            {
               path: 'balances',
               name: 'balances',
               beforeEnter: (to, from, next) => {
                  checkSSOToken(to,next)
               },
               meta: {
                  title: 'headerBalances'
               },
               component: balances
            },
            {
               path: 'deposit',
               name: 'deposit',
               beforeEnter: (to, from, next) => {
                  checkSSOToken(to,next)
               },
               meta: {
                  title: 'DepositTitle'
               },
               component: deposit
            },
            {
               path: 'withdrawal',
               name: 'withdrawal',
               beforeEnter: (to, from, next) => {
                  checkSSOToken(to,next)
               },
               meta: {
                  title: 'WithdrawalTitle'
               },
               component: withdrawal
            },
            {
               path: 'transaction_history',
               name: 'transaction_history',
               beforeEnter: (to, from, next) => {
                  checkSSOToken(to,next)
               },
               meta: {
                  title: 'tbdhTransactionHistory'
               },
               component: transaction_history
            },
            //us
            {
               path: 'deposit_usd',
               name: 'deposit_usd',
               beforeEnter: (to, from, next) => {
                  checkSSOToken(to,next)
               },
               meta: {
                  title: 'balanceDeposit'
               },
               component: deposit_usd
            },
            {
               path: 'withdrawal_usd',
               name: 'withdrawal_usd',
               beforeEnter: (to, from, next) => {
                  checkSSOToken(to,next)
               },
               meta: {
                  title: 'balanceWithdraw'
               },
               component: withdrawal_usd
            },
            {
               path: 'bankSetting',
               name: 'bankSetting',
               beforeEnter: (to, from, next) => {
                  checkSSOToken(to,next)
               },
               meta: {
                  title: 'balanceBank'
               },
               component: bankSetting
            },
            //韩国挖矿
            {
               path: 'miningKorea',
               name: 'miningKorea',
               meta: {
                  title: 'HomeTitle'
               },
               component: miningKorea
            },
            {
               path: 'myMining',
               name: 'myMining',
               meta: {
                  title: 'HomeTitle'
               },
               component: myKoreaMining
            },

            {//组队详情
               path: 'groupDetail',
               name: 'groupDetail',
               meta: {
                  title: 'HomeTitle'
               },
               component: groupDetail
            },
            // {//usdd
            //    path: 'usdd',
            //    name: 'usdd',
            //    meta: {
            //       title: ''
            //    },
            //    component: usdd
            // }, 
            {//FF
               path: 'FF',
               name: 'FF',
               meta: {
                  title: 'HomeTitle'
               },
               component: FF
            }, {//stock
               path: 'stock',
               name: 'stock',
               meta: {
                  title: 'HomeTitle'
               },
               component: stock
            }, {//usdd
               path: 'cinfo',
               name: 'cinfo',
               meta: {
                  title: 'HomeTitle'
               },
               component: cinfo
            },
            {//usdd
               path: 'StockToken',
               name: 'cintongzhengStockfo',
               meta: {
                  title: 'HomeTitle'
               },
               component: StockToken
            },
            {//api
               path: 'createAPI',
               name: 'createAPI',
               meta: {
                  title: 'HomeTitle'
               },
               component: createAPI
            },
            {//api
               path: 'sendEmail',
               name: 'sendEmail',
               meta: {
                  title: 'HomeTitle'
               },
               component: sendEmail
            },
            {//api
               path: 'apiManage',
               name: 'apiManage',
               meta: {
                  title: 'HomeTitle'
               },
               component: apiManage
            },
            {//api
               path: 'card',
               name: 'card',
               meta: {
                  title: 'card'
               },
               component: card
            },
            {//api
               path: 'redeemsupreme',
               name: 'redeemsupreme',
               meta: {
                  title: 'Redeem Yeezy Sneaker with Yeezy Tokens'
               },
               component: redeemsupreme
            },
            {//api
               path: 'tokenizeyeezy',
               name: 'tokenizeyeezy',
               meta: {
                  title: 'Tokenize Your Yeezy Sneaker for Yeezy Tokens'
               },
               component: tokenizeyeezy
            },
             {//interFinance
               path: 'interFinanceOne',
               name: 'interFinanceOne',
               meta: {
                  title: 'HomeTitle'
               },
               component: interFinanceOne
            },
            {//interFinance
               path: 'interFinanceTWO',
               name: 'interFinanceTWO',
               meta: {
                  title: 'HomeTitle'
               },
               component: interFinanceTWO
            },
             {//interFinance
               path: 'interFinanceThree',
               name: 'interFinanceThree',
               meta: {
                  title: 'HomeTitle'
               },
               component: interFinanceThree
            },
         
            

         ]
      },
      {
         path: '*',
         name: 'error_404',
         component: () => import('@/views/error-page/404.vue')
       }
   ]
})

function checkSSOToken(to,next) {
   let loginToken = Cookies.get('loginToken');
   if (loginToken) {
      getCreateAccount({'ssoToken': loginToken}, {}).then(data => {
         if (data) {
            // window.localStorage.setItem("ACCOUNT_TOKEN", JSON.stringify(data));
            next()
         }
      }).catch(error => {
         //clearLocalStorage()
         // store.commit('changeLoingStatus', false);
         if(to.name =="exchange"){
            next();
         }else{
            next({ path: '/login' })
         }
         //取消登录的状态
         // clearLocalStorage()
         
      })
   } else {
      next()
   }
}

router.beforeEach((to, from, next) => {
   console.log(1111,'beforeEach',to.meta.title,i18n.t(to.meta.title))
   /* 路由发生变化修改页面title */
   if (to.meta.title) {
      document.title = i18n.t(to.meta.title)
   }else{
      document.title = i18n.t('HomeTitle')
   }
   window.scroll(0, 0); //跳转到新页面，将页面头部置顶；
   next()
})

// router.afterEach((to, from) => {
//    console.log(2222,'afterEach')
//    /* 路由发生变化修改页面title */
//    if (to.meta.title) {
//       document.title = i18n.t(to.meta.title)
//    }
//    window.scroll(0, 0); //跳转到新页面，将页面头部置顶；
//    // next()
// })
export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import MetaMask from '../components/MetaMask.vue'
import CandidatePage from '../components/Info-Candidate/CandidatePage'
import ShowVoteRegis from '../components/VoteAndRegis/ShowVoteRegis'
import ScoreVote from '../components/Score/ScoreVote.vue'
import AdMin from '../components/Admin/AdMin.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/MetaMask',
    name: 'MetaMask',
    component: MetaMask
  },
  {
    path: '/candidatepage',
    name: 'CandidatePage',
    component: CandidatePage
  },
  {
    path: '/ShowVoteRegis',
    name: 'ShowVoteRegis',
    component: ShowVoteRegis
  },
  {
    path: '/ScoreVote',
    name: 'ScoreVote',
    component: ScoreVote
  },
  {
    path: '/Admin',
    name: 'Admin Page',
    component: AdMin
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'nav-link active'
})

export default router

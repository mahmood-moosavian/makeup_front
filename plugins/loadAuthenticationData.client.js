import { loadAuth, loadUserData } from '@/helpers/authHelper'

export default async function (context) {
  await loadAuth(context)
  loadUserData(context)
}

export default function ({ store, route, redirect }) {
  if (!route.query.code && !store.state.auth.loggedIn) {
    return redirect("/")
  }
}

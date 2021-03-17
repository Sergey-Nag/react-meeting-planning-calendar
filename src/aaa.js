<Switch>
  <Route exact path="/">
    <Calendar setTitle={setTitle} />
  </Route>
  <Route path="/create-event">
    {users.authUser !== null &&
                    users.authUser.access.createEvents && <CreateEvent setTitle={setTitle} />}
    {users.authUser !== null &&
                    !users.authUser.access.createEvents && (
                      <Redirect to="/" />
    )}
  </Route>
  <Route path="*">
    <PageNotFound setTitle={setTitle} />
  </Route>
</Switch>;

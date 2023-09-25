import authenticated from "../store/auth";

export default function adminHomePage() {
  return (
    <div id="AdminHomePage">
      {authenticated() ? (
        <div id="authenticated">Authenticated</div>
      ) : (
        <div id="unauthenticated">YOU CANNOT ACCESS</div>
      )}
    </div>
  );
}

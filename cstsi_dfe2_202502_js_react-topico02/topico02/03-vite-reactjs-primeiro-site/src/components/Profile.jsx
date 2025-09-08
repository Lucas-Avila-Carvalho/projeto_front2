import { Avatar } from "./Avatar";
import Title from "./Title";

export function Profile({ user }) {
  return <>
    <Title content={user.name} link={user.wiki} />
    <Avatar user={user} />
  </>
}
import { printProps } from "./printProps"
import { UserInfo } from "../ContainerComponent/UserInfo"
import withUser from "./withUser";
import { UserInfoForm } from "./UserInfoForm";

export const baseUrl = "http://localhost:8080/"

// const UserInfoWrapped = printProps(UserInfo);
// const UserInfoWithLoader = withUser(UserInfo, '123')
// const 

function HOCApp() {
  return (
    // <UserInfoWrapped a={1}  b="hello" c={{name: "Shawn"}} />
    // <UserInfoWithLoader/>
    <UserInfoForm/>
  )
}

export default HOCApp
import withEditableUser from "./withEditableUser";
import withEditableResource from "./withEditableResource";
import { baseUrl } from "./HOCApp";

export const UserInfoForm = withEditableResource(({user, onChangeUser, onSaveUser, onResetUser})=>{
    const {name, age, hairColor} = user || {}
    return user ? (
        <>
            <label>
                Name: 
                <input type="text" value={name} onChange={e => onChangeUser({name: e.target.value})} />
            </label>
            <label>
                age: 
                <input type="number" value={age} onChange={e => onChangeUser({age: Number(e.target.value)})} />
            </label>
            <label>
                Hair Color: 
                <input type="text" value={hairColor} onChange={e => onChangeUser({hairColor: e.target.value})} />
            </label>
            <button onClick={onResetUser}>Reset</button>
            <button onClick={onSaveUser}>Save Changes</button>
        </>
    ) : <p>loading...</p>
}, `${baseUrl}users/123`, 'user')
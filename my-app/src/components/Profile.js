function Profile(props)
{
    return <h1>Name:{props.name} {props.surname}
    {props.children}
    </h1>

}
export default Profile;
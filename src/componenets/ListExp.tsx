export function ListExp() {

    const handleSubmit = () => {

    }
    return (<>
        <h2>List Hotels?</h2>
        <form onSubmit={handleSubmit} method="post">
            <input type="text" name="username" id="username" />
            <input type="password" name="password" id="password" />
            <button type="submit">Login</button>
        </form>
    </>)
}

function Container(props) {
    const { children } = props
    return (
        <div className="container py-10 px-5 lg:px-0 mx-auto">
            <div className="flex flex-wrap">{ children }</div>
        </div>
    )
}

export default Container

export const FeatureHome = () => {
    const features = [
        {
            title: "Features 1", description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sit, ipsa ex enim vero
        maxime commodi eos, dolores ea aperiam veniam eligendi quidem earum nulla molestiae
        consequuntur, officiis quae accusantium.`},
        {
            title: "Features 2", description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sit, ipsa ex enim vero
        maxime commodi eos, dolores ea aperiam veniam eligendi quidem earum nulla molestiae
        consequuntur, officiis quae accusantium.`},
        {
            title: "Features 3", description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sit, ipsa ex enim vero
        maxime commodi eos, dolores ea aperiam veniam eligendi quidem earum nulla molestiae
        consequuntur, officiis quae accusantium.`},
        {
            title: "Features 4", description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sit, ipsa ex enim vero
        maxime commodi eos, dolores ea aperiam veniam eligendi quidem earum nulla molestiae
        consequuntur, officiis quae accusantium.`},
    ]
    return <section className="features flex py-2xl">
        <div className="text-area">
            <div className="title text-2xl bold">Keep tracking spending</div>
            <p></p>
        </div>
        <div className="content-area px-md flex wrap">
            {features.map((feature, key) => (
                <div className="feature w-half">
                    <div className="feature-title bold text-md">{feature.title}</div>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
}
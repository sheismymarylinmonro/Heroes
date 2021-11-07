import './heroes.css'

function Hero(props){
    return(
        <div className="hero-card">
            <img src={props.url}/>
            <div className="hero-name">{props.name}</div>
            <div className="text-about">Вселенная</div>
            <div className="universe">{props.universe}</div>
            <div className="text-about">Альтер Эго</div>
    <div className="alter">{props.alter}</div>
    <div className="text-about">Род деятельности</div>
    <div className="hero-job">{props.job}</div>
    <div className="text-about">Друзья</div>
    <div className="hero-friends">{props.friends}</div>
    <div className="text-about">Суперсилы</div>
    <div className="power">{props.power}</div>
        </div>
    )
}

export default Hero;
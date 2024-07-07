import imageIPL from "/LOGO HE VINCI.png";

const Header = (props) => {
    return (
        <div>
            <img src={imageIPL} alt="logo" />
            <h1>{props.title}</h1>
        </div>
    );
}

export default Header;
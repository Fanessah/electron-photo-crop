import icon from '../../../assets/icon.svg'
import {Link} from "react-router-dom"

export const Hello = () => {
    return (
      <div>
        <div className="Hello">
            <h1> My Photo Cropper</h1>
          <img width="200" alt="icon" src={icon} />
        </div>
        <div className="Hello">
          <Link to="/photo>">
            <button type="button">
              <span role="img" aria-label="folded hands">
                🙏 
              </span>
              Crop Photo
            </button>
          </Link>
        </div>
      </div>
    );
  };
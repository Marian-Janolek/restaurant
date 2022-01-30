import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app-specialMenu flex-center section-padding" id="menu">
    <div className="app-specialMenu-title">
      <SubHeading
        title="Menu that fits you palatte
"
      />
      <h1 className="headtext-cormorant">Today's specials</h1>
    </div>
    <div className="app-specialMenu-menu">
      <div className="app-specialMenu-menu-wine flex-center">
        <p className="app-specialMenu-menu-heading">Wine & Beer</p>
        <div className="app-specialMenu-menu-items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              tags={wine.tags}
              price={wine.price}
            />
          ))}
        </div>
      </div>
      <div className="app-specialMenu-menu-img">
        <img src={images.menu} alt="menu img" />
      </div>
      <div className="app-specialMenu-menu-cocktails flex-center">
        <p className="app-specialMenu-menu-heading">Cocktails</p>
        <div className="app-specialMenu-menu-items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              tags={cocktail.tags}
              price={cocktail.price}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom-button">
        view more
      </button>
    </div>
  </div>
);

export default SpecialMenu;

import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app-aboutus app-bg flex-center section-padding" id="about">
    <div className="app-aboutus-overlay flex-center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app-aboutus-content flex-center">
      <div className="app-aboutus-content-about">
        <h1 className="headtext-cormorant">about us</h1>
        <img src={images.spoon} alt="about-spoon" className="spoon-img" />
        <p className="p-opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom-button">
          know more
        </button>
      </div>
      <div className="app-aboutus-content-knife flex-center">
        <img src={images.knife} alt="about-knife" />
      </div>
      <div className="app-aboutus-content-history">
        <h1 className="headtext-cormorant">our history</h1>
        <img src={images.spoon} alt="about-spoon" className="spoon-img" />
        <p className="p-opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom-button">
          know more
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;

import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { Font, LinkAsset } from 'uki-react-components';

const Resources = () => {
  const assetsUrl = useSelector(state => state.app.assetsUrl);

  return (
    <div>
      <Font
        assetsUrl={assetsUrl}
        name="Poppins"
        path="fonts/Poppins-Regular.ttf"
        format="truetype"
      />

      <div className="p-16 custom-font">
        <Typography variant="h6" className="mb-16">
          Custom font - Poppins
        </Typography>
        <Typography>This is custom font.</Typography>
      </div>
      <div className="p-16">
        <Typography variant="h6" className="mb-16">
          Images in assets folder
        </Typography>
        <LinkAsset
          assetsUrl={assetsUrl}
          type="image"
          path="images/demo.png"
          Props={{
            alt: 'demo',
            style: {
              width: '100%'
            }
          }}
        />
      </div>
    </div>
  );
};

export default Resources;

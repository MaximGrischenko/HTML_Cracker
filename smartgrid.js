const smartgrid = require('smart-grid');

const settings = {
  outputStyle: 'less',
  columns: 12,
  offset: '10px',
  container: {
    maxWidth: '960px',
    fields: '10px'
  },
  breakPoints: {
    lg: {
      width: '3840px',
      fields: '20px'
    },
    md: {
      width: "1170px",
      fields: "10px"
    },
    sm: {
      width: "768px",
      fields: "10px"
    },
    xs: {
      width: "480px",
      fields: "5px"
    }
  },
  properties: [
    'justify-content'
  ]
};

smartgrid('./src/assets/styles/partials', settings);